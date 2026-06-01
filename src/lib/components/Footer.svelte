<script lang="ts">
	const year = new Date().getFullYear();

	const navLinks = [
		{ label: 'Курсове', href: '#kursovedecata' },
		{ label: 'Соларни решения', href: '#solarni' },
		{ label: '3D Услуга', href: '#3d-uslugi' },
		{ label: 'Галерия', href: '#galeria' },
		{ label: 'За нас', href: '#za-nas' },
		{ label: 'Екип', href: '#ekip' },
		{ label: 'FAQ', href: '#faq' }
	];

	const serviceLinks = [
		{ label: '3D Печат за протоипи', href: '#3d-uslugi' },
		{ label: 'Персонализирани подаръци', href: '#3d-uslugi' },
		{ label: 'Соларен монтаж', href: '#solarni' },
		{ label: 'Консултация', href: '#contact' }
	];

	function scrollTo(href: string) {
		if (href.startsWith('#')) {
			document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
		}
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
				<!-- Social (replace href="#social-name" with real URLs when available) -->
				<div class="flex gap-4">
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-brand-muted transition-colors hover:text-brand-blue-light">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-brand-muted transition-colors hover:text-brand-blue-light">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
					</a>
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h4 class="mb-4 text-sm font-bold uppercase tracking-widest text-brand-muted" style="font-family: var(--font-display);">Навигация</h4>
				<ul class="space-y-2">
					{#each navLinks as link}
						<li>
							<button onclick={() => scrollTo(link.href)} class="text-sm text-brand-muted transition-colors hover:text-brand-text">
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
							<button onclick={() => scrollTo(link.href)} class="text-sm text-brand-muted transition-colors hover:text-brand-text">
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
					<p>📍 България, [Адрес]</p>
					<p>📞 <a href="tel:+35900000000" class="hover:text-brand-text transition-colors">+359 00 000 0000</a></p>
					<p>✉️ <a href="mailto:info@ussx.bg" class="hover:text-brand-text transition-colors">info@ussx.bg</a></p>
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
