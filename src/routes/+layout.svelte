<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Ателие за 3D печат и зелени технологии | USSX</title>
	<meta
		name="description"
		content="Курсове по 3D печат, Lego роботика и Infento за деца 5–12 години. Соларни решения и 3D печат услуга в България. От USSX."
	/>
	<meta property="og:title" content="USSX — Ателие за 3D печат и зелени технологии" />
	<meta
		property="og:description"
		content="Практически STEM курсове за деца, соларни инсталации и 3D печат услуга. България."
	/>
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
</svelte:head>

{@render children()}
