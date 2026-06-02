<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import HeroVideo from '$lib/components/HeroVideo.svelte';
        import SphereNav from '$lib/components/SphereNav.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
	<title>Ателие за 3D печат и зелени технологии | USSX</title>
</svelte:head>

<Navbar />
<main>
        <HeroVideo />
        <SphereNav />
</main>
<Footer />
<CookieBanner />
