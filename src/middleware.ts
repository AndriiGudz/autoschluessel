import { defineMiddleware } from "astro:middleware";
import { languages, defaultLang } from "./i18n/config";

function getBrowserLanguage(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLang;

  // Разбираем заголовок Accept-Language
  const browserLangs = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase().split("-")[0]);

  // Ищем первый поддерживаемый язык
  const supportedLang = browserLangs.find((lang) => lang in languages);

  return supportedLang || defaultLang;
}

export const onRequest = defineMiddleware(
  async ({ request, redirect }, next) => {
    const url = new URL(request.url);
    const path = url.pathname;

    // Пропускаем SEO файлы
    if (path === "/robots.txt" || path === "/sitemap.xml") {
      return next();
    }

    // Пропускаем API-эндпоинты
    if (path.startsWith("/api/")) {
      return next();
    }

    // Пропускаем статику
    const staticFileExtensions = ['.mp4', '.mov', '.webm', '.jpg', '.png', '.jpeg', '.svg', '.ico', '.webp'];
    if (staticFileExtensions.some((ext) => url.pathname.endsWith(ext))) {
      return next();
    }

    // Если уже есть язык в URL, пропускаем
    if (url.pathname.match(/^\/(en|de|ru|uk)\/?/)) {
      return next();
    }

    // Получаем язык из заголовка Accept-Language
    const acceptLanguage = request.headers.get("accept-language");
    const detectedLang = getBrowserLanguage(acceptLanguage);

    // Если мы на главной странице, редиректим на версию с языком
    if (url.pathname === "/") {
      return redirect(`/${detectedLang}${url.search}`);
    }

    // Для всех остальных URL добавляем определенный язык
    return redirect(`/${detectedLang}${url.pathname}${url.search}`);
  }
);
