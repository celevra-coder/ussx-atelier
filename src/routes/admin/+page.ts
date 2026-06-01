// The admin dashboard is fully client-side: it relies on Firebase Auth and
// live Firestore reads in the browser, so there's nothing to prerender or SSR.
export const ssr = false;
export const prerender = false;
