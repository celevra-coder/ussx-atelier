<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import Gallery from '$lib/components/Gallery.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>Галерия | STEM, 3D печат и зелени технологии | USSX</title>

        <meta
                name="description"
                content="Галерия на USSX с кадри от STEM кръжоци, 3D печат, роботика, Infento, соларни обучения и креативно инженерство."
        />

        <link rel="canonical" href="https://uss-x.bg/galeria" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Галерия | USSX" />
        <meta
                property="og:description"
                content="Вижте кадри от STEM кръжоци, 3D печат, роботика, Infento и зелени технологии."
        />
        <meta property="og:url" content="https://uss-x.bg/galeria" />
        <meta property="og:image" content="https://uss-x.bg/images/stem/infento-inzhenerstvo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Галерия | USSX" />
        <meta
                name="twitter:description"
                content="Кадри от STEM занимания, 3D печат, роботика, Infento и зелени технологии."
        />
        <meta name="twitter:image" content="https://uss-x.bg/images/stem/infento-inzhenerstvo.png" />
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <Gallery />
</main>

<Footer />
<CookieBanner />