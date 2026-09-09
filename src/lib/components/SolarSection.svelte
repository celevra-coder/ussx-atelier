<script lang="ts">
        import { Search, Settings, Activity, GraduationCap } from 'lucide-svelte';
        import { inview } from '$lib/actions/inview';

        const features = [
                {
                        Icon: GraduationCap,
                        title: 'Курсове за соларни специалисти',
                        text: 'Обученията включват теория онлайн, присъствена практика, работа с реални компоненти и модул за лични соларни системи. Подходящи са за начинаещи, техници, мъже и жени.'
                },
                {
                        Icon: Search,
                        title: 'Безплатна консултация и оглед',
                        text: 'Започваме с разговор, анализ на нуждите и оглед на място. Разглеждаме имота, потреблението, възможностите за монтаж и най-подходящия тип соларна система.'
                },
                {
                        Icon: Settings,
                        title: 'Проектиране и инсталация',
                        text: 'Подготвяме цялостно решение — от избор на компоненти и конфигурация до монтаж и пускане в експлоатация. Работим според нуждите на дома, бизнеса или конкретния обект.'
                },
                {
                        Icon: Activity,
                        title: 'Поддръжка и мониторинг',
                        text: 'Следим работата на системата, производството и ефективността. Предлагаме поддръжка и мониторинг, за да може инсталацията да работи надеждно във времето.'
                }
        ];

        function scrollTo(href: string) {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
</script>

<section
        id="solarni"
        class="py-24"
        style="background: linear-gradient(180deg, #0A0E1A 0%, #0D1A0D 50%, #0A0E1A 100%);"
>
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
                <div class="reveal mb-16 text-center" use:inview>
                        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
                                USSX · зелени технологии
                        </p>

                        <h1 class="section-title">Соларни услуги и обучения</h1>

                        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
                                В USSX съчетаваме професионални соларни услуги и практически обучения за хора,
                                които искат да навлязат в една от най-бързо развиващите се технологични сфери.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-brand-muted">
                                За клиенти, които искат да изградят фотоволтаична система, предлагаме цялостен процес —
                                безплатна първоначална консултация, оглед на място, анализ на потреблението,
                                проектиране, подбор на компоненти, инсталация, поддръжка и мониторинг.
                                Работим с решения за домове, бизнес обекти и индивидуални нужди, като целта е
                                системата да бъде съобразена с реалното потребление, бюджета и възможностите на обекта.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-brand-muted">
                                Провеждаме и курсове за соларни специалисти в град Пловдив. Обученията са подходящи
                                както за напълно начинаещи, така и за техници, които искат да надградят знанията си.
                                Курсовете са подходящи за мъже и жени, които търсят практически умения и реална
                                професионална посока.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-brand-muted">
                                Теоретичната част се провежда онлайн, а практиката — присъствено. В обученията
                                включваме и модул за лични соларни системи, подходящ за хора, които искат да разберат
                                как могат да планират, използват или поддържат собствена малка соларна система.
                                След завършване участниците получават EU сертификат за работа.
                        </p>
                </div>

                <div
                        class="reveal mb-12 overflow-hidden rounded-2xl border border-brand-green/20 shadow-[0_0_40px_rgba(168,230,61,0.12)]"
                        use:inview
                >
                        <img
                                src="/images/solar-split-banner.png"
                                alt="Соларна инсталация и обучение"
                                class="h-auto w-full object-cover"
                                loading="lazy"
                        />
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {#each features as { Icon, title, text, href, linkLabel }, i}
                                <div
                                        class="reveal card-gradient-border group flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,230,61,0.2)]"
                                        use:inview
                                        style="transition-delay: {i * 100}ms; --tw-gradient-from: #1A5C2A; --tw-gradient-to: #A8E63D;"
                                >
                                        <div
                                                class="flex h-12 w-12 items-center justify-center rounded-xl"
                                                style="background: rgba(168,230,61,0.1);"
                                        >
                                                <Icon size={24} color="#A8E63D" strokeWidth={1.5} />
                                        </div>

                                        <h3 class="font-bold text-brand-text" style="font-family: var(--font-display);">
                                                {title}
                                        </h3>

                                        <p class="text-sm leading-relaxed text-brand-muted">{text}</p>

                                        <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="mt-auto inline-flex w-fit rounded-full bg-gradient-to-r from-brand-blue to-brand-green px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:scale-105"
                                        >
                                                {linkLabel}
                                        </a>
                                </div>
                        {/each}
                </div>


                <!-- Solar targeted SEO blocks marker -->
                <div class="mt-14 grid gap-6 md:grid-cols-2">
                        <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur">
                                <h2 class="text-2xl font-bold text-brand-text">
                                        Курсове за соларни специалисти
                                </h2>
                                <p class="mt-4 leading-7">
                                        USSX провежда курсове за соларни специалисти, подходящи за начинаещи, техници и хора, които искат да навлязат в сферата на фотоволтаичните системи. Обучението съчетава теория, практика, работа с компоненти и основи на монтажа.
                                </p>
                        </article>

                        <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur">
                                <h2 class="text-2xl font-bold text-brand-text">
                                        Монтаж на соларни инсталации
                                </h2>
                                <p class="mt-4 leading-7">
                                        Предлагаме монтаж на соларни инсталации и фотоволтаични системи за домове, бизнес обекти и индивидуални нужди. Решението се съобразява с потреблението, покрива, бюджета и реалните условия на обекта.
                                </p>
                        </article>

                        <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur">
                                <h2 class="text-2xl font-bold text-brand-text">
                                        Фотоволтаични системи за домове и бизнес
                                </h2>
                                <p class="mt-4 leading-7">
                                        Работим с фотоволтаични системи, соларни панели, инвертори, монтажни конструкции и решения за по-добра енергийна независимост. Подходът е практичен и съобразен с реалното потребление.
                                </p>
                        </article>

                        <article class="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-brand-muted shadow-xl backdrop-blur">
                                <h2 class="text-2xl font-bold text-brand-text">
                                        Соларни консултации, оглед и проектиране
                                </h2>
                                <p class="mt-4 leading-7">
                                        Преди изграждане на соларна система започваме с консултация, оглед и анализ. Така може да се избере подходяща фотоволтаична система, мощност, тип монтаж и компоненти.
                                </p>
                        </article>
                </div>


                <div class="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
                        <button onclick={() => scrollTo('#contact')} class="btn-primary">
                                Запиши се за обучение
                        </button>

                        <a
                                href="https://www.ussxacademy.bg"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn-primary"
                        >
                                USS X ACADEMY
                        </a>

                        <button onclick={() => scrollTo('#contact')} class="btn-primary">
                                Заяви консултация
                        </button>
                </div>
        </div>
</section>
