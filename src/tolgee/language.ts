'use server';

import { detectLanguageFromHeaders } from '@tolgee/react/server';
import { cookies, headers } from 'next/headers';
import { ALL_LANGUAGES, DEFAULT_LANGUAGE } from '@/constants/constants';

const LANGUAGE_COOKIE = 'NEXT_LOCALE';

export async function setLanguage(locale: string) {
  const cookieStore = await cookies();
  const language = ALL_LANGUAGES.find(item => item.key === locale);

  if (language) {
    cookieStore.set(LANGUAGE_COOKIE, locale, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
  }
}

export async function getLanguage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LANGUAGE_COOKIE)?.value;

  if (locale && ALL_LANGUAGES.some(item => item.key === locale)) {
    return locale;
  }

  const detected = detectLanguageFromHeaders(
    await headers(),
    ALL_LANGUAGES.map(item => item.key),
  );
  return detected || DEFAULT_LANGUAGE;
}
