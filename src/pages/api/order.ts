// src/pages/api/order.ts

export const prerender = false;

const TELEGRAM_TOKEN = import.meta.env.TELEGRAM_TOKEN as string;
const TELEGRAM_CHAT_IDS = (import.meta.env.TELEGRAM_CHAT_IDS as string)
  .split(',')
  .map((id) => id.trim());

export async function POST({ request }: { request: Request }) {
  try {
    const order = await request.json();
    const text = `🎬 Новый заказ:\n${Object.entries(order)
      .map(([key, val]) => `${key}: ${val}`)
      .join('\n')}`;

    await Promise.all(
      TELEGRAM_CHAT_IDS.map((chat_id) =>
        fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({ chat_id, text }),
        })
      )
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    console.error('Error in POST /api/order:', err);

    // Приводим unknown к строке
    let details: string;
    if (err instanceof Error) {
      details = err.message;
    } else {
      try {
        details = JSON.stringify(err);
      } catch {
        details = String(err);
      }
    }

    return new Response(
      JSON.stringify({ error: 'Sending failed', details }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
