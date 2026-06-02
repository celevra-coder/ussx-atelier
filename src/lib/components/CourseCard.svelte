<script lang="ts">
	import { Printer, Cpu, Bike, Clock, Users } from 'lucide-svelte';
	import type { Course } from '$lib/data/courses';

	let { course }: { course: Course } = $props();

	const iconMap: Record<string, typeof Printer> = {
		printer: Printer,
		cpu: Cpu,
		bike: Bike
	};

	const Icon = $derived(iconMap[course.icon] ?? Printer);

	function scrollTo(href: string) {
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<article class="card-gradient-border group flex h-full flex-col gap-5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,111,232,0.25)]">
	<!-- Icon -->
	<div
		class="flex h-14 w-14 items-center justify-center rounded-xl"
		style="background: linear-gradient(135deg, rgba(59,111,232,0.2), rgba(168,230,61,0.2));"
	>
		<Icon size={28} color="#6EC6F5" strokeWidth={1.5} />
	</div>

	<!-- Badge -->
	<div class="flex items-center gap-2">
		<span
			class="rounded-full px-3 py-1 text-xs font-bold"
			style="background: rgba(168,230,61,0.15); color: #A8E63D; font-family: var(--font-display);"
		>
			{course.ageGroup} год.
		</span>
	</div>

	<!-- Title & description -->
	<div>
		<h3
			class="mb-2 text-lg font-bold text-brand-text"
			style="font-family: var(--font-display); line-height: 1.3;"
		>
			{course.title}
		</h3>
		<p class="text-sm leading-relaxed text-brand-muted">{course.description}</p>
		<p class="mt-1 text-sm leading-relaxed text-brand-muted">{course.fullDescription}</p>
	</div>

	<!-- Highlights -->
	<ul class="flex flex-wrap gap-2">
		{#each course.highlights as h}
			<li
				class="rounded-full px-2.5 py-1 text-xs font-medium"
				style="background: rgba(59,111,232,0.12); color: #6EC6F5;"
			>
				{h}
			</li>
		{/each}
	</ul>

	<!-- Meta -->
	<div class="flex flex-wrap gap-4 text-sm text-brand-muted">
		<span class="flex items-center gap-1.5">
			<Clock size={14} />
			{course.duration}
		</span>
		<span class="flex items-center gap-1.5">
			<Users size={14} />
			до 10 деца
		</span>
		
	</div>

	<!-- CTA -->
	<button
		onclick={() => scrollTo('#contact')}
		class="btn-primary mt-auto w-full justify-center text-sm"
	>
		Запиши се
	</button>
</article>
