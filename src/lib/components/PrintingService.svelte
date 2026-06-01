<script lang="ts">
	import { Layers, Gift, Wrench, FileUp, MessageSquare, CheckCircle, Package } from 'lucide-svelte';
	import { inview } from '$lib/actions/inview';

	const features = [
		{
			Icon: Layers,
			title: 'Прототипи и малки серии',
			text: 'Превърнете идеята си в реален обект. Работим с FDM и резин технологии за прецизни прототипи и малки производствени серии.'
		},
		{
			Icon: Gift,
			title: 'Персонализирани подаръци',
			text: 'Уникални, персонализирани изделия — от декорации и фигурки до именни плочки и специални сувенири. Идеални за специален повод.'
		},
		{
			Icon: Wrench,
			title: 'Резервни части',
			text: 'Не можете да намерите резервна част? Ние я принтираме! Бързо, точно и на достъпна цена. Изпратете ни модел или снимка.'
		}
	];

	const steps = [
		{ Icon: FileUp, label: 'Изпращаш файл' },
		{ Icon: MessageSquare, label: 'Получаваш оферта' },
		{ Icon: CheckCircle, label: 'Одобряваш' },
		{ Icon: Package, label: 'Получаваш продукта' }
	];

	function scrollTo(href: string) {
		document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section id="3d-uslugi" class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<div class="reveal mb-16 text-center" use:inview>
			<h2 class="section-title">Принтираме вашите идеи</h2>
			<p class="mx-auto mt-4 max-w-2xl text-brand-muted">
				Услуга по 3D печат за физически лица и фирми. Качествени материали, бързи срокове,
				конкурентни цени.
			</p>
		</div>

		<!-- Feature cards -->
		<div class="mb-16 grid gap-6 md:grid-cols-3">
			{#each features as { Icon, title, text }, i}
				<div
					class="reveal card-gradient-border flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,111,232,0.25)]"
					use:inview
					style="transition-delay: {i * 100}ms;"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl"
						style="background: rgba(59,111,232,0.12);"
					>
						<Icon size={24} color="#6EC6F5" strokeWidth={1.5} />
					</div>
					<h3 class="font-bold text-brand-text" style="font-family: var(--font-display);">
						{title}
					</h3>
					<p class="text-sm leading-relaxed text-brand-muted">{text}</p>
				</div>
			{/each}
		</div>

		<!-- Horizontal stepper -->
		<div class="reveal" use:inview>
			<h3
				class="mb-8 text-center text-base font-bold text-brand-muted uppercase tracking-widest"
				style="font-family: var(--font-display);"
			>
				Как работи
			</h3>
			<div class="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
				{#each steps as { Icon, label }, i}
					<div class="flex flex-1 flex-col items-center gap-2 text-center">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-full"
							style="background: linear-gradient(135deg, rgba(59,111,232,0.2), rgba(168,230,61,0.2)); border: 1px solid rgba(110,198,245,0.3);"
						>
							<Icon size={24} color="#6EC6F5" strokeWidth={1.5} />
						</div>
						<span class="text-sm font-semibold text-brand-text">{label}</span>
					</div>
					{#if i < steps.length - 1}
						<div class="stepper-line hidden sm:block" style="margin-top: 1.75rem;"></div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="mt-12 text-center">
			<button onclick={() => scrollTo('#contact')} class="btn-primary">
				Изпрати запитване
			</button>
		</div>
	</div>
</section>
