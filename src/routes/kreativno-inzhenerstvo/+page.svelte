<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import PrintingService from '$lib/components/PrintingService.svelte';
        import ContactForm from '$lib/components/ContactForm.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>Креативно инженерство, 3D моделиране и прототипиране | USSX</title>

        <meta
                name="description"
                content="Креативно инженерство, 3D моделиране, 3D печат, прототипиране, водородни системи и подкрепа за ученически и младежки стартъпи от USSX."
        />

        <link rel="canonical" href="https://uss-x.bg/kreativno-inzhenerstvo" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Креативно инженерство и прототипиране | USSX" />
        <meta
                property="og:description"
                content="От идея до реален прототип: 3D моделиране, дизайн, 3D печат, водородни системи и инженерни проекти."
        />
        <meta property="og:url" content="https://uss-x.bg/kreativno-inzhenerstvo" />
        <meta property="og:image" content="https://uss-x.bg/images/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Креативно инженерство | USSX" />
        <meta
                name="twitter:description"
                content="3D моделиране, прототипиране, 3D печат, водородни системи и инженерни решения."
        />
        <meta name="twitter:image" content="https://uss-x.bg/images/logo.png" />
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <section class="dot-grid px-4 pb-16 pt-10 text-center">
                <div class="mx-auto max-w-4xl">
                        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
                                USSX · идеи, прототипи и изработка
                        </p>

                        <h1 class="section-title">
                                Креативно инженерство
                        </h1>

                        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
                                Креативното инженерство е мястото, където идеите се превръщат в реални обекти.
                                В USSX комбинираме 3D моделиране, 3D печат, прототипиране, техническо мислене
                                и практическа изработка, за да помагаме на хора, екипи и организации да създават
                                работещи решения.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-brand-muted">
                                Работим с ученици, млади създатели, преподаватели, предприемачи, бизнеси и хора
                                с конкретна идея, които имат нужда от съдействие при проектиране, изработка,
                                тестване или представяне на прототип.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-brand-muted">
                                Подкрепяме ученически и младежки стартъпи — от първоначална идея и концепция
                                до първи работещ модел, демонстрационен прототип или представяне пред публика,
                                партньори и потенциални клиенти.
                        </p>
                </div>
        </section>

        <PrintingService />
        <!-- Creative SEO marker -->
        <section class="px-4 pb-24">
                <div class="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-brand-muted shadow-xl backdrop-blur md:p-10">
                        <h2 class="text-2xl font-bold text-brand-text md:text-3xl">
                                Креативно инженерство, 3D печат и прототипиране
                        </h2>

                        <p class="mt-5 leading-8">
                                USSX предлага услуги за 3D моделиране, 3D печат, прототипиране и креативно инженерство. Помагаме при изработка на идеи, макети, модели, тестови детайли и работещи прототипи.
                        </p>

                        <p class="mt-4 leading-8">
                                Услугите са подходящи за ученици, млади създатели, стартъп екипи, преподаватели, бизнеси и хора с конкретна идея, която трябва да се превърне в реален обект или демонстрационен модел.
                        </p>

                        <p class="mt-4 leading-8">
                                В секцията за креативно инженерство включваме и проекти, свързани с водородни системи, зелени технологии, инженерно мислене и ученически стартъпи.
                        </p>
                </div>
        </section>

        <ContactForm defaultType="print" />
</main>

<Footer />
<CookieBanner />
