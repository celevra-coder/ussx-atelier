<script lang="ts">
	import { GraduationCap, Sun, Box } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';

	const spheres = [
		{
			cls: 'sphere-blue',
			Icon: GraduationCap,
			title: 'STEM кръжоци за деца',
			text: 'Практически занимания с технологии и роботика',
			href: '/stem-krajozi'
		},
		{
			cls: 'sphere-lime',
			Icon: Sun,
			title: 'Соларни решения и обучения',
			text: 'Консултации, обучения и решения за дома и бизнеса',
			href: '/solarni-reshenia'
		},
		{
			cls: 'sphere-cyan',
			Icon: Box,
			title: 'Креативно инженерство',
			text: 'Проектиране, прототипиране и 3D изработка',
			href: '/kreativno-inzhenerstvo'
		}
	];

	
	
</script>

<section class="dot-grid py-20">
	<div class="mx-auto max-w-5xl px-4">
		<div class="reveal mb-14 text-center" use:inview>
			<h2 class="section-title">Три направления, един екип</h2>
			<p class="mx-auto mt-2 max-w-xl text-brand-muted">
				Изберете накъде да продължите — курсове за деца, зелена енергия или 3D печат на заявка.
			</p>
		</div>
		<div class="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-8">
			{#each spheres as { cls, Icon, title, text, href }, i}
				<div
					class="reveal flex flex-col items-center gap-4 text-center"
					use:inview
					style="transition-delay: {i * 150}ms;"
				>
					<a
        href={href}
        class="sphere {cls} focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light"
        aria-label="Към {title}"
>
        <Icon size={48} color="white" strokeWidth={1.5} />
</a>
					<h3
						class="text-lg font-bold text-brand-text"
						style="font-family: var(--font-display);"
					>
						{title}
					</h3>
					<p class="max-w-[200px] text-sm text-brand-muted">{text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
