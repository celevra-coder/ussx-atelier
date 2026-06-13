<script lang="ts">
        import { inview } from '$lib/actions/inview';
        import { submitRegistration, submitInquiry } from '$lib/submit';

        type InquiryType = 'course' | 'print' | 'solar';

        let { defaultType = 'course' }: { defaultType?: InquiryType } = $props();

        let type = $state<InquiryType>(defaultType);
        let submitting = $state(false);
        let submitted = $state(false);
        let submitError = $state('');
        let errors = $state<Record<string, string>>({});

        // Course form fields
        let parentName = $state('');
        let parentEmail = $state('');
        let parentPhone = $state('');
        let childName = $state('');
        let childDob = $state('');
        let experience = $state('');
        let selectedCourse = $state('');
        let selectedCity = $state('');
        let ageGroup = $state('');
        let preferredTime = $state('');
        let message = $state('');
        let acceptTerms = $state(false);
        let acceptPayment = $state(false);

        // Service form fields
        let serviceName = $state('');
        let serviceEmail = $state('');
        let servicePhone = $state('');
        let serviceDescription = $state('');
        let solarTrainingDescription = $state('');
        let acceptGdpr = $state(false);

        function validate(): boolean {
                const errs: Record<string, string> = {};

                if (type === 'course') {
                        if (!parentName.trim()) errs.parentName = 'Задължително поле';
                        if (!parentEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentEmail))
                                errs.parentEmail = 'Невалиден имейл';
                        if (!parentPhone.trim()) errs.parentPhone = 'Задължително поле';
                        if (!childName.trim()) errs.childName = 'Задължително поле';
                        if (!childDob) errs.childDob = 'Задължително поле';
                        if (!experience) errs.experience = 'Изберете ниво';
                        if (!selectedCity) errs.selectedCity = 'Изберете град';
                        if (!selectedCourse) errs.selectedCourse = 'Изберете курс';
                        if (!ageGroup) errs.ageGroup = 'Изберете възрастова група';
                        if (!acceptTerms) errs.acceptTerms = 'Необходимо е да приемете общите условия';
                        if (!acceptPayment) errs.acceptPayment = 'Потвърдете условията за плащане';
                } else {
                        if (!serviceName.trim()) errs.serviceName = 'Задължително поле';
                        if (!serviceEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(serviceEmail))
                                errs.serviceEmail = 'Невалиден имейл';
                        if (!servicePhone.trim()) errs.servicePhone = 'Задължително поле';

                        if (type === 'print' && !serviceDescription.trim()) {
                                errs.serviceDescription = 'Задължително поле';
                        }

                        if (type === 'solar' && !serviceDescription.trim() && !solarTrainingDescription.trim()) {
                                errs.serviceDescription = 'Попълнете запитване за услуга или обучение';
                        }

                        if (!acceptGdpr) errs.acceptGdpr = 'Необходимо е съгласие за обработка на данни';
                }

                errors = errs;

                const firstError = Object.keys(errs)[0];
                if (firstError) {
                        requestAnimationFrame(() => {
                                const el = document.getElementById(firstError);
                                el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                (el as HTMLElement | null)?.focus({ preventScroll: true });
                        });
                }

                return Object.keys(errs).length === 0;
        }

        async function handleSubmit(e: Event) {
                e.preventDefault();
                if (!validate()) return;

                submitting = true;
                submitError = '';

                try {
                        if (type === 'course') {
                                const payload = {
                                        parentName,
                                        parentEmail,
                                        parentPhone,
                                        childName,
                                        childDob,
                                        experience,
                                        selectedCity,
                                        selectedCourse,
                                        ageGroup,
                                        preferredTime,
                                        message
                                };

                                await submitRegistration(payload);

                                await fetch('/api/notify', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                                type,
                                                ...payload
                                        })
                                });
                        } else {
                                const payload = {
                                        inquiryType: type,
                                        name: serviceName,
                                        email: serviceEmail,
                                        phone: servicePhone,
                                        description:
                                                type === 'solar'
                                                        ? `Запитване за услуга: ${serviceDescription || 'няма'}\n\nЗапитване за обучение: ${solarTrainingDescription || 'няма'}`
                                                        : serviceDescription
                                };

                                await submitInquiry(payload);

                                await fetch('/api/notify', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                                type,
                                                ...payload
                                        })
                                });
                        }

                        submitted = true;
                } catch (err) {
                        console.error('[USSX] Submission failed:', err);
                        submitError = 'Възникна грешка при изпращането. Моля, опитайте отново или ни пишете на info@ussx.bg.';
                } finally {
                        submitting = false;
                }
        }

        function reset() {
                submitted = false;
                submitError = '';
                errors = {};
        }

        const today = new Date().toISOString().split('T')[0];

        const inputClass =
                'w-full rounded-xl border border-brand-muted/20 bg-brand-surface px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted/50 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue transition-colors aria-[invalid=true]:border-red-400/60';
        const labelClass = 'mb-1.5 block text-sm font-semibold text-brand-muted';
        const errorClass = 'mt-1 text-xs text-red-400';
        const sectionClass = 'pt-2 text-xs font-bold uppercase tracking-widest text-brand-blue-light';
