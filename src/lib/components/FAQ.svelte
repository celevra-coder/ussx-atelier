<script lang="ts">
	import { faq } from '$lib/data/faq';
	import { slide } from 'svelte/transition';
	import { inview } from '$lib/actions/inview';

	let openId = $state<string | null>(null);

	function toggle(id: string) {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="py-24" style="background-color: #111827;">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<div class="reveal mb-12 text-center" use:inview>
			<h2 class="section-title">Често задавани въпроси</h2>
		</div>

		<div class="space-y-3">
			{#each faq as item, i}
				<div
					class="reveal overflow-hidden rounded-xl"
					use:inview
					style="transition-delay: {i * 60}ms; border: 1px solid {openId === item.id ? 'rgba(59,111,232,0.4)' : 'rgba(110,198,245,0.1)'}; background: rgba(10,14,26,0.5); transition: border-color 0.3s;"
				>
					<button
						onclick={() => toggle(item.id)}
						class="flex w-full items-center justify-between px-5 py-4 text-left"
						aria-expanded={openId === item.id}
					>
						<span class="pr-4 font-semibold text-brand-text">{item.question}</span>
						<span
							class="shrink-0 transition-transform duration-300"
							style="transform: rotate({openId === item.id ? '45deg' : '0deg'});"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#6EC6F5"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M12 5v14M5 12h14" />
							</svg>
						</span>
					</button>

					{#if openId === item.id}
						<div transition:slide={{ duration: 200 }}>
							<p class="px-5 pb-5 text-sm leading-relaxed text-brand-muted">
								{item.answer}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
