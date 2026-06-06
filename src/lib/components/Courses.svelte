<script lang="ts">
        import { courses } from '$lib/data/courses';
        import CourseCard from './CourseCard.svelte';
        import { inview } from '$lib/actions/inview';

        let { showMobileImages = false } = $props();

        const mobileImages = [
                {
                        src: '/images/stem/3d-pechat-modelirane.png',
                        alt: '3D печат и моделиране'
                },
                {
                        src: '/images/stem/robotika-programirane.png',
                        alt: 'Роботика и програмиране'
                },
                {
                        src: '/images/stem/infento-inzhenerstvo.png',
                        alt: 'Infento инженерство'
                }
        ];
</script>

<section id="kursovedecata" class="py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
                <div class="grid gap-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                        {#each courses as course, i}
                                <div class="reveal h-full" use:inview style="transition-delay: {i * 100}ms;">
                                        {#if showMobileImages && mobileImages[i]}
                                                <div class="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur md:hidden">
                                                        <img
                                                                src={mobileImages[i].src}
                                                                alt={mobileImages[i].alt}
                                                                class="aspect-[4/5] w-full object-cover"
                                                        />
                                                </div>
                                        {/if}

                                        <div class="relative z-10">
                                                <CourseCard {course} />
                                        </div>
                                </div>
                        {/each}
                </div>

                <p class="mt-8 text-center text-sm text-brand-muted">
                        * Плащането се извършва на място при свързване на курса. Регистрацията е безплатна.
                </p>
        </div>
</section>
