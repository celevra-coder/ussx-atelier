<script lang="ts">
        let offsetY = $state(0);
        let homeVideo: HTMLVideoElement | null = $state(null);
        let isHomeVideoPlaying = $state(false);

	$effect(() => {
		function onScroll() {
			offsetY = window.scrollY * 0.3;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	        function scrollTo(href: string) {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }

        function toggleHomeVideo() {
                if (!homeVideo) return;

                if (homeVideo.paused) {
                        homeVideo.play();
                        isHomeVideoPlaying = true;
                } else {
                        homeVideo.pause();
                        isHomeVideoPlaying = false;
                }
        }
</script>

<section id="hero" class="relative min-h-screen overflow-hidden bg-brand-bg">
	<!-- Branded fallback shown until the video (when present) loads -->
	<img
		src="/images/hero-poster.svg"
		alt=""
		class="absolute inset-0 h-full w-full object-cover"
		aria-hidden="true"
	/>

	<!-- Background video — drop /videos/hero.mp4 in to enable -->
	<video
		autoplay
		muted
		loop
		playsinline
		poster="/images/hero-poster.svg"
		class="absolute inset-0 h-full w-full object-cover"
		aria-hidden="true"
	>
		<source src="/videos/hero.mp4" type="video/mp4" />
	</video>

	<!-- Dark gradient overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, #0A0E1A 0%, rgba(10,14,26,0.5) 50%, rgba(10,14,26,0.2) 100%);"
	></div>

	<!-- Dot grid overlay -->
	<div class="dot-grid absolute inset-0 opacity-20"></div>

	<!-- Content with parallax -->
	<div
        class="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-20 text-center"
        style="transform: translateY({offsetY}px);"
>
		<p
			class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted"
			style="font-family: var(--font-display);"
		>
			USSX · Ателие за 3D печат и зелени технологии
		</p>

		<h1
        class="gradient-text font-black"
        style="font-family: var(--font-display); font-size: clamp(2.2rem, 6vw, 5rem); line-height: 1.1; margin-bottom: 1.5rem;"
>
        Създавай.<br />Програмирай.<br />Изобретявай.
</h1>

<div class="group relative mb-8 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
        <video
                bind:this={homeVideo}
                playsinline
                preload="metadata"
                class="aspect-video w-full object-cover"
                onpause={() => (isHomeVideoPlaying = false)}
                onplay={() => (isHomeVideoPlaying = true)}
                onclick={toggleHomeVideo}
        >
                <source src="/videos/home-video.mp4" type="video/mp4" />
        </video>

        <button
                type="button"
                onclick={toggleHomeVideo}
                class={[
                        'absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-[0_0_35px_rgba(255,255,255,0.25)] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-light',
                       isHomeVideoPlaying ? 'pointer-events-none opacity-0 md:pointer-events-auto md:group-hover:opacity-100' : 'opacity-100'
                ]}
                aria-label={isHomeVideoPlaying ? 'Пауза' : 'Пусни видео'}
        >
                {#if isHomeVideoPlaying}
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                        >
                                <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                        </svg>
                {:else}
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="ml-1"
                                aria-hidden="true"
                        >
                                <path d="M8 5v14l11-7z" />
                        </svg>
                {/if}
        </button>
</div>

		<p
			class="mx-auto mb-8 max-w-xl text-lg text-brand-muted"
			style="font-family: var(--font-body);"
		>
			Реални технологии за деца, които не спират да питат <em>защо</em>.
		</p>

		<div class="flex flex-wrap items-center justify-center gap-4">
			<button onclick={() => scrollTo('#kursovedecata')} class="btn-primary">
				Разгледай курсовете
			</button>
			<button onclick={() => scrollTo('#contact')} class="btn-outline"> Свържи се с нас </button>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 5v14M5 12l7 7 7-7"
				stroke="#6EC6F5"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
</section>
