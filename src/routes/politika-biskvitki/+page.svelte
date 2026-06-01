<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Политика за бисквитки | USSX</title>
</svelte:head>

<header class="sticky top-0 z-50 border-b px-6 py-4" style="background: rgba(10,14,26,0.95); backdrop-filter:blur(12px); border-color: rgba(59,111,232,0.2);">
	<a href="/" class="flex items-center gap-3">
		<img src="/images/logo-cube.svg" alt="" width="32" height="32" class="h-8 w-8" aria-hidden="true" />
		<span class="font-black text-brand-text" style="font-family: var(--font-display);">USSX</span>
	</a>
</header>

<main class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
	<h1 class="section-title mb-8">Политика за бисквитки</h1>

	<div class="prose prose-invert max-w-none text-brand-muted leading-relaxed space-y-6">
		<p>Сайтът на USSX използва бисквитки (cookies) за осигуряване на функционалността на сайта и подобряване на потребителското изживяване.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Задължителни бисквитки</h2>
		<p>Необходими за работата на сайта. Включват бисквитката за запомняне на вашия избор относно съгласието за бисквитки (<code class="text-brand-blue-light">ussx_cookie_consent</code>). Не могат да бъдат изключени.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Функционални бисквитки</h2>
		<p>Запомнят вашите предпочитания (например езикови настройки) за по-удобно ползване на сайта. Можете да ги откажете, но това може да ограничи функционалността.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Аналитични бисквитки</h2>
		<p>Събират анонимизирана информация за начина, по който посетителите използват сайта, за да можем да го подобряваме. Активират се само при изричното ви съгласие.</p>

		<h2 class="text-brand-text font-bold text-lg mt-8">Управление на бисквитките</h2>
		<p>Можете да управлявате бисквитките чрез настройките на браузъра си или чрез банера за съгласие при зареждане на сайта. Оттеглянето на съгласието не засяга законосъобразността на обработката преди оттеглянето.</p>
	</div>
</main>

<Footer />
