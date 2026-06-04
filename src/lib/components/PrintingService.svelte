<script lang="ts">
        import {
                Lightbulb,
                PenTool,
                Rocket,
                MessageSquare,
                CheckCircle,
                Package,
                FileUp,
                Zap
        } from 'lucide-svelte';
        import { inview } from '$lib/actions/inview';

        const features = [
                {
                        Icon: Lightbulb,
                        video: '/videos/creative-engineering/idea-concept-slide-1.mp4',
                        title: 'Идея и концепция',
                        text: 'Помагаме да структурирате идеята си — какво трябва да прави, как да изглежда, какви ограничения има и как може да се превърне в реален обект.'
                },
                {
                        Icon: PenTool,
                        video: '/videos/creative-engineering/modelirane-dizain-slide-1.mp4',
                        title: '3D моделиране, дизайн и прототипиране',
                        text: 'Създаваме или подготвяме 3D модели за печат, макети, демонстрации и функционални детайли. Изработваме тестови версии и малки серии чрез 3D печат и практическа инженерна работа.'
                },
                {
                        Icon: Zap,
                        video: '/videos/creative-engineering/vodorodni-sistemi-slide-1.mp4',
                        title: 'Водородни системи',
                        text: 'От първите експерименти с водород до днешните горивни клетки, водородът остава символ на бъдещето. Технологиите с водород имат потенциал за чиста енергия, транспорт с нулеви емисии, съхранение на възобновяема енергия и по-устойчива индустрия.'
                },
                {
                        Icon: Rocket,
                        video: '/videos/creative-engineering/startupi-slide-1.mp4',
                        title: 'Ученически и младежки стартъпи',
                        text: 'Подкрепяме млади екипи при разработване на идея, създаване на прототип, подготовка на демонстрация и представяне на проект по по-професионален начин.'
                }
        ];

        const steps = [
                { Icon: Lightbulb, label: 'Идея' },
                { Icon: MessageSquare, label: 'Обсъждане' },
                { Icon: PenTool, label: 'Дизайн' },
                { Icon: FileUp, label: 'Прототип' },
                { Icon: CheckCircle, label: 'Тест и подобрение' },
                { Icon: Package, label: 'Готов обект' }
        ];

        function scrollTo(href: string) {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
</script>

<section id="3d-uslugi" class="py-24">
        <div class="mx-auto max-w-[1500px] px-4 sm:px-6">
                <div class="reveal mb-16 text-center" use:inview>
                        <h2 class="section-title">От идея до реален прототип</h2>

                        <p class="mx-auto mt-4 max-w-3xl text-brand-muted">
                                Помагаме при създаване на прототипи, модели, демонстрационни обекти,
                                учебни разработки и малки инженерни решения. Подходът ни е практичен:
                                първо изясняваме идеята, после я превръщаме в модел, тестова версия
                                и реален физически обект.
                        </p>
                </div>

                <div class="mb-16 grid gap-8 md:grid-cols-2">
                        {#each features as { Icon, video, title, text }, i}
                                <div
                                        class="reveal card-gradient-border flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,111,232,0.25)]"
                                        use:inview
                                        style="transition-delay: {i * 100}ms;"
                                >
                                        <video
                                                src={video}
                                                class="aspect-video w-full rounded-2xl bg-black object-contain"
                                                controls
                                                preload="metadata"
                                                playsinline
                                        ></video>

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

                <div class="reveal" use:inview>
                        <h3
                                class="mb-8 text-center text-base font-bold uppercase tracking-widest text-brand-muted"
                                style="font-family: var(--font-display);"
                        >
                                Как работим
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

                <div class="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
                        <button onclick={() => scrollTo('#contact')} class="btn-primary">
                                Заяви проект
                        </button>

                        <button onclick={() => scrollTo('#contact')} class="btn-outline">
                                Попитай за прототип
                        </button>
                </div>
        </div>
</section>

