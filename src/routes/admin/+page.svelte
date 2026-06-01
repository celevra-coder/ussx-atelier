<script lang="ts">
	import { onMount } from 'svelte';
	import { getDb, getAuthClient, firebaseEnabled } from '$lib/firebase';
	import { collection, getDocs, query, orderBy, type Timestamp } from 'firebase/firestore';
	import {
		signInWithEmailAndPassword,
		signOut,
		onAuthStateChanged,
		type User
	} from 'firebase/auth';
	import { LogOut, RefreshCw, Download, Search, ShieldCheck } from 'lucide-svelte';

	interface Registration {
		id: string;
		parentName?: string;
		parentEmail?: string;
		parentPhone?: string;
		childName?: string;
		childDob?: string;
		experience?: string;
		selectedCourse?: string;
		ageGroup?: string;
		preferredTime?: string;
		message?: string;
		createdAt?: Timestamp | null;
	}

	interface Inquiry {
		id: string;
		inquiryType?: 'print' | 'solar';
		name?: string;
		email?: string;
		phone?: string;
		description?: string;
		createdAt?: Timestamp | null;
	}

	type Tab = 'registrations' | 'print' | 'solar';

	// --- Auth state ---
	let user = $state<User | null>(null);
	let authReady = $state(false);
	let email = $state('');
	let password = $state('');
	let loginError = $state('');
	let loggingIn = $state(false);

	// --- Data state ---
	let registrations = $state<Registration[]>([]);
	let inquiries = $state<Inquiry[]>([]);
	let loading = $state(false);
	let loadError = $state('');

	// --- UI state ---
	let tab = $state<Tab>('registrations');
	let search = $state('');

	// --- Label maps ---
	const courseLabels: Record<string, string> = {
		'3d-print': '3D Печат',
		lego: 'Lego Роботика',
		infento: 'Infento Kits'
	};
	const experienceLabels: Record<string, string> = {
		beginner: 'Начинаещ',
		some: 'Малко опит',
		experienced: 'Имам опит'
	};
	const ageGroupLabels: Record<string, string> = {
		'5-8': '5–8 г.',
		'8-12': '8–12 г.'
	};
	const label = (map: Record<string, string>, v?: string) => (v ? (map[v] ?? v) : '—');

	function fmtDate(ts?: Timestamp | null): string {
		if (!ts) return '—';
		try {
			return ts.toDate().toLocaleString('bg-BG', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			});
		} catch {
			return '—';
		}
	}

	function age(dob?: string): string {
		if (!dob) return '';
		const d = new Date(dob);
		if (isNaN(d.getTime())) return '';
		const diff = Date.now() - d.getTime();
		const years = Math.floor(diff / (365.25 * 24 * 3600 * 1000));
		return years > 0 ? `${years} г.` : '';
	}

	onMount(() => {
		const auth = getAuthClient();
		if (!auth) {
			authReady = true;
			return;
		}
		const unsub = onAuthStateChanged(auth, (u) => {
			user = u;
			authReady = true;
			if (u) loadData();
			else {
				registrations = [];
				inquiries = [];
			}
		});
		return unsub;
	});

	async function login(e: Event) {
		e.preventDefault();
		const auth = getAuthClient();
		if (!auth) return;
		loggingIn = true;
		loginError = '';
		try {
			await signInWithEmailAndPassword(auth, email.trim(), password);
			password = '';
		} catch (err) {
			const code = (err as { code?: string }).code ?? '';
			loginError =
				code === 'auth/invalid-credential' ||
				code === 'auth/wrong-password' ||
				code === 'auth/user-not-found'
					? 'Грешен имейл или парола.'
					: code === 'auth/too-many-requests'
						? 'Твърде много опити. Опитайте по-късно.'
						: 'Възникна грешка при вход. Опитайте отново.';
		} finally {
			loggingIn = false;
		}
	}

	async function logout() {
		const auth = getAuthClient();
		if (auth) await signOut(auth);
	}

	async function loadData() {
		const db = getDb();
		if (!db) return;
		loading = true;
		loadError = '';
		try {
			const [regSnap, inqSnap] = await Promise.all([
				getDocs(query(collection(db, 'registrations'), orderBy('createdAt', 'desc'))),
				getDocs(query(collection(db, 'inquiries'), orderBy('createdAt', 'desc')))
			]);
			registrations = regSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as Registration);
			inquiries = inqSnap.docs.map((d) => ({ id: d.id, ...d.data() }) as Inquiry);
		} catch (err) {
			console.error('[USSX admin] load failed:', err);
			loadError =
				'Неуспешно зареждане. Проверете, че сте влезли с админ акаунта и че правилата на Firestore са публикувани.';
		} finally {
			loading = false;
		}
	}

	// --- Filtering ---
	function matches(haystack: (string | undefined)[], term: string): boolean {
		if (!term) return true;
		const t = term.toLowerCase();
		return haystack.some((s) => (s ?? '').toLowerCase().includes(t));
	}

	const filteredRegistrations = $derived(
		registrations.filter((r) =>
			matches(
				[r.parentName, r.parentEmail, r.parentPhone, r.childName, courseLabels[r.selectedCourse ?? '']],
				search
			)
		)
	);
	const printInquiries = $derived(inquiries.filter((i) => i.inquiryType === 'print'));
	const solarInquiries = $derived(inquiries.filter((i) => i.inquiryType === 'solar'));
	const filteredInquiries = $derived(
		(tab === 'print' ? printInquiries : solarInquiries).filter((i) =>
			matches([i.name, i.email, i.phone, i.description], search)
		)
	);

	// --- CSV export ---
	function csvField(v: unknown): string {
		const s = v == null ? '' : String(v);
		return `"${s.replace(/"/g, '""')}"`;
	}

	function download(filename: string, rows: string[][]) {
		const csv = rows.map((r) => r.map(csvField).join(',')).join('\r\n');
		// BOM so Excel reads UTF-8 (Cyrillic) correctly
		const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
	}

	function exportCsv() {
		const stamp = new Date().toISOString().split('T')[0];
		if (tab === 'registrations') {
			const rows = [
				[
					'Дата',
					'Дете',
					'Възраст',
					'Дата на раждане',
					'Курс',
					'Възрастова група',
					'Опит',
					'Родител',
					'Имейл',
					'Телефон',
					'Предпочитания',
					'Съобщение'
				],
				...filteredRegistrations.map((r) => [
					fmtDate(r.createdAt),
					r.childName ?? '',
					age(r.childDob),
					r.childDob ?? '',
					label(courseLabels, r.selectedCourse),
					label(ageGroupLabels, r.ageGroup),
					label(experienceLabels, r.experience),
					r.parentName ?? '',
					r.parentEmail ?? '',
					r.parentPhone ?? '',
					r.preferredTime ?? '',
					r.message ?? ''
				])
			];
			download(`registrations-${stamp}.csv`, rows);
		} else {
			const rows = [
				['Дата', 'Име', 'Имейл', 'Телефон', 'Описание'],
				...filteredInquiries.map((i) => [
					fmtDate(i.createdAt),
					i.name ?? '',
					i.email ?? '',
					i.phone ?? '',
					i.description ?? ''
				])
			];
			download(`inquiries-${tab}-${stamp}.csv`, rows);
		}
	}

	const tabs: { id: Tab; label: string }[] = [
		{ id: 'registrations', label: 'Записвания' },
		{ id: 'print', label: '3D Печат' },
		{ id: 'solar', label: 'Соларни' }
	];
	const count = (id: Tab) =>
		id === 'registrations'
			? registrations.length
			: id === 'print'
				? printInquiries.length
				: solarInquiries.length;
