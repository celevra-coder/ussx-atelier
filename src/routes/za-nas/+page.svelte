<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import About from '$lib/components/About.svelte';
        import TeamSlider from '$lib/components/TeamSlider.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>За нас | USSX</title>
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <About />
        <TeamSlider />
</main>

<Footer />
<CookieBanner />