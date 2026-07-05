<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import About from '$lib/components/About.svelte';
        import TeamSlider from '$lib/components/TeamSlider.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>За нас | USSX</title>

        <meta
                name="description"
                content="USSX е ателие за STEM обучения, 3D печат, креативно инженерство, соларни решения и зелени технологии."
        />

        <link rel="canonical" href="https://uss-x.bg/za-nas" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="За нас | USSX" />
        <meta
                property="og:description"
                content="Научете повече за USSX — STEM кръжоци, 3D печат, соларни обучения и креативно инженерство."
        />
        <meta property="og:url" content="https://uss-x.bg/za-nas" />
        <meta property="og:image" content="https://uss-x.bg/images/solar-split-banner.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="За нас | USSX" />
        <meta
                name="twitter:description"
                content="USSX — STEM обучения, 3D печат, соларни решения и зелени технологии."
        />
        <meta name="twitter:image" content="https://uss-x.bg/images/solar-split-banner.png" />
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <About />
        <TeamSlider />
</main>

<Footer />
<CookieBanner />