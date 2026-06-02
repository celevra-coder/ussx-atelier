<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import SolarSection from '$lib/components/SolarSection.svelte';
import ContactForm from '$lib/components/ContactForm.svelte';
import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>Соларни решения и обучения | USSX</title>
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        

        <SolarSection />
        <ContactForm defaultType="solar" />
</main>

<Footer />
<CookieBanner />