<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Общи условия | USSX</title>
</svelte:head>

<header class="sticky top-0 z-50 border-b px-6 py-4" style="background: rgba(10,14,26,0.95); backdrop-filter:blur(12px); border-color: rgba(59,111,232,0.2);">
	<a href="/" class="flex items-center gap-3">
		<img src="/images/logo-cube.svg" alt="" width="32" height="32" class="h-8 w-8" aria-hidden="true" />
		<span class="font-black text-brand-text" style="font-family: var(--font-display);">USSX</span>
	</a>
</header>

<main class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
	<h1 class="section-title mb-8">Общи условия</h1>

	<div class="prose prose-invert max-w-none text-brand-muted leading-relaxed space-y-6">
		<h2 class="text-brand-text font-bold text-lg">1. Предмет</h2>
		<p>Настоящите общи условия уреждат отношенията между USSX — Ателие за 3D печат и зелени технологии (Доставчик) и лицата, ползващи услугите (Клиенти).</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">2. Описание на услугите</h2>
		<p>Доставчикът предлага образователни курсове за деца (3D печат, Lego роботика, Infento), услуги по 3D печат и консултации/инсталации на соларни системи. Записването за курс чрез онлайн форма е предварителна резервация — не конституира окончателен договор до потвърждение от Доставчика.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">3. Цени и плащане</h2>
		<p>Цените са в евро (€) и се дължат на място при явяване на курса или услугата. Онлайн регистрацията не изисква предварително плащане. Доставчикът издава разходен документ (фискален бон или фактура).</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">4. Отмяна и връщане</h2>
		<p>Клиентът може да отмени записването без такса до 48 часа преди началото на курса. При отмяна под 48 часа се дължи такса, равна на цената на едно занятие. При форсмажорни обстоятелства Доставчикът разглежда всеки случай индивидуално.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">5. Отговорност</h2>
		<p>Доставчикът не носи отговорност за вреди, дължащи се на обстоятелства извън неговия контрол. Родителят/настойникът е отговорен за точното посочване на здравословното състояние на детето, ако то е релевантно за участие в курса.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">6. Приложимо право</h2>
		<p>Приложимо е законодателството на Република България. Споровете се разглеждат от компетентен български съд.</p>
	</div>
</main>

<Footer />
