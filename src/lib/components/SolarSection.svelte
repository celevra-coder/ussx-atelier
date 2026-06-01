<script lang="ts">
	import { Search, Settings, Activity } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';

	const features = [
		{
			Icon: Search,
			title: 'Консултация и оглед',
			text: 'Безплатна консултация на място — анализираме вашия имот, потребление и цели, за да предложим оптималното соларно решение.'
		},
		{
			Icon: Settings,
			title: 'Проектиране и инсталация',
			text: 'Цялостен проект и монтаж от сертифицирани инженери. Свързване към мрежата, всички разрешителни — ние поемаме всичко.'
		},
		{
			Icon: Activity,
			title: 'Поддръжка и мониторинг',
			text: 'Дистанционен мониторинг на производството в реално време и редовна поддръжка за максимална ефективност на системата.'
		}
	];

	function scrollTo(href: string) {
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section
	id="solarni"
	class="py-24"
	style="background: linear-gradient(180deg, #0A0E1A 0%, #0D1A0D 50%, #0A0E1A 100%);"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="reveal mb-16 text-center" use:inview>
			<h2 class="section-title">Зелена енергия за дома и бизнеса</h2>
			<p class="mx-auto mt-4 max-w-2xl text-brand-muted">
				Проектираме и инсталираме соларни фотоволтаични системи, съобразени с вашите нужди и
				бюджет. Намалете сметките си и инвестирайте в чиста енергия.
			</p>
		</div>

		<!-- Visual placeholder -->
		<div
			class="reveal mb-12 overflow-hidden rounded-2xl"
			use:inview
			style="background: linear-gradient(135deg, #0D1A0D, #1A5C2A, #0A0E1A); min-height: 220px; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(168,230,61,0.2);"
		>
			<div class="text-center p-8">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="80"
					height="80"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#A8E63D"
					stroke-width="1"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mx-auto mb-4 opacity-60"
					aria-hidden="true"
				>
					<circle cx="12" cy="12" r="4" />
					<path
						d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
					/>
				</svg>
				<p class="text-brand-muted text-sm">[ Снимка на соларна инсталация ]</p>
			</div>
		</div>

		<!-- Feature cards -->
		<div class="grid gap-6 md:grid-cols-3">
			{#each features as { Icon, title, text }, i}
				<div
					class="reveal card-gradient-border group flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,230,61,0.2)]"
					use:inview
					style="transition-delay: {i * 100}ms; --tw-gradient-from: #1A5C2A; --tw-gradient-to: #A8E63D;"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl"
						style="background: rgba(168,230,61,0.1);"
					>
						<Icon size={24} color="#A8E63D" strokeWidth={1.5} />
					</div>
					<h3 class="font-bold text-brand-text" style="font-family: var(--font-display);">
						{title}
					</h3>
					<p class="text-sm leading-relaxed text-brand-muted">{text}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<button onclick={() => scrollTo('#contact')} class="btn-primary">
				Заяви консултация
			</button>
		</div>
	</div>
</section>
