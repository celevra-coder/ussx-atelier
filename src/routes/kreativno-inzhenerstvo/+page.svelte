<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import PrintingService from '$lib/components/PrintingService.svelte';
import ContactForm from '$lib/components/ContactForm.svelte';
import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>Креативно инженерство | USSX</title>
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
                        и практическа изработка, за да помогнем на хора, екипи и организации да създават
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
        <ContactForm defaultType="print" />
</main>

<Footer />
<CookieBanner />