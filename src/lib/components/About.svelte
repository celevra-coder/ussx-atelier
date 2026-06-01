<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const stats = [
		{ value: 200, label: 'деца обучени', suffix: '+' },
		{ value: 350, label: 'проекта', suffix: '+' },
		{ value: 3, label: 'години опит', suffix: '+' },
		{ value: 40, label: 'соларни инсталации', suffix: '+' }
	];

	let counts = $state(stats.map(() => 0));
	let statsEl: HTMLElement;

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					observer.disconnect();
					stats.forEach((stat, i) => {
						const steps = 60;
						const increment = stat.value / steps;
						let step = 0;
						const interval = setInterval(() => {
							step++;
							counts[i] = Math.min(Math.round(increment * step), stat.value);
							if (step >= steps) clearInterval(interval);
						}, 1500 / steps);
					});
				}
			},
			{ threshold: 0.4 }
		);
		if (statsEl) observer.observe(statsEl);
		return () => observer.disconnect();
	});
</script>

<section id="za-nas" class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<!-- Text -->
			<div class="reveal" use:inview>
				<h2 class="section-title">За нас</h2>
				<div class="mt-6 space-y-4 leading-relaxed text-brand-muted">
					<p>
						USSX е екип от инженери, педагози и ентусиасти, обединени от обща мисия: да направим
						технологиите достъпни и вдъхновяващи за всяко дете в България. Вярваме, че
						любопитството е двигателят на иновациите.
					</p>
					<p>
						Ателието за 3D печат и зелени технологии е нашият отговор на нуждата от практическо
						STEM образование. Тук децата не само учат — те строят, програмират, принтират и
						изобретяват. Всяко занятие завършва с реален резултат, който детето може да вземе
						у дома.
					</p>
					<p>
						Успоредно с образователната ни дейност, предоставяме професионални услуги по 3D
						печат и соларни решения за домове и бизнеси из цяла България. Приходите от тези
						услуги директно финансират субсидирани курсове за деца от социално уязвими семейства.
					</p>
				</div>
			</div>

			<!-- Image placeholder -->
			<div
				class="reveal overflow-hidden rounded-2xl"
				use:inview
				style="background: linear-gradient(135deg, rgba(59,111,232,0.15), rgba(168,230,61,0.1)); min-height: 340px; display:flex; align-items:center; justify-content:center; border: 1px solid rgba(110,198,245,0.15);"
			>
				<p class="text-sm text-brand-muted">[ Снимка на екипа ]</p>
			</div>
		</div>

		<!-- Animated stats -->
		<div
			bind:this={statsEl}
			class="reveal mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
			use:inview
		>
			{#each stats as stat, i}
				<div class="card-gradient-border py-8 text-center">
					<div
						class="gradient-text mb-1 font-black"
						style="font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3rem);"
					>
						{counts[i]}{stat.suffix}
					</div>
					<div class="text-sm text-brand-muted">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
