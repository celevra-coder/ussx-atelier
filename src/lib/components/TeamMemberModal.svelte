<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { X } from 'lucide-svelte';
	import type { TeamMember } from '$lib/data/team';

	let { member, onclose }: { member: TeamMember; onclose: () => void } = $props();

	$effect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onclose();
		}
		window.addEventListener('keydown', onKey);
		// Lock background scroll while the modal is open
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', onKey);
			document.body.style.overflow = prevOverflow;
		};
	});

	const hasLinkedin = $derived(member.linkedin && member.linkedin !== '#');
</script>

<!-- Backdrop -->
<div
	class="fixed inset-0 z-50 flex items-center justify-center p-4"
	style="background: rgba(10,14,26,0.92);"
	transition:fade={{ duration: 200 }}
	role="presentation"
>
	<button
		class="absolute inset-0 cursor-default"
		onclick={onclose}
		aria-label="Затвори модала"
		tabindex="-1"
	></button>

	<!-- Modal card -->
	<div
		class="card-gradient-border relative z-10 w-full max-w-lg overflow-hidden p-8"
		transition:fly={{ y: 30, duration: 280 }}
		role="dialog"
		aria-modal="true"
		aria-label={member.name}
	>
		<!-- Close button -->
		<button
			onclick={onclose}
			class="absolute top-4 right-4 rounded-full p-1.5 text-brand-muted transition-colors hover:text-brand-text"
			aria-label="Затвори"
		>
			<X size={20} />
		</button>

		<!-- Avatar -->
		<div class="mb-6 flex items-center gap-5">
			<div
				class="h-20 w-20 shrink-0 overflow-hidden rounded-full"
				style="background: linear-gradient(135deg, rgba(59,111,232,0.3), rgba(168,230,61,0.2)); border: 2px solid rgba(110,198,245,0.3);"
			>
				<img
					src={member.photo}
					alt={member.name}
					class="h-full w-full object-cover"
					loading="lazy"
					onerror={(e) => {
						(e.currentTarget as HTMLImageElement).style.display = 'none';
					}}
				/>
			</div>
			<div>
				<h3
					class="text-lg font-bold text-brand-text"
					style="font-family: var(--font-display);"
				>
					{member.name}
				</h3>
				<p class="text-sm text-brand-muted">{member.role}</p>
			</div>
		</div>

		<!-- Bio -->
		<p class="mb-5 text-sm leading-relaxed text-brand-muted">{member.bio}</p>

		<!-- Skills -->
		<div class="mb-6 flex flex-wrap gap-2">
			{#each member.skills as skill}
				<span
					class="rounded-full px-3 py-1 text-xs font-semibold"
					style="background: rgba(59,111,232,0.15); color: #6EC6F5;"
				>
					{skill}
				</span>
			{/each}
		</div>

		<!-- LinkedIn -->
		{#if hasLinkedin}
			<a
				href={member.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-blue-light"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
				LinkedIn профил
			</a>
		{/if}
	</div>
</div>
