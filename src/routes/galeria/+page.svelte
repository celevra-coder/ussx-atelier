<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import Gallery from '$lib/components/Gallery.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>Галерия | USSX</title>
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <Gallery />
</main>

<Footer />
<CookieBanner />