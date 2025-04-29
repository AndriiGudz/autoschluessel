import { languages, defaultLang } from './config'
import type { TranslationSchema } from './types'

const translations = {
  en: () => import('./en.json'),
  de: () => import('./de.json'),
  ru: () => import('./ru.json'),
  uk: () => import('./uk.json'),
}

export async function getTranslation(lang: string): Promise<TranslationSchema> {
  const language = lang in languages ? lang : defaultLang
  const module = await translations[language as keyof typeof translations]()
  return module.default as TranslationSchema
}
