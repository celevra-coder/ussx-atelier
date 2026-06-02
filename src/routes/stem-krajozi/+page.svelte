<script lang="ts">
        import Navbar from '$lib/components/Navbar.svelte';
        import Courses from '$lib/components/Courses.svelte';
import ContactForm from '$lib/components/ContactForm.svelte';
import Footer from '$lib/components/Footer.svelte';
        import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<svelte:head>
        <title>STEM кръжоци за деца | USSX</title>
</svelte:head>

<Navbar />

<main class="bg-brand-bg pt-32">
        <section class="dot-grid px-4 pb-16 pt-10">
        <div class="mx-auto max-w-6xl">
                <div class="mx-auto max-w-4xl text-center">
                        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
                                USSX · обучения за деца
                        </p>

                        <h1 class="section-title">
                                STEM кръжоци за деца
                        </h1>

                        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
                                Практически занимания, в които децата не просто слушат, а създават. В нашите STEM
                                кръжоци те проектират, сглобяват, програмират, тестват и подобряват свои реални
                                проекти.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-brand-muted">
                                Работим с любезното съдействие и подкрепа на
                                <span class="font-semibold text-brand-text">
                                        Професионална гимназия по информатика и компютърни науки „Акад. Благовест Сендов“
                                </span>
                                — гр. Пловдив.
                        </p>

                        <p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-brand-muted">
                                Обученията съчетават 3D печат, роботика и Infento — модулна инженерна система,
                                чрез която децата изграждат реални конструкции и превозни средства. Така те развиват
                                пространствено мислене, логика, креативност, техническа култура и увереност да
                                превръщат идеите си в работещи решения.
                        </p>
                </div>

                <div class="mt-14 grid gap-6 md:grid-cols-3">
                        <article class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
                                <h2 class="mb-4 text-xl font-bold text-brand-text" style="font-family: var(--font-display);">
                                        3D печат и моделиране
                                </h2>

                                <p class="text-sm leading-7 text-brand-muted">
                                        В този кръжок децата преминават през целия процес от идея до реален обект.
                                        Те се учат да мислят пространствено, да проектират модели, да разбират как
                                        работи 3D принтерът и как дигиталният дизайн се превръща във физически предмет.
                                </p>

                                <p class="mt-4 text-sm leading-7 text-brand-muted">
                                        Заниманията развиват въображение, прецизност, търпение и умение за подобряване
                                        на проекта след тест и грешка.
                                </p>
                        </article>

                        <article class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
                                <h2 class="mb-4 text-xl font-bold text-brand-text" style="font-family: var(--font-display);">
                                        Роботика и програмиране
                                </h2>

                                <p class="text-sm leading-7 text-brand-muted">
                                        Роботиката помага на децата да разберат връзката между код, механика и движение.
                                        Те създават конструкции, програмират действия, тестват решения и виждат веднага
                                        как техният код управлява реален модел.
                                </p>

                                <p class="mt-4 text-sm leading-7 text-brand-muted">
                                        Това развива логическо мислене, работа в екип, последователност и умение за
                                        решаване на задачи.
                                </p>
                        </article>

                        <article class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
                                <h2 class="mb-4 text-xl font-bold text-brand-text" style="font-family: var(--font-display);">
                                        Infento — инженерство в реален мащаб
                                </h2>

                                <p class="text-sm leading-7 text-brand-muted">
                                        Infento е модулна образователна система, чрез която децата могат да изграждат
                                        реални превозни средства и конструкции в човешки мащаб. Вместо да работят само
                                        с малки модели, те виждат как механиката, балансът, движението и конструкцията
                                        работят в реалния свят.
                                </p>

                                <p class="mt-4 text-sm leading-7 text-brand-muted">
                                        С Infento децата преминават през истински инженерен процес — идея, дизайн,
                                        сглобяване, тест, подобрение и представяне на резултата.
                                </p>
                        </article>
                </div>
        </div>
</section>

        <Courses />
        <ContactForm />
</main>

<Footer />
<CookieBanner />