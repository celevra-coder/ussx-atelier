<script lang="ts">
	import { courses } from '$lib/data/courses';
	import CourseCard from './CourseCard.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section id="kursovedecata" class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<!-- Header -->
		<div class="reveal mb-16 text-center" use:inview>
			<h2 class="section-title">Курсове за деца</h2>
			<p class="mx-auto mt-4 max-w-2xl text-brand-muted">
				Практически курсове за деца от 5 до 12 години. Малки групи, реално оборудване,
				инструктори с истинска страст към преподаването.
			</p>
		</div>

		<!-- Cards grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each courses as course, i}
				<div class="reveal" use:inview style="transition-delay: {i * 100}ms;">
					<CourseCard {course} />
				</div>
			{/each}
		</div>

		<!-- Note -->
		<p class="mt-8 text-center text-sm text-brand-muted">
			* Плащането се извършва на място при явяване на курса. Регистрацията е безплатна.
		</p>
	</div>
</section>
