<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import Courses from '$lib/components/Courses.svelte';
import ContactForm from '$lib/components/ContactForm.svelte';
import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>STEM ÐºÑ€ÑŠÐ¶Ð¾Ñ†Ð¸ Ð·Ð° Ð´ÐµÑ†Ð° | USSX</title>
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <section class="dot-grid px-4 pb-16 pt-10">
        <div class="mx-auto max-w-6xl">
                <div class="mx-auto max-w-4xl text-center">
                        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
                                USSX Â· Ð¾Ð±ÑƒÑ‡ÐµÐ½Ð¸Ñ Ð·Ð° Ð´ÐµÑ†Ð°
                        </p>

                        <h1 class="section-title">
                                STEM ÐºÑ€ÑŠÐ¶Ð¾Ñ†Ð¸ Ð·Ð° Ð´ÐµÑ†Ð°
                        </h1>

                        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
                                ÐŸÑ€Ð°ÐºÑ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð·Ð°Ð½Ð¸Ð¼Ð°Ð½Ð¸Ñ, Ð² ÐºÐ¾Ð¸Ñ‚Ð¾ Ð´ÐµÑ†Ð°Ñ‚Ð° Ð½Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ ÑÐ»ÑƒÑˆÐ°Ñ‚, Ð° ÑÑŠÐ·Ð´Ð°Ð²Ð°Ñ‚. Ð’ Ð½Ð°ÑˆÐ¸Ñ‚Ðµ STEM
                                ÐºÑ€ÑŠÐ¶Ð¾Ñ†Ð¸ Ñ‚Ðµ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¸Ñ€Ð°Ñ‚, ÑÐ³Ð»Ð¾Ð±ÑÐ²Ð°Ñ‚, Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¸Ñ€Ð°Ñ‚, Ñ‚ÐµÑÑ‚Ð²Ð°Ñ‚ Ð¸ Ð¿Ð¾Ð´Ð¾Ð±Ñ€ÑÐ²Ð°Ñ‚ ÑÐ²Ð¾Ð¸ Ñ€ÐµÐ°Ð»Ð½Ð¸
                                Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¸.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-brand-muted">
                                Ð Ð°Ð±Ð¾Ñ‚Ð¸Ð¼ Ñ Ð»ÑŽÐ±ÐµÐ·Ð½Ð¾Ñ‚Ð¾ ÑÑŠÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ Ð¸ Ð¿Ð¾Ð´ÐºÑ€ÐµÐ¿Ð° Ð½Ð°
                                <span class="font-semibold text-brand-text">
                                        ÐŸÑ€Ð¾Ñ„ÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð½Ð° Ð³Ð¸Ð¼Ð½Ð°Ð·Ð¸Ñ Ð¿Ð¾ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸ÐºÐ° Ð¸ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€Ð½Ð¸ Ð½Ð°ÑƒÐºÐ¸ â€žÐÐºÐ°Ð´. Ð‘Ð»Ð°Ð³Ð¾Ð²ÐµÑÑ‚ Ð¡ÐµÐ½Ð´Ð¾Ð²â€œ
                                </span>
                                â€” Ð³Ñ€. ÐŸÐ»Ð¾Ð²Ð´Ð¸Ð².
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-brand-muted">
                                ÐžÐ±ÑƒÑ‡ÐµÐ½Ð¸ÑÑ‚Ð° ÑÑŠÑ‡ÐµÑ‚Ð°Ð²Ð°Ñ‚ 3D Ð¿ÐµÑ‡Ð°Ñ‚, Ñ€Ð¾Ð±Ð¾Ñ‚Ð¸ÐºÐ° Ð¸ Infento â€” Ð¼Ð¾Ð´ÑƒÐ»Ð½Ð° Ð¸Ð½Ð¶ÐµÐ½ÐµÑ€Ð½Ð° ÑÐ¸ÑÑ‚ÐµÐ¼Ð°,
                                Ñ‡Ñ€ÐµÐ· ÐºÐ¾ÑÑ‚Ð¾ Ð´ÐµÑ†Ð°Ñ‚Ð° Ð¸Ð·Ð³Ñ€Ð°Ð¶Ð´Ð°Ñ‚ Ñ€ÐµÐ°Ð»Ð½Ð¸ ÐºÐ¾Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸ Ð¸ Ð¿Ñ€ÐµÐ²Ð¾Ð·Ð½Ð¸ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð°. Ð¢Ð°ÐºÐ° Ñ‚Ðµ Ñ€Ð°Ð·Ð²Ð¸Ð²Ð°Ñ‚
                                Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²ÐµÐ½Ð¾ Ð¼Ð¸ÑÐ»ÐµÐ½Ðµ, Ð»Ð¾Ð³Ð¸ÐºÐ°, ÐºÑ€ÐµÐ°Ñ‚Ð¸Ð²Ð½Ð¾ÑÑ‚, Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ° ÐºÑƒÐ»Ñ‚ÑƒÑ€Ð° Ð¸ ÑƒÐ²ÐµÑ€ÐµÐ½Ð¾ÑÑ‚ Ð´Ð°
                                Ð¿Ñ€ÐµÐ²Ñ€ÑŠÑ‰Ð°Ñ‚ Ð¸Ð´ÐµÐ¸Ñ‚Ðµ ÑÐ¸ Ð² Ñ€Ð°Ð±Ð¾Ñ‚ÐµÑ‰Ð¸ Ñ€ÐµÑˆÐµÐ½Ð¸Ñ.
                        </p>
                </div>

                <div class="mt-14 hidden gap-6 md:grid md:grid-cols-3">
        <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur">
                <img
                        src="/images/stem/3d-pechat-modelirane.png"
                        alt="3D Ð¿ÐµÑ‡Ð°Ñ‚ Ð¸ Ð¼Ð¾Ð´ÐµÐ»Ð¸Ñ€Ð°Ð½Ðµ"
                        class="h-full w-full object-cover"
                />
        </div>

        <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur">
                <img
                        src="/images/stem/robotika-programirane.png"
                        alt="Ð Ð¾Ð±Ð¾Ñ‚Ð¸ÐºÐ° Ð¸ Ð¿Ñ€Ð¾Ð³Ñ€Ð°Ð¼Ð¸Ñ€Ð°Ð½Ðµ"
                        class="h-full w-full object-cover"
                />
        </div>

        <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur">
                <img
                        src="/images/stem/infento-inzhenerstvo.png"
                        alt="Infento Ð¸Ð½Ð¶ÐµÐ½ÐµÑ€ÑÑ‚Ð²Ð¾"
                        class="h-full w-full object-cover"
                />
        </div>
</div>
        </div>
</section>

        <Courses showMobileImages={true} />
        <ContactForm />
</main>

<Footer />
<CookieBanner />
