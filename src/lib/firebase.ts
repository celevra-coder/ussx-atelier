import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { env } from '$env/dynamic/public';

/**
 * Firebase is optional. The contact form works in a frontend-only mode
 * (shows a success message without persisting) until these PUBLIC_FIREBASE_*
 * env vars are filled in — see `.env.example`. The moment real keys are
 * present, submissions are written to Firestore automatically.
 *
 * `$env/dynamic/public` is used (not static) so missing vars resolve to
 * `undefined` instead of failing the build when no `.env` exists.
 */
const firebaseConfig = {
	apiKey: env.PUBLIC_FIREBASE_API_KEY,
	authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: env.PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.PUBLIC_FIREBASE_APP_ID
};

export const firebaseEnabled = Boolean(
	env.PUBLIC_FIREBASE_API_KEY && env.PUBLIC_FIREBASE_PROJECT_ID
);

let app: FirebaseApp | undefined;
let dbInstance: Firestore | undefined;

/** Lazily initialise Firestore so the SDK is only loaded when keys exist. */
export function getDb(): Firestore | null {
	if (!firebaseEnabled) return null;
	if (!dbInstance) {
		app = initializeApp(firebaseConfig);
		dbInstance = getFirestore(app);
	}
	return dbInstance;
}
