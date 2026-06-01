/**
 * Svelte action that adds/removes a 'visible' class when the element
 * enters/leaves the viewport. Used for scroll-triggered reveal animations.
 */
export function inview(node: HTMLElement, options: IntersectionObserverInit = {}) {
	const defaultOptions: IntersectionObserverInit = {
		threshold: 0.15,
		rootMargin: '0px 0px -50px 0px',
		...options
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				node.classList.add('visible');
				// Once visible, stop observing (one-shot animation)
				observer.unobserve(node);
			}
		});
	}, defaultOptions);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
