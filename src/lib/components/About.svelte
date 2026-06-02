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
        Всичко започва от една идея — от една мечта и от любовта ни към знанието,
        технологиите и децата. USSX не е просто ателие, а пространство, в което
        любопитството се превръща в умение, а първите малки опити — в истинска
        увереност.
</p>

<p>
        Вярваме, че всяко дете носи в себе си талант, въображение и желание да
        открива света по свой начин. Нашата мисия е да му подадем ръка, да му дадем
        достъп до съвременни технологии и да го насърчим да създава, да пита, да
        пробва, да греши и отново да опитва.
</p>

<p>
        Горди сме с всеки наш ученик. Вървим с децата ръка за ръка по пътя към
        знанието, инженерното мислене и иновативните технологии, защото именно те
        са бъдещето. В нашите занимания децата не просто учат — те създават,
        програмират, моделират, принтират, изобретяват и виждат как идеите им
        оживяват в реални проекти.
</p>

<p>
        Работим с отдаденост и в партньорство с хора и институции, които вярват, че
        практическото образование може да промени посоката на едно дете. Чрез STEM
        кръжоците, креативното инженерство, 3D печата и зелените технологии
        изграждаме среда, в която знанието се усеща, докосва и преживява.
</p>

<p>
        Успоредно с образователната ни дейност развиваме и професионални услуги в
        областта на креативното инженерство, 3D прототипирането и соларните решения.
        Вярваме, че технологиите имат смисъл, когато служат на хората — на децата,
        на семействата, на бизнеса и на общността.
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
