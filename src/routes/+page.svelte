<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import HeroVideo from '$lib/components/HeroVideo.svelte';
        import SphereNav from '$lib/components/SphereNav.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>USSX | STEM кръжоци, 3D печат, соларни решения и зелени технологии</title>

        <meta
                name="description"
                content="USSX предлага STEM кръжоци за деца, роботика, 3D печат, креативно инженерство, соларни услуги, монтаж на соларни инсталации и курсове за соларни специалисти."
        />

        <link rel="canonical" href="https://uss-x.bg/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="USSX | STEM кръжоци, 3D печат и соларни решения" />
        <meta
                property="og:description"
                content="STEM кръжоци за деца, 3D печат по заявка, креативно инженерство, соларни услуги и обучения за соларни специалисти."
        />
        <meta property="og:url" content="https://uss-x.bg/" />
        <meta property="og:image" content="https://uss-x.bg/images/solar-split-banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="USSX | STEM, 3D печат и зелени технологии" />
        <meta
                name="twitter:description"
                content="STEM кръжоци, роботика, 3D печат, соларни решения и курсове за соларни специалисти."
        />
        <meta name="twitter:image" content="https://uss-x.bg/images/solar-split-banner.png" />
</svelte:head>

<Navbar />

<main>
        <HeroVideo />
        <SphereNav />

        <!-- Home SEO services marker -->
        <section class="bg-brand-bg px-4 py-24">
                <div class="mx-auto max-w-6xl">
                        <div class="mx-auto max-w-3xl text-center">
                                <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
                                        USSX · технологии, обучения и инженерни решения
                                </p>

                                <h1 class="section-title">
                                        STEM кръжоци, 3D печат, соларни решения и зелени технологии
                                </h1>

                                <p class="mx-auto mt-6 text-lg leading-8 text-brand-muted">
                                        USSX обединява практически обучения за деца, 3D печат по заявка, креативно инженерство, соларни услуги, монтаж на фотоволтаични системи и курсове за соларни специалисти.
                                </p>
                        </div>

                        <div class="mt-12 grid gap-6 md:grid-cols-3">
                                <a
                                        href="/stem-krajozi"
                                        class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-brand-blue/40"
                                >
                                        <h2 class="text-2xl font-bold text-brand-text">
                                                STEM кръжоци за деца
                                        </h2>
                                        <p class="mt-4 leading-7">
                                                Практически занимания по роботика, 3D печат, програмиране и Infento инженерство. Подходящи за деца с интерес към технологии, моделиране и създаване на реални проекти.
                                        </p>
                                </a>

                                <a
                                        href="/solarni-reshenia"
                                        class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-brand-green/40"
                                >
                                        <h2 class="text-2xl font-bold text-brand-text">
                                                Соларни услуги и обучения
                                        </h2>
                                        <p class="mt-4 leading-7">
                                                Курсове за соларни специалисти, монтаж на соларни инсталации, фотоволтаични системи за домове и бизнес, консултации, оглед и проектиране.
                                        </p>
                                </a>

                                <a
                                        href="/kreativno-inzhenerstvo"
                                        class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-brand-blue-light/40"
                                >
                                        <h2 class="text-2xl font-bold text-brand-text">
                                                3D печат и креативно инженерство
                                        </h2>
                                        <p class="mt-4 leading-7">
                                                3D печат по заявка, 3D моделиране, прототипиране, инженерни проекти, водородни системи и подкрепа за младежки стартъпи.
                                        </p>
                                </a>
                        </div>
                </div>
        </section>
</main>

<Footer />
<CookieBanner />
