import '@/app/globals.css';

import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';

import { inter, roboto_mono, roboto } from '@/app/fonts';

import { WithChildren } from '@/types/common';

export default async function LocaleLayout({ children }: WithChildren) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${roboto.variable} overflow-x-hidden`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
