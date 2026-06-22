<script lang="ts">
	const year = new Date().getFullYear();

	const navLinks = [
        { label: 'STEM кръжоци', href: '/stem-krajozi' },
        { label: 'Соларни решения и обучения', href: '/solarni-reshenia' },
        { label: 'Креативно инженерство', href: '/kreativno-inzhenerstvo' },
        { label: 'Галерия', href: '/galeria' },
        { label: 'За нас', href: '/za-nas' },
        { label: 'FAQ', href: '/faq' }
];

	const serviceLinks = [
        { label: 'STEM кръжоци за деца', href: '/stem-krajozi' },
        { label: 'Соларни услуги', href: '/solarni-reshenia' },
        { label: 'Соларни обучения', href: '/solarni-reshenia#contact' },
        { label: 'Креативно инженерство', href: '/kreativno-inzhenerstvo' }
];

	function goTo(href: string) {
        if (href.startsWith('#')) {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                return;
        }

        window.location.href = href;
}
</script>

<footer style="background: #080C18; border-top: 1px solid rgba(59,111,232,0.15);">
	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="sm:col-span-2 lg:col-span-1">
				<a href="/" class="mb-4 flex items-center gap-3" aria-label="USSX начало">
					<img src="/images/logo-cube.svg" alt="" width="36" height="36" class="h-9 w-9" aria-hidden="true" />
					<span class="text-lg font-black text-brand-text" style="font-family: var(--font-display);">USSX</span>
				</a>
				<p class="mb-4 text-sm leading-relaxed text-brand-muted">
					Ателие за 3D печат и зелени технологии. Вдъхновяваме следващото поколение изобретатели.
				</p>
				<div class="flex flex-col gap-2">
        <a
                href="https://www.facebook.com/profile.php?id=61591372162296"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-sm text-brand-muted transition-colors hover:text-brand-blue-light"
                aria-label="USSX ??? Facebook"
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                USSX ??? Facebook
        </a>
</div>
			</div>

			<!-- Navigation -->
			<div>
				<h4 class="mb-4 text-sm font-bold uppercase tracking-widest text-brand-muted" style="font-family: var(--font-display);">Навигация</h4>
				<ul class="space-y-2">
					{#each navLinks as link}
						<li>
							<button onclick={() => goTo(link.href)} class="text-sm text-brand-muted transition-colors hover:text-brand-text">
								{link.label}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-4 text-sm font-bold uppercase tracking-widest text-brand-muted" style="font-family: var(--font-display);">Услуги</h4>
				<ul class="space-y-2">
					{#each serviceLinks as link}
						<li>
							<button onclick={() => goTo(link.href)} class="text-sm text-brand-muted transition-colors hover:text-brand-text">
								{link.label}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="mb-4 text-sm font-bold uppercase tracking-widest text-brand-muted" style="font-family: var(--font-display);">Контакти</h4>
				<address class="space-y-2 text-sm text-brand-muted not-italic">
        <p>📍 гр. Пловдив, бул. „Христо Ботев“ 27А</p>
        <p>
                📞
                <a href="tel:+359878881815" class="transition-colors hover:text-brand-text">
                        0878 881 815
                </a>
        </p>
        <p>
                ✉️
                <a href="mailto:atelie3dpechat@gmail.com" class="transition-colors hover:text-brand-text">
                        atelie3dpechat@gmail.com
                </a>
        </p>
</address>
			</div>
		</div>

		<!-- Bottom bar -->
		<div
			class="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center sm:flex-row sm:text-left"
			style="border-color: rgba(59,111,232,0.1);"
		>
			<p class="text-xs text-brand-muted">
				© {year} USSX — Ателие за 3D печат и зелени технологии. Всички права запазени.
			</p>
			<div class="flex flex-wrap justify-center gap-4 text-xs text-brand-muted sm:justify-end">
				<a href="/politika-poveritelnost" class="hover:text-brand-text transition-colors">Поверителност</a>
				<a href="/obshti-uslovia" class="hover:text-brand-text transition-colors">Общи условия</a>
				<a href="/politika-biskvitki" class="hover:text-brand-text transition-colors">Бисквитки</a>
			</div>
		</div>
		<p class="mt-3 text-center text-xs text-brand-muted/60">
			Личните ви данни се обработват съгласно GDPR (Регламент ЕС 2016/679) и ЗЗЛД.
		</p>
	</div>
</footer>
