<script lang="ts">
        import { fly } from 'svelte/transition';
        import { Menu, X } from 'lucide-svelte';

        let scrolled = $state(false);
        let mobileOpen = $state(false);

        const links = [
                { label: 'STEM кръжоци', href: '/stem-krajozi' },
                { label: 'Соларни', href: '/solarni-reshenia' },
                { label: 'Креативно инженерство', href: '/kreativno-inzhenerstvo' },
                { label: 'За нас', href: '/za-nas' },
                { label: 'Галерия', href: '/galeria' }
        ];

        const externalLinks = [
                { label: 'USSX SOLAR', href: 'https://ussxsolar.com/' },
                { label: 'USSX ACADEMY', href: 'https://www.ussxacademy.bg/' }
        ];

        $effect(() => {
                function onScroll() {
                        scrolled = window.scrollY > 50;
                }

                window.addEventListener('scroll', onScroll, { passive: true });
                return () => window.removeEventListener('scroll', onScroll);
        });

        $effect(() => {
                if (!mobileOpen) return;

                const prevOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';

                return () => {
                        document.body.style.overflow = prevOverflow;
                };
        });

        function closeMenu() {
                mobileOpen = false;
        }

        function goTo(href: string) {
                closeMenu();

                if (href.startsWith('#')) {
                        const el = document.querySelector(href);
                        el?.scrollIntoView({ behavior: 'smooth' });
                        return;
                }

                window.location.href = href;
        }
</script>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" class:scrolled>
        <nav class="mx-auto flex max-w-7xl items-start justify-between px-4 py-3 sm:px-6">
                <div class="flex flex-col items-center gap-2">
                        <a
                                href="/"
                                class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:bg-white/[0.07]"
                                aria-label="USSX и училище"
                        >
                                <img
                                        src="/images/ussx-mark-transparent.png"
                                        alt="USSX"
                                        class="h-10 w-auto object-contain md:h-12"
                                />

                                <span class="h-8 w-px bg-white/20 md:h-10"></span>

                                <img
                                        src="/images/school-mark-transparent.png"
                                        alt="ПГИКТ"
                                        class="h-9 w-auto object-contain md:h-11"
                                />
                        </a>

                        <div class="hidden items-center gap-2 md:flex">
                                {#each externalLinks as link}
                                        <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-green px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-md transition hover:scale-105"
                                        >
                                                {link.label}
                                        </a>
                                {/each}
                        </div>
                </div>

                <ul class="hidden items-center gap-5 pt-5 lg:flex">
                        {#each links as link}
                                <li>
                                        <button
                                                onclick={() => goTo(link.href)}
                                                class="text-sm font-semibold text-brand-muted transition-colors hover:text-brand-text"
                                                style="font-family: var(--font-body);"
                                        >
                                                {link.label}
                                        </button>
                                </li>
                        {/each}
                </ul>

                <div class="flex items-center gap-3 pt-3">
                        <button
                                onclick={() => goTo('/stem-krajozi#contact')}
                                class="btn-primary hidden text-sm sm:inline-flex"
                        >
                                Свържи се
                        </button>

                        <button
                                onclick={() => (mobileOpen = !mobileOpen)}
                                class="flex items-center justify-center rounded-lg p-2 text-brand-text transition-colors hover:bg-white/10 lg:hidden"
                                aria-label="Меню"
                        >
                                {#if mobileOpen}
                                        <X size={24} />
                                {:else}
                                        <Menu size={24} />
                                {/if}
                        </button>
                </div>
        </nav>
</header>

{#if mobileOpen}
        <div
                class="fixed inset-0 z-40 flex flex-col bg-brand-bg/95 pt-24 backdrop-blur-lg lg:hidden"
                transition:fly={{ y: -20, duration: 250 }}
        >
                <nav class="flex flex-col items-center gap-6 p-6">
                        {#each links as link}
                                <button
                                        onclick={() => goTo(link.href)}
                                        class="text-xl font-bold text-brand-text transition-colors hover:text-brand-blue-light"
                                        style="font-family: var(--font-display);"
                                >
                                        {link.label}
                                </button>
                        {/each}

                        <div class="mt-2 flex w-full max-w-xs flex-col gap-3">
                                {#each externalLinks as link}
                                        <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="btn-primary w-full justify-center"
                                                onclick={closeMenu}
                                        >
                                                {link.label}
                                        </a>
                                {/each}

                                <button onclick={() => goTo('/stem-krajozi#contact')} class="btn-primary w-full justify-center">
                                        Свържи се
                                </button>
                        </div>
                </nav>
        </div>
{/if}

<style>
        header.scrolled {
                background: rgba(10, 14, 26, 0.85);
                backdrop-filter: blur(12px);
                border-bottom: 1px solid rgba(59, 111, 232, 0.2);
        }
</style>
