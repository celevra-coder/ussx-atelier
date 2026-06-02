<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import FAQ from '$lib/components/FAQ.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>FAQ | USSX</title>
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <FAQ />
</main>

<Footer />
<CookieBanner />