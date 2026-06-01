<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroVideo from '$lib/components/HeroVideo.svelte';
	import SphereNav from '$lib/components/SphereNav.svelte';
	import Courses from '$lib/components/Courses.svelte';
	import SolarSection from '$lib/components/SolarSection.svelte';
	import PrintingService from '$lib/components/PrintingService.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import About from '$lib/components/About.svelte';
	import TeamSlider from '$lib/components/TeamSlider.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
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
	<Courses />
	<SolarSection />
	<PrintingService />
	<Gallery />
	<About />
	<TeamSlider />
	<Testimonials />
	<FAQ />
	<ContactForm />
</main>
<Footer />
<CookieBanner />
