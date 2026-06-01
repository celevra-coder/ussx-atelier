<script lang="ts">
	import { onMount } from 'svelte';
	import { testimonials } from '$lib/data/testimonials';
	import { inview } from '$lib/actions/inview';

	let current = $state(0);
	let paused = $state(false);
	let interval: ReturnType<typeof setInterval>;

	function start() {
		clearInterval(interval);
		interval = setInterval(() => {
			if (!paused) current = (current + 1) % testimonials.length;
		}, 5000);
	}

	onMount(() => {
		start();
		return () => clearInterval(interval);
	});

	function goTo(i: number) {
		current = i;
		start();
	}
</script>

<section class="py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6">
		<div class="reveal mb-12 text-center" use:inview>
			<h2 class="section-title">Какво казват родителите</h2>
		</div>

		<!-- Carousel -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="reveal relative"
			use:inview
			onmouseenter={() => (paused = true)}
			onmouseleave={() => (paused = false)}
			onfocusin={() => (paused = true)}
			onfocusout={() => (paused = false)}
		>
			<!-- Decorative quote -->
			<div
				class="pointer-events-none absolute -top-4 -left-2 font-black leading-none opacity-30 select-none"
				style="font-size: 8rem; color: #3B6FE8; line-height: 1; z-index: 0;"
				aria-hidden="true"
			>
				"
			</div>

			<!--
				All slides are stacked in the same grid cell, so the wrapper is always
				as tall as the LONGEST quote and never resizes when the quote changes.
				Only the active slide is visible (opacity); the rest fade behind it.
			-->
			<div class="grid">
				{#each testimonials as t, i (t.id)}
					<div
						class="card-gradient-border relative z-10 p-8 transition-opacity duration-300 sm:p-10"
						style="grid-area: 1 / 1; opacity: {i === current ? 1 : 0}; pointer-events: {i ===
						current
							? 'auto'
							: 'none'};"
						aria-hidden={i !== current}
					>
						<p class="mb-6 text-lg leading-relaxed text-brand-text italic">
							"{t.quote}"
						</p>

						<div class="flex items-center gap-4">
							<div
								class="h-12 w-12 shrink-0 overflow-hidden rounded-full"
								style="background: linear-gradient(135deg, rgba(59,111,232,0.3), rgba(168,230,61,0.2));"
							>
								<img
									src={t.avatar}
									alt={t.author}
									class="h-full w-full object-cover"
									loading="lazy"
									onerror={(e) => {
										(e.currentTarget as HTMLImageElement).style.display = 'none';
									}}
								/>
							</div>
							<div>
								<div class="font-bold text-brand-text">{t.author}</div>
								<div class="text-sm text-brand-muted">{t.childInfo}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Dots -->
			<div class="mt-6 flex justify-center gap-3">
				{#each testimonials as _, i}
					<button
						onclick={() => goTo(i)}
						class="h-2 rounded-full transition-all duration-300"
						style="width: {i === current ? '2rem' : '0.5rem'}; background: {i === current
							? '#3B6FE8'
							: 'rgba(139,154,184,0.4)'};"
						aria-label="Отзив {i + 1}"
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>
