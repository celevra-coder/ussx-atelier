<script lang="ts">
	import { courses } from '$lib/data/courses';
	import CourseCard from './CourseCard.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section id="kursovedecata" class="py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6">
		<!-- Header -->
		

		<!-- Cards grid -->
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each courses as course, i}
				<div class="reveal h-full" use:inview style="transition-delay: {i * 100}ms;">
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
