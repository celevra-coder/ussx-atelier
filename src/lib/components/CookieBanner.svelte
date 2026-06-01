<script lang="ts">
	import { fly } from 'svelte/transition';

	const STORAGE_KEY = 'ussx_cookie_consent';

	let visible = $state(false);

	$effect(() => {
		if (!localStorage.getItem(STORAGE_KEY)) {
			// Small delay so it doesn't flash immediately on load
			const t = setTimeout(() => (visible = true), 1000);
			return () => clearTimeout(t);
		}
	});

	function accept() {
		localStorage.setItem(STORAGE_KEY, 'all');
		visible = false;
	}

	function acceptRequired() {
		localStorage.setItem(STORAGE_KEY, 'required');
		visible = false;
	}
</script>

{#if visible}
	<div
		class="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-2xl rounded-2xl p-5 shadow-2xl sm:p-6"
		style="background: #111827; border: 1px solid rgba(59,111,232,0.25); backdrop-filter: blur(10px);"
		transition:fly={{ y: 40, duration: 350 }}
		role="dialog"
		aria-label="Съгласие за бисквитки"
	>
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex-1">
				<p class="mb-1 font-bold text-brand-text" style="font-family: var(--font-display); font-size: 0.9rem;">
					🍪 Използваме бисквитки
				</p>
				<p class="text-xs leading-relaxed text-brand-muted">
					Използваме задължителни бисквитки за функционирането на сайта и аналитични бисквитки
					за подобряване на услугата. Вижте
					<a href="/politika-biskvitki" class="text-brand-blue-light underline">Политика за бисквитки</a>.
				</p>
			</div>
			<div class="flex flex-wrap gap-2 sm:flex-nowrap sm:shrink-0">
				<button
					onclick={acceptRequired}
					class="btn-outline text-xs"
					style="padding: 0.5rem 1.25rem;"
				>
					Само задължителни
				</button>
				<button
					onclick={accept}
					class="btn-primary text-xs"
					style="padding: 0.5rem 1.25rem;"
				>
					Приемам всички
				</button>
			</div>
		</div>
	</div>
{/if}
