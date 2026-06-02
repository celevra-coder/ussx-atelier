<script lang="ts">
	import { X } from 'lucide-svelte';
	import { fly, fade } from 'svelte/transition';
	import { inview } from '$lib/actions/inview';

	const images = [
        { src: '/images/gallery/gallery-1.png', alt: 'STEM работилница с 3D печат' },
        { src: '/images/gallery/gallery-2.png', alt: 'Практическо соларно обучение' },
        { src: '/images/gallery/gallery-3.png', alt: 'Групово обучение със соларни панели' },
        { src: '/images/gallery/gallery-4.png', alt: 'RC проект и инженерно мислене' },
        { src: '/images/gallery/gallery-5.png', alt: 'Деца в работилница с RC проект' },
        { src: '/images/gallery/gallery-6.png', alt: 'Infento инженерна конструкция' },
        { src: '/images/gallery/gallery-7.png', alt: 'Ученически екип на състезание' },
        { src: '/images/gallery/gallery-8.png', alt: 'ПГИКН „Акад. Благовест Сендов“' },
        { src: '/images/gallery/gallery-9.png', alt: 'USS-X обучение и проекти' }
];

	let lightboxIndex = $state<number | null>(null);

	function openLightbox(i: number) {
		lightboxIndex = i;
	}

	function closeLightbox() {
		lightboxIndex = null;
	}

	function prev() {
		if (lightboxIndex !== null) {
			lightboxIndex = (lightboxIndex - 1 + images.length) % images.length;
		}
	}

	function next() {
		if (lightboxIndex !== null) {
			lightboxIndex = (lightboxIndex + 1) % images.length;
		}
	}

	$effect(() => {
		function onKey(e: KeyboardEvent) {
			if (lightboxIndex === null) return;
			if (e.key === 'Escape') closeLightbox();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		}
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});

	// Lock background scroll while the lightbox is open
	$effect(() => {
		if (lightboxIndex === null) return;
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prevOverflow;
		};
	});
</script>

<section id="galeria" class="py-24" style="background-color: #111827;">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="reveal mb-12 text-center" use:inview>
			<h2 class="section-title">СВЕТЪТ НА USS-X</h2>
			<p class="mt-4 text-brand-muted">
        Моменти от нашите кръжоци, обучения, проекти, състезания и технологии в действие.
</p>
		</div>

		<!-- Masonry-style grid -->
		<div class="columns-2 gap-4 sm:columns-3 lg:columns-4" style="column-gap: 1rem;">
			{#each images as img, i}
				<div
					class="reveal mb-4 break-inside-avoid overflow-hidden rounded-xl"
					use:inview
					style="transition-delay: {i * 60}ms;"
				>
					<button
						onclick={() => openLightbox(i)}
						class="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light"
						aria-label="Увеличи: {img.alt}"
					>
						<!-- Placeholder for missing images -->
						<div
							class="flex aspect-square w-full items-center justify-center rounded-xl text-xs text-brand-muted transition-transform duration-300 group-hover:scale-105"
							style="background: linear-gradient(135deg, rgba(59,111,232,0.15), rgba(168,230,61,0.1)); border: 1px solid rgba(110,198,245,0.1);"
						>
							<img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover"
        onerror={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
/>
						</div>
						<!-- Hover overlay -->
						<div
							class="absolute inset-0 flex items-center justify-center rounded-xl bg-brand-bg/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<circle cx="11" cy="11" r="8" />
								<path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
							</svg>
						</div>
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Lightbox -->
{#if lightboxIndex !== null}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		style="background: rgba(10,14,26,0.95);"
		transition:fade={{ duration: 200 }}
		role="dialog"
		aria-modal="true"
		aria-label="Галерия"
	>
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 rounded-full p-2 text-brand-muted transition-colors hover:text-brand-text"
			aria-label="Затвори"
		>
			<X size={28} />
		</button>

		<button
			onclick={prev}
			class="absolute left-4 rounded-full p-3 text-brand-muted transition-colors hover:text-brand-text"
			aria-label="Предишна"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
		</button>

		<div class="max-h-[85vh] max-w-4xl" transition:fly={{ y: 20, duration: 250 }}>
			<div
				class="flex aspect-video w-full max-w-3xl items-center justify-center rounded-xl text-brand-muted"
				style="background: linear-gradient(135deg, rgba(59,111,232,0.2), rgba(168,230,61,0.1));"
			>
				<img
					src={images[lightboxIndex].src}
					alt={images[lightboxIndex].alt}
					class="max-h-[80vh] rounded-xl object-contain"
					onerror={(e) => {
						(e.currentTarget as HTMLImageElement).style.display = 'none';
					}}
				/>
				
			</div>
		</div>

		<button
			onclick={next}
			class="absolute right-4 rounded-full p-3 text-brand-muted transition-colors hover:text-brand-text"
			aria-label="Следваща"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
		</button>
	</div>
{/if}
