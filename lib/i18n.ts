
export type Language = 'es' | 'en' | 'zh';

export const languages: Language[] = ['es', 'en', 'zh'];

export const languageNames = {
  es: 'Español',
  en: 'English',
  zh: '中文'
} as const;

export const defaultLanguage: Language = 'es';

// Funciones simplificadas - no manipulan rutas
export function getLanguageFromPath(pathname: string): Language {
  return defaultLanguage; // No usamos rutas con prefijo de idioma
}

export function removeLanguageFromPath(pathname: string): string {
  return pathname;
}

export function addLanguageToPath(pathname: string, language: Language): string {
  return pathname;
}
