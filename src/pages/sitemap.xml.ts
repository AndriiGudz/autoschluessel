import type { APIRoute } from "astro";

const pages = ["", "services", "contact", "about"];
const languages = ["de", "en", "ru", "uk"];
const siteUrl = "https://mv-kfz.com";

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages
    .map((page) =>
      languages
        .map((lang) => {
          const path = page ? `/${page}` : "";
          const url = `${siteUrl}${lang === "de" ? "" : "/" + lang}${path}`;

          return `
  <url>
    <loc>${url}</loc>
    ${languages
      .map(
        (l) => `    <xhtml:link 
      rel="alternate" 
      hreflang="${l}" 
      href="${siteUrl}${l === "de" ? "" : "/" + l}${path}"/>`
      )
      .join("\n")}
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
        })
        .join("\n")
    )
    .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
