// src/pages/api/order.ts
import type { APIRoute } from 'astro';

export const prerender = false;  // чтобы POST-эндпоинт работал

const TELEGRAM_TOKEN   = import.meta.env.TELEGRAM_TOKEN!;
const TELEGRAM_CHAT_IDS = (import.meta.env.TELEGRAM_CHAT_IDS || '')
  .split(',')
  .map((id: string) => id.trim())
  .filter(Boolean);

export const POST: APIRoute = async ({ request }) => {
  // 1) Парсим тело
  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid or empty JSON body' }),
      { status: 400 }
    );
  }

  // 2) Декомпозиция полей
  const {
    carBrand: Brand,
    carModel: Model,
    carYear: Year,
    customerName: Name,
    customerPhone: Phone,
  } = body;

  // 3) Проверка наличия
  if (![Brand, Model, Year, Name, Phone].every(Boolean)) {
    return new Response(
      JSON.stringify({ error: 'Missing required fields' }),
      { status: 400 }
    );
  }

  // 4) Форматируем дату
  const orderDate = new Date().toLocaleString('ru-RU', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });

  // 5) Формируем Markdown-сообщение
  const text = [
    '🗝️ *New order*',
    `*Date:* ${orderDate}`,
    `*Brand:* ${Brand}`,
    `*Model:* ${Model}`,
    `*Year:* ${Year}`,
    `*Name:* ${Name}`,
    `*Phone:* ${Phone}`,
  ].join('\n');

  // 6) Отправляем в Telegram и логируем ответ
  const results = await Promise.all(TELEGRAM_CHAT_IDS.map(async (chat_id: string) => {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id,
          text,
          parse_mode: 'Markdown',
        }),
      }
    );
    const data = await res.json();
    return { chat_id, ok: res.ok, status: res.status, data };
  }));

  // 7) Проверяем, не было ли ошибок
  const failed = results.filter(r => !r.ok);
  if (failed.length) {
    console.error('Telegram failures:', failed);
    return new Response(
      JSON.stringify({ error: 'Some messages failed', details: failed }),
      { status: 502 }
    );
  }

  // 8) Всё хорошо
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