</script>

<svelte:head>
	<title>Админ · USSX</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="min-h-screen bg-brand-bg px-4 py-10 text-brand-text sm:px-6">
	<div class="mx-auto max-w-6xl">
		{#if !firebaseEnabled}
			<div class="card-gradient-border mx-auto max-w-md p-8 text-center">
				<h1 class="section-title text-2xl">Firebase не е конфигуриран</h1>
				<p class="text-brand-muted">
					Добавете променливите <code>PUBLIC_FIREBASE_*</code> в средата, за да работи админ
					панелът.
				</p>
			</div>
		{:else if !authReady}
			<p class="py-20 text-center text-brand-muted">Зареждане…</p>
		{:else if !user}
			<!-- Login -->
			<form
				onsubmit={login}
				class="card-gradient-border mx-auto mt-10 max-w-sm space-y-5 p-8"
				novalidate
			>
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
						style="background: linear-gradient(135deg, rgba(59,111,232,0.2), rgba(168,230,61,0.2));"
					>
						<ShieldCheck size={28} color="#6EC6F5" />
					</div>
					<h1 class="text-xl font-bold" style="font-family: var(--font-display);">Админ вход</h1>
					<p class="mt-1 text-sm text-brand-muted">Само за екипа на USSX</p>
				</div>

				<div>
					<label for="adminEmail" class="mb-1.5 block text-sm font-semibold text-brand-muted"
						>Имейл</label
					>
					<input
						id="adminEmail"
						type="email"
						bind:value={email}
						autocomplete="username"
						class="w-full rounded-xl border border-brand-muted/20 bg-brand-surface px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
					/>
				</div>
				<div>
					<label for="adminPass" class="mb-1.5 block text-sm font-semibold text-brand-muted"
						>Парола</label
					>
					<input
						id="adminPass"
						type="password"
						bind:value={password}
						autocomplete="current-password"
						class="w-full rounded-xl border border-brand-muted/20 bg-brand-surface px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
					/>
				</div>

				{#if loginError}
					<p
						class="rounded-xl px-4 py-2.5 text-sm text-red-300"
						style="background: rgba(248,113,113,0.1); border: 1px solid rgba(248,113,113,0.3);"
						role="alert"
					>
						{loginError}
					</p>
				{/if}

				<button type="submit" class="btn-primary w-full justify-center" disabled={loggingIn}>
					{loggingIn ? 'Влизане…' : 'Вход'}
				</button>
			</form>
		{:else}
			<!-- Dashboard -->
			<header class="mb-8 flex flex-wrap items-center justify-between gap-4">
				<div>
					<h1 class="section-title mb-0 text-2xl sm:text-3xl">Админ панел</h1>
					<p class="text-sm text-brand-muted">Влезли като {user.email}</p>
				</div>
				<div class="flex items-center gap-2">
					<button
						onclick={loadData}
						class="btn-outline text-sm"
						style="padding: 0.5rem 1rem;"
						disabled={loading}
					>
						<RefreshCw size={16} class={loading ? 'animate-spin' : ''} />
						<span class="ml-1.5">Обнови</span>
					</button>
					<button onclick={logout} class="btn-outline text-sm" style="padding: 0.5rem 1rem;">
						<LogOut size={16} />
						<span class="ml-1.5">Изход</span>
					</button>
				</div>
			</header>

			<!-- Tabs -->
			<div class="mb-6 flex flex-wrap items-center gap-2">
				{#each tabs as t}
					<button
						onclick={() => (tab = t.id)}
						class="rounded-full px-4 py-2 text-sm font-semibold transition-all"
						style="background: {tab === t.id
							? 'linear-gradient(90deg,#3B6FE8,#A8E63D)'
							: 'rgba(139,154,184,0.1)'}; color: {tab === t.id
							? 'white'
							: '#8B9AB8'}; border: 1px solid {tab === t.id
							? 'transparent'
							: 'rgba(139,154,184,0.2)'};"
						aria-pressed={tab === t.id}
					>
						{t.label}
						<span
							class="ml-1.5 rounded-full px-1.5 py-0.5 text-xs"
							style="background: rgba(0,0,0,0.2);">{count(t.id)}</span
						>
					</button>
				{/each}
			</div>

			<!-- Toolbar -->
			<div class="mb-4 flex flex-wrap items-center gap-3">
				<div class="relative flex-1" style="min-width: 200px;">
					<span class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-brand-muted">
						<Search size={16} />
					</span>
					<input
						type="search"
						bind:value={search}
						placeholder="Търсене…"
						class="w-full rounded-xl border border-brand-muted/20 bg-brand-surface py-2.5 pr-4 pl-9 text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
					/>
				</div>
				<button onclick={exportCsv} class="btn-primary text-sm" style="padding: 0.6rem 1.2rem;">
					<Download size={16} />
					<span class="ml-1.5">Експорт CSV</span>
				</button>
			</div>

			{#if loadError}
				<p
					class="mb-4 rounded-xl px-4 py-3 text-sm text-red-300"
					style="background: rgba(248,113,113,0.1); border: 1px solid rgba(248,113,113,0.3);"
					role="alert"
				>
					{loadError}
				</p>
			{/if}

			<!-- Table -->
			<div class="card-gradient-border overflow-hidden">
				<div class="overflow-x-auto">
					{#if loading}
						<p class="p-10 text-center text-brand-muted">Зареждане…</p>
					{:else if tab === 'registrations'}
						{#if filteredRegistrations.length === 0}
							<p class="p-10 text-center text-brand-muted">Няма записвания.</p>
						{:else}
							<table class="w-full text-left text-sm">
								<thead
									class="text-xs uppercase tracking-wide text-brand-muted"
									style="background: rgba(255,255,255,0.03);"
								>
									<tr>
										<th class="px-4 py-3">Дата</th>
										<th class="px-4 py-3">Дете</th>
										<th class="px-4 py-3">Курс</th>
										<th class="px-4 py-3">Възр. група</th>
										<th class="px-4 py-3">Опит</th>
										<th class="px-4 py-3">Родител</th>
										<th class="px-4 py-3">Контакт</th>
										<th class="px-4 py-3">Предпочитания</th>
									</tr>
								</thead>
								<tbody>
									{#each filteredRegistrations as r (r.id)}
										<tr class="border-t" style="border-color: rgba(139,154,184,0.12);">
											<td class="px-4 py-3 whitespace-nowrap text-brand-muted">{fmtDate(r.createdAt)}</td>
											<td class="px-4 py-3">
												<div class="font-semibold text-brand-text">{r.childName ?? '—'}</div>
												<div class="text-xs text-brand-muted">
													{r.childDob ?? ''}{age(r.childDob) ? ` · ${age(r.childDob)}` : ''}
												</div>
											</td>
											<td class="px-4 py-3 whitespace-nowrap">{label(courseLabels, r.selectedCourse)}</td>
											<td class="px-4 py-3 whitespace-nowrap">{label(ageGroupLabels, r.ageGroup)}</td>
											<td class="px-4 py-3 whitespace-nowrap">{label(experienceLabels, r.experience)}</td>
											<td class="px-4 py-3">{r.parentName ?? '—'}</td>
											<td class="px-4 py-3">
												{#if r.parentEmail}
													<a href="mailto:{r.parentEmail}" class="text-brand-blue-light hover:underline"
														>{r.parentEmail}</a
													>
												{/if}
												<div class="text-xs text-brand-muted">
													{#if r.parentPhone}<a href="tel:{r.parentPhone}" class="hover:underline"
															>{r.parentPhone}</a
														>{/if}
												</div>
											</td>
											<td class="max-w-xs px-4 py-3 text-brand-muted">{r.preferredTime ?? '—'}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						{/if}
					{:else if filteredInquiries.length === 0}
						<p class="p-10 text-center text-brand-muted">Няма запитвания.</p>
					{:else}
						<table class="w-full text-left text-sm">
							<thead
								class="text-xs uppercase tracking-wide text-brand-muted"
								style="background: rgba(255,255,255,0.03);"
							>
								<tr>
									<th class="px-4 py-3">Дата</th>
									<th class="px-4 py-3">Име</th>
									<th class="px-4 py-3">Контакт</th>
									<th class="px-4 py-3">Описание</th>
								</tr>
							</thead>
							<tbody>
								{#each filteredInquiries as i (i.id)}
									<tr class="border-t" style="border-color: rgba(139,154,184,0.12);">
										<td class="px-4 py-3 whitespace-nowrap text-brand-muted">{fmtDate(i.createdAt)}</td>
										<td class="px-4 py-3 font-semibold text-brand-text">{i.name ?? '—'}</td>
										<td class="px-4 py-3">
											{#if i.email}
												<a href="mailto:{i.email}" class="text-brand-blue-light hover:underline"
													>{i.email}</a
												>
											{/if}
											<div class="text-xs text-brand-muted">
												{#if i.phone}<a href="tel:{i.phone}" class="hover:underline">{i.phone}</a>{/if}
											</div>
										</td>
										<td class="px-4 py-3 text-brand-muted">{i.description ?? '—'}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</main>
