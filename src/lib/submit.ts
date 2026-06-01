import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDb, firebaseEnabled } from './firebase';

export interface RegistrationPayload {
	parentName: string;
	parentEmail: string;
	parentPhone: string;
	childName: string;
	childDob: string;
	experience: string;
	selectedCourse: string;
	ageGroup: string;
	preferredTime: string;
	message: string;
}

export interface InquiryPayload {
	inquiryType: 'print' | 'solar';
	name: string;
	email: string;
	phone: string;
	description: string;
}

/**
 * Persist a course registration. Writes to the `registrations` Firestore
 * collection when Firebase is configured; otherwise resolves silently so the
 * UI can still show a success state in frontend-only mode.
 */
export async function submitRegistration(data: RegistrationPayload): Promise<void> {
	const db = getDb();
	if (!db) {
		if (import.meta.env.DEV) console.info('[USSX] Firebase not configured — registration:', data);
		return;
	}
	await addDoc(collection(db, 'registrations'), { ...data, createdAt: serverTimestamp() });
}

/**
 * Persist a service inquiry (3D printing or solar). Writes to the `inquiries`
 * Firestore collection when configured; otherwise resolves silently.
 */
export async function submitInquiry(data: InquiryPayload): Promise<void> {
	const db = getDb();
	if (!db) {
		if (import.meta.env.DEV) console.info('[USSX] Firebase not configured — inquiry:', data);
		return;
	}
	await addDoc(collection(db, 'inquiries'), { ...data, createdAt: serverTimestamp() });
}

export { firebaseEnabled };
