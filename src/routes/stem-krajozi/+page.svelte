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
                                        Практически занимания, в които децата не просто слушат, а създават.
                                        В нашите STEM кръжоци те проектират, сглобяват, програмират,
                                        тестват и подобряват свои реални проекти.
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
                                        чрез която децата изграждат реални конструкции и превозни средства.
                                        Така те развиват пространствено мислене, логика, креативност,
                                        техническа култура и увереност да превръщат идеите си в работещи решения.
                                </p>
                        </div>

                        <div class="mt-14 hidden gap-6 md:grid md:grid-cols-3">
                                <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur">
                                        <img
                                                src="/images/stem/3d-pechat-modelirane.png"
                                                alt="3D печат и моделиране"
                                                class="h-full w-full object-cover"
                                        />
                                </div>

                                <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur">
                                        <img
                                                src="/images/stem/robotika-programirane.png"
                                                alt="Роботика и програмиране"
                                                class="h-full w-full object-cover"
                                        />
                                </div>

                                <div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur">
                                        <img
                                                src="/images/stem/infento-inzhenerstvo.png"
                                                alt="Infento инженерство"
                                                class="h-full w-full object-cover"
                                        />
                                </div>
                        </div>
                </div>
        </section>

        <Courses showMobileImages={true} />

        <section class="px-4 pb-24">
                <div class="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-brand-muted shadow-xl backdrop-blur md:p-10">
                        <h2 class="text-2xl font-bold text-brand-text md:text-3xl">
                                STEM кръжоци за деца в Пловдив, Варна и Габрово
                        </h2>

                        <p class="mt-5 leading-8">
                                USSX предлага практически STEM кръжоци за деца, които искат да създават, да сглобяват, да програмират и да тестват свои идеи. Заниманията съчетават 3D печат, роботика, програмиране и Infento инженерство.
                        </p>

                        <p class="mt-4 leading-8">
                                Курсовете са подходящи за деца, които имат интерес към техника, моделиране, конструиране, роботи и нови технологии. Чрез реални проекти децата развиват логическо мислене, креативност, инженерна култура и увереност.
                        </p>

                        <p class="mt-4 leading-8">
                                Записването за STEM кръжоци може да се направи чрез формата за контакт, като се избере желаният град: Пловдив, Варна или Габрово.
                        </p>
                </div>
        </section>

        <ContactForm />
</main>

<Footer />
<CookieBanner />
