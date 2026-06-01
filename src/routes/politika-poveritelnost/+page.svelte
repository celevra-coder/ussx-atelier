<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Политика за поверителност | USSX</title>
</svelte:head>

<header class="sticky top-0 z-50 border-b px-6 py-4" style="background: rgba(10,14,26,0.95); backdrop-filter:blur(12px); border-color: rgba(59,111,232,0.2);">
	<a href="/" class="flex items-center gap-3">
		<img src="/images/logo-cube.svg" alt="" width="32" height="32" class="h-8 w-8" aria-hidden="true" />
		<span class="font-black text-brand-text" style="font-family: var(--font-display);">USSX</span>
	</a>
</header>

<main class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
	<h1 class="section-title mb-8">Политика за поверителност</h1>

	<div class="prose prose-invert max-w-none text-brand-muted leading-relaxed space-y-6">
		<p><strong class="text-brand-text">Администратор на лични данни:</strong> USSX — Ателие за 3D печат и зелени технологии, България.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Какви данни събираме</h2>
		<p>Събираме лични данни, предоставени доброволно чрез контактната форма: три имена, имейл адрес, телефонен номер, данни за детето (три имена, дата на раждане). Данните се събират единствено за целите на регистрация за курс или обработка на запитване.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Цел и основание за обработка</h2>
		<p>Данните се обработват въз основа на вашето изрично съгласие (чл. 6, ал. 1, б. „а" от GDPR) за целите на: регистрация за курс, отговор на запитване, комуникация с вас относно услугите ни.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Срок на съхранение</h2>
		<p>Данните се съхраняват за срок от 2 години след последния контакт, освен ако законодателството не изисква по-дълъг срок.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Вашите права</h2>
		<p>Имате право на достъп, коригиране, изтриване, ограничаване на обработката, преносимост на данните и право на оттегляне на съгласието. За упражняване на правата си, свържете се с нас на: <a href="mailto:info@ussx.bg" class="text-brand-blue-light underline">info@ussx.bg</a>.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Жалби</h2>
		<p>Имате право да подадете жалба до Комисията за защита на личните данни (КЗЛД), уебсайт: <a href="https://www.cpdp.bg" target="_blank" rel="noopener noreferrer" class="text-brand-blue-light underline">www.cpdp.bg</a>.</p>
	</div>
</main>

<Footer />
