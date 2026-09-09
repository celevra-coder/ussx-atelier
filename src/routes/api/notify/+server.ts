import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
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
        const resendApiKey = env.RESEND_API_KEY;
        const notifyEmail = env.CONTACT_NOTIFY_EMAIL;

        if (!resendApiKey || !notifyEmail) {
                console.error('[USSX] Email service is not configured.');
                return json({ ok: false, error: 'Email service is not configured.' }, { status: 500 });
        }

        const data = await request.json();

        const typeLabel =
                data.type === 'course'
                        ? '\u0417\u0430\u043f\u0438\u0441\u0432\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435'
                        : data.type === 'solar'
                                ? '\u0421\u043e\u043b\u0430\u0440\u043d\u0438 \u0443\u0441\u043b\u0443\u0433\u0438/\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f'
                                : '\u0417\u0430\u043f\u0438\u0442\u0432\u0430\u043d\u0435 \u0437\u0430 3D \u043f\u0435\u0447\u0430\u0442';

        const subject = `USSX ? ${typeLabel}`;

        const html = `
                <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
                        <h2>${escapeHtml(typeLabel)}</h2>
                        <p>\u0418\u043c\u0430 \u043d\u043e\u0432\u043e \u0437\u0430\u043f\u0438\u0442\u0432\u0430\u043d\u0435 \u043e\u0442 \u0441\u0430\u0439\u0442\u0430 USSX.</p>

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

        const resend = new Resend(resendApiKey);

        const { error } = await resend.emails.send({
                from: 'USSX site <onboarding@resend.dev>',
                to: [notifyEmail],
                subject,
                html
        });

        if (error) {
                console.error('[USSX] Email notification failed:', error);
                return json({ ok: false, error: 'Email failed.' }, { status: 500 });
        }

        return json({ ok: true });
};