</script>

<section id="contact" class="py-24">
        <div class="mx-auto max-w-2xl px-4 sm:px-6">
                <div class="reveal mb-12 text-center" use:inview>
                        <h2 class="section-title">Свържи се с нас</h2>
                        <p class="mt-4 text-brand-muted">
                                Запишете дете за кръжок, поискайте оферта за 3D печат или заявете соларна консултация или обучение.
                        </p>
                </div>

                {#if submitted}
                        <div class="reveal card-gradient-border p-10 text-center" use:inview>
                                <div
                                        class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                                        style="background: rgba(168,230,61,0.15);"
                                >
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="32"
                                                height="32"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#A8E63D"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                aria-hidden="true"
                                        >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <path d="m9 11 3 3L22 4" />
                                        </svg>
                                </div>

                                <h3 class="mb-2 text-xl font-bold text-brand-text" style="font-family: var(--font-display);">
                                        Изпратено успешно!
                                </h3>

                                <p class="mb-6 text-brand-muted">
                                        Ще се свържем с вас до 24 часа. Благодарим за интереса!
                                </p>

                                <button onclick={reset} class="btn-outline text-sm">
                                        Изпрати ново запитване
                                </button>
                        </div>
                {:else}
                        <div class="reveal card-gradient-border p-6 sm:p-8" use:inview>
                                <div class="mb-8 flex flex-wrap gap-2">
                                        {#each [['course', 'Запис на дете'], ['print', 'Запитване за 3D печат'], ['solar', 'Соларни услуги/обучения']] as [val, label]}
                                                <button
                                                        type="button"
                                                        onclick={() => { type = val as InquiryType; errors = {}; }}
                                                        class="rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200"
                                                        style="background: {type === val ? 'linear-gradient(90deg,#3B6FE8,#A8E63D)' : 'rgba(139,154,184,0.1)'}; color: {type === val ? 'white' : '#8B9AB8'}; border: 1px solid {type === val ? 'transparent' : 'rgba(139,154,184,0.2)'};"
                                                        aria-pressed={type === val}
                                                >
                                                        {label}
                                                </button>
                                        {/each}
                                </div>

                                <form onsubmit={handleSubmit} novalidate>
                                        {#if type === 'course'}
                                                <div class="space-y-5">
                                                        <p class={sectionClass}>1. Данни за родител</p>

                                                        <div class="grid gap-5 sm:grid-cols-2">
                                                                <div>
                                                                        <label for="parentName" class={labelClass}>Три имена на родител *</label>
                                                                        <input id="parentName" type="text" bind:value={parentName} class={inputClass} placeholder="Иван Петров Георгиев" autocomplete="name" aria-invalid={!!errors.parentName} />
                                                                        {#if errors.parentName}<p class={errorClass}>{errors.parentName}</p>{/if}
                                                                </div>

                                                                <div>
                                                                        <label for="parentPhone" class={labelClass}>Телефон *</label>
                                                                        <input id="parentPhone" type="tel" bind:value={parentPhone} class={inputClass} placeholder="+359 88 888 8888" autocomplete="tel" aria-invalid={!!errors.parentPhone} />
                                                                        {#if errors.parentPhone}<p class={errorClass}>{errors.parentPhone}</p>{/if}
                                                                </div>
                                                        </div>

                                                        <div>
                                                                <label for="parentEmail" class={labelClass}>Имейл *</label>
                                                                <input id="parentEmail" type="email" bind:value={parentEmail} class={inputClass} placeholder="email@example.com" autocomplete="email" aria-invalid={!!errors.parentEmail} />
                                                                {#if errors.parentEmail}<p class={errorClass}>{errors.parentEmail}</p>{/if}
                                                        </div>

                                                        <p class={sectionClass}>2. Данни за детето</p>

                                                        <div class="grid gap-5 sm:grid-cols-2">
                                                                <div>
                                                                        <label for="childName" class={labelClass}>Три имена на дете *</label>
                                                                        <input id="childName" type="text" bind:value={childName} class={inputClass} placeholder="Мария Иванова Петрова" aria-invalid={!!errors.childName} />
                                                                        {#if errors.childName}<p class={errorClass}>{errors.childName}</p>{/if}
                                                                </div>

                                                                <div>
                                                                        <label for="childDob" class={labelClass}>Дата на раждане *</label>
                                                                        <input id="childDob" type="date" bind:value={childDob} class={inputClass} max={today} aria-invalid={!!errors.childDob} />
                                                                        {#if errors.childDob}<p class={errorClass}>{errors.childDob}</p>{/if}
                                                                </div>
                                                        </div>

                                                        <p class={sectionClass}>3. Избор на курс</p>

                                                        <div>
                                                                <label for="selectedCity" class={labelClass}>Град *</label>
                                                                <select id="selectedCity" bind:value={selectedCity} class={inputClass} aria-invalid={!!errors.selectedCity}>
                                                                        <option value="">— Изберете град —</option>
                                                                        <option value="Пловдив">Пловдив</option>
                                                                        <option value="Варна">Варна</option>
                                                                        <option value="Габрово">Габрово</option>
                                                                </select>
                                                                {#if errors.selectedCity}<p class={errorClass}>{errors.selectedCity}</p>{/if}
                                                        </div>

                                                        <div class="grid gap-5 sm:grid-cols-2">
                                                                <div>
                                                                        <label for="experience" class={labelClass}>Ниво на опит *</label>
                                                                        <select id="experience" bind:value={experience} class={inputClass} aria-invalid={!!errors.experience}>
                                                                                <option value="">— Изберете —</option>
                                                                                <option value="beginner">Начинаещ</option>
                                                                                <option value="some">Малко опит</option>
                                                                                <option value="experienced">Имам опит</option>
                                                                        </select>
                                                                        {#if errors.experience}<p class={errorClass}>{errors.experience}</p>{/if}
                                                                </div>

                                                                <div>
                                                                        <label for="ageGroup" class={labelClass}>Възрастова група *</label>
                                                                        <select id="ageGroup" bind:value={ageGroup} class={inputClass} aria-invalid={!!errors.ageGroup}>
                                                                                <option value="">— Изберете —</option>
                                                                                <option value="5-8">5–8 години</option>
                                                                                <option value="8-12">8–12 години</option>
                                                                        </select>
                                                                        {#if errors.ageGroup}<p class={errorClass}>{errors.ageGroup}</p>{/if}
                                                                </div>
                                                        </div>

                                                        <fieldset>
                                                                <legend class={labelClass}>Курс *</legend>

                                                                <div class="mt-2 flex flex-wrap gap-3">
                                                                        {#each [['3d-print', '3D Печат'], ['lego', 'Lego Роботика'], ['infento', 'Infento Kits']] as [val, label]}
                                                                                <label
                                                                                        class="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm transition-colors focus-within:ring-2 focus-within:ring-brand-blue-light"
                                                                                        style="border: 1px solid {selectedCourse === val ? '#3B6FE8' : 'rgba(110,198,245,0.2)'}; background: {selectedCourse === val ? 'rgba(59,111,232,0.15)' : 'transparent'};"
                                                                                >
                                                                                        <input type="radio" bind:group={selectedCourse} value={val} class="sr-only" name="course" />
                                                                                        <span
                                                                                                class="h-3.5 w-3.5 shrink-0 rounded-full border transition-colors"
                                                                                                style="border-color: {selectedCourse === val ? '#3B6FE8' : 'rgba(110,198,245,0.4)'}; background: {selectedCourse === val ? '#3B6FE8' : 'transparent'};"
                                                                                                aria-hidden="true"
                                                                                        ></span>
                                                                                        <span class="text-brand-text">{label}</span>
                                                                                </label>
                                                                        {/each}
                                                                </div>

                                                                {#if errors.selectedCourse}<p class={errorClass}>{errors.selectedCourse}</p>{/if}
                                                        </fieldset>

                                                        <div>
                                                                <label for="preferredTime" class={labelClass}>Предпочитани дни / часове</label>
                                                                <textarea id="preferredTime" bind:value={preferredTime} class={inputClass} rows="2" placeholder="Например: делник следобед, събота сутрин..."></textarea>
                                                        </div>

                                                        <div>
                                                                <label for="message" class={labelClass}>Съобщение (незадължително)</label>
                                                                <textarea id="message" bind:value={message} class={inputClass} rows="3" placeholder="Допълнителна информация..."></textarea>
                                                        </div>

                                                        <div class="space-y-3 border-t pt-4" style="border-color: rgba(110,198,245,0.1);">
                                                                <label class="flex cursor-pointer items-start gap-3">
                                                                        <input type="checkbox" bind:checked={acceptTerms} class="mt-0.5 rounded" />
                                                                        <span class="text-sm text-brand-muted">
                                                                                Прочетох и приемам
                                                                                <a href="/obshti-uslovia" class="text-brand-blue-light underline" target="_blank">Общите условия</a>
                                                                                и
                                                                                <a href="/politika-poveritelnost" class="text-brand-blue-light underline" target="_blank">Политиката за поверителност</a>. *
                                                                        </span>
                                                                </label>
                                                                {#if errors.acceptTerms}<p class={errorClass}>{errors.acceptTerms}</p>{/if}

                                                                <label class="flex cursor-pointer items-start gap-3">
                                                                        <input type="checkbox" bind:checked={acceptPayment} class="mt-0.5 rounded" />
                                                                        <span class="text-sm text-brand-muted">
                                                                                Разбирам, че плащането се извършва <strong class="text-brand-text">на място</strong> при свързване на курса. *
                                                                        </span>
                                                                </label>
                                                                {#if errors.acceptPayment}<p class={errorClass}>{errors.acceptPayment}</p>{/if}
                                                        </div>
                                                </div>
                                        {:else}
                                                <div class="space-y-5">
                                                        <div>
                                                                <label for="serviceName" class={labelClass}>Три имена *</label>
                                                                <input id="serviceName" type="text" bind:value={serviceName} class={inputClass} placeholder="Иван Петров Георгиев" autocomplete="name" aria-invalid={!!errors.serviceName} />
                                                                {#if errors.serviceName}<p class={errorClass}>{errors.serviceName}</p>{/if}
                                                        </div>

                                                        <div class="grid gap-5 sm:grid-cols-2">
                                                                <div>
                                                                        <label for="serviceEmail" class={labelClass}>Имейл *</label>
                                                                        <input id="serviceEmail" type="email" bind:value={serviceEmail} class={inputClass} placeholder="email@example.com" autocomplete="email" aria-invalid={!!errors.serviceEmail} />
                                                                        {#if errors.serviceEmail}<p class={errorClass}>{errors.serviceEmail}</p>{/if}
                                                                </div>

                                                                <div>
                                                                        <label for="servicePhone" class={labelClass}>Телефон *</label>
                                                                        <input id="servicePhone" type="tel" bind:value={servicePhone} class={inputClass} placeholder="+359 88 888 8888" autocomplete="tel" aria-invalid={!!errors.servicePhone} />
                                                                        {#if errors.servicePhone}<p class={errorClass}>{errors.servicePhone}</p>{/if}
                                                                </div>
                                                        </div>

                                                        {#if type === 'solar'}
                                                                <div>
                                                                        <label for="serviceDescription" class={labelClass}>Запитване за услуга</label>
                                                                        <textarea
                                                                                id="serviceDescription"
                                                                                bind:value={serviceDescription}
                                                                                class={inputClass}
                                                                                rows="4"
                                                                                aria-invalid={!!errors.serviceDescription}
                                                                                placeholder="Опишете каква соларна услуга ви интересува — консултация, оглед, проект, инсталация, имот, потребление..."
                                                                        ></textarea>
                                                                        {#if errors.serviceDescription}<p class={errorClass}>{errors.serviceDescription}</p>{/if}
                                                                </div>

                                                                <div>
                                                                        <label for="solarTrainingDescription" class={labelClass}>Запитване за обучение</label>
                                                                        <textarea
                                                                                id="solarTrainingDescription"
                                                                                bind:value={solarTrainingDescription}
                                                                                class={inputClass}
                                                                                rows="4"
                                                                                placeholder="Опишете какво обучение ви интересува — за ученици, възрастни, практически демонстрации, соларни системи, монтаж, поддръжка..."
                                                                        ></textarea>
                                                                </div>
                                                        {:else}
                                                                <div>
                                                                        <label for="serviceDescription" class={labelClass}>Описание на поръчката *</label>
                                                                        <textarea
                                                                                id="serviceDescription"
                                                                                bind:value={serviceDescription}
                                                                                class={inputClass}
                                                                                rows="4"
                                                                                aria-invalid={!!errors.serviceDescription}
                                                                                placeholder="Опишете какво искате да принтирате — материал, размери, количество..."
                                                                        ></textarea>
                                                                        {#if errors.serviceDescription}<p class={errorClass}>{errors.serviceDescription}</p>{/if}
                                                                </div>
                                                        {/if}

                                                        <div class="border-t pt-4" style="border-color: rgba(110,198,245,0.1);">
                                                                <label class="flex cursor-pointer items-start gap-3">
                                                                        <input type="checkbox" bind:checked={acceptGdpr} class="mt-0.5 rounded" />
                                                                        <span class="text-sm text-brand-muted">
                                                                                Съгласен/а съм личните ми данни да бъдат обработвани от USSX за целите на запитването, съгласно
                                                                                <a href="/politika-poveritelnost" class="text-brand-blue-light underline" target="_blank">Политиката за поверителност</a>
                                                                                и GDPR. *
                                                                        </span>
                                                                </label>
                                                                {#if errors.acceptGdpr}<p class={errorClass}>{errors.acceptGdpr}</p>{/if}
                                                        </div>
                                                </div>
                                        {/if}

                                        {#if submitError}
                                                <p
                                                        class="mt-6 rounded-xl px-4 py-3 text-sm text-red-300"
                                                        style="background: rgba(248,113,113,0.1); border: 1px solid rgba(248,113,113,0.3);"
                                                        role="alert"
                                                >
                                                        {submitError}
                                                </p>
                                        {/if}

                                        <button
                                                type="submit"
                                                class="btn-primary mt-8 w-full justify-center"
                                                disabled={submitting}
                                        >
                                                {#if submitting}
                                                        <svg
                                                                class="mr-2 animate-spin"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                aria-hidden="true"
                                                        >
                                                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                                        </svg>
                                                        Изпращане...
                                                {:else}
                                                        Изпрати
                                                {/if}
                                        </button>
                                </form>
                        </div>
                {/if}
        </div>
</section>
