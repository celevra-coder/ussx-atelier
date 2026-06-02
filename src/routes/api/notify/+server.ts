import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_NOTIFY_EMAIL } from '$env/static/private';
import type { RequestHandler } from './$types';

function escapeHtml(value: unknown) {
        return String(value ?? '')
                .replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll("'", '&#039;');
}

export const POST: RequestHandler = async ({ request }) => {
        if (!RESEND_API_KEY || !CONTACT_NOTIFY_EMAIL) {
                return json({ ok: false, error: 'Email service is not configured.' }, { status: 500 });
        }

        const data = await request.json();

        const typeLabel =
                data.type === 'course'
                        ? 'Записване на дете'
                        : data.type === 'solar'
                                ? 'Соларни услуги/обучения'
                                : 'Запитване за 3D печат';

        const subject = `USSX · ${typeLabel}`;

        const html = `
                <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
                        <h2>${escapeHtml(typeLabel)}</h2>
                        <p>Има ново запитване от сайта USSX.</p>

                        <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                                ${Object.entries(data)
                                        .map(
                                                ([key, value]) => `
                                                        <tr>
                                                                <td style="border: 1px solid #e5e7eb; font-weight: bold; width: 220px;">${escapeHtml(key)}</td>
                                                                <td style="border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(value)}</td>
                                                        </tr>
                                                `
                                        )
                                        .join('')}
                        </table>
                </div>
        `;

        const resend = new Resend(RESEND_API_KEY);

        const { error } = await resend.emails.send({
                from: 'USSX сайт <onboarding@resend.dev>',
                to: [CONTACT_NOTIFY_EMAIL],
                subject,
                html
        });

        if (error) {
                console.error('[USSX] Email notification failed:', error);
                return json({ ok: false, error: 'Email failed.' }, { status: 500 });
        }

        return json({ ok: true });
};