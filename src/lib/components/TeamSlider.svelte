<script lang="ts">
	import { team } from '$lib/data/team';
	import type { TeamMember } from '$lib/data/team';
	import TeamMemberModal from './TeamMemberModal.svelte';
	import { inview } from '$lib/actions/inview';

	let selectedMember = $state<TeamMember | null>(null);

	// Drag/swipe slider
	let sliderEl: HTMLElement;
	let isDragging = $state(false);
	let startX = 0;
	let scrollLeft = 0;

	function onMouseDown(e: MouseEvent) {
		isDragging = true;
		startX = e.pageX - sliderEl.offsetLeft;
		scrollLeft = sliderEl.scrollLeft;
	}
	function onMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - sliderEl.offsetLeft;
		sliderEl.scrollLeft = scrollLeft - (x - startX);
	}
	function stopDrag() {
		isDragging = false;
	}

	// Touch support
	let touchStartX = 0;
	function onTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		scrollLeft = sliderEl.scrollLeft;
	}
	function onTouchMove(e: TouchEvent) {
		const dx = touchStartX - e.touches[0].clientX;
		sliderEl.scrollLeft = scrollLeft + dx;
	}
</script>

<section id="ekip" class="py-24" style="background-color: #111827;">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="reveal mb-12 text-center" use:inview>
			<h2 class="section-title">Нашият екип</h2>
			<p class="mt-4 text-brand-muted">
				Хората зад USSX — инженери, педагози и вдъхновители.
			</p>
		</div>

		<!-- Slider -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={sliderEl}
			class="flex gap-6 overflow-x-auto pb-4 select-none"
			style="cursor: {isDragging ? 'grabbing' : 'grab'}; scrollbar-width: thin; scrollbar-color: rgba(59,111,232,0.3) transparent;"
			role="list"
			aria-label="Слайдер с членове на екипа"
			onmousedown={onMouseDown}
			onmousemove={onMouseMove}
			onmouseup={stopDrag}
			onmouseleave={stopDrag}
			ontouchstart={onTouchStart}
			ontouchmove={onTouchMove}
		>
			{#each team as member}
				<div
					class="group relative shrink-0 w-56 cursor-pointer rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
					style="background: rgba(10,14,26,0.8); border: 1px solid rgba(110,198,245,0.15);"
					role="listitem"
				>
					<!-- Avatar -->
					<div
						class="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full"
						style="background: linear-gradient(135deg, rgba(59,111,232,0.3), rgba(168,230,61,0.2)); border: 2px solid rgba(110,198,245,0.3);"
					>
						<img
							src={member.photo}
							alt={member.name}
							loading="lazy"
							class="h-full w-full object-cover"
							draggable="false"
							onerror={(e) => {
								(e.currentTarget as HTMLImageElement).style.display = 'none';
							}}
						/>
					</div>

					<h3
						class="mb-1 text-sm font-bold text-brand-text"
						style="font-family: var(--font-display); line-height: 1.3;"
					>
						{member.name}
					</h3>
					<p class="text-xs text-brand-muted">{member.role}</p>

					<!-- Hover overlay -->
					<button
						onclick={() => (selectedMember = member)}
						class="absolute inset-0 flex items-center justify-center rounded-2xl bg-brand-bg/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						aria-label="Виж профил на {member.name}"
					>
						<span
							class="rounded-full px-4 py-2 text-xs font-bold text-white"
							style="background: linear-gradient(90deg, #3B6FE8, #A8E63D);"
						>
							Виж профил
						</span>
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if selectedMember}
	<TeamMemberModal member={selectedMember} onclose={() => (selectedMember = null)} />
{/if}
