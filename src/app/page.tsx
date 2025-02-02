import { Hero } from '@/components/shared/Hero/Hero';
import { Trust } from '@/components/shared/Trust/Trust';
import { Feedback } from '@/components/shared/Feedback/Feedback';
import { Services } from '@/components/shared/Services/Services';

const BASE_URL = process.env.BASE_URL;

export const metadata = {
  title: 'Biodent | Стоматологічна клініка Кременчуг',
  description:
    'Стоматологічна клініка Biodent – професійний підхід до вашої усмішки! ' +
    'Наша клініка у Кременчуці пропонує якісні стоматологічні послуги. ' +
    'Ми використовуємо сучасні методи лікування, безпечні матеріали та індивідуальний підхід до кожного пацієнта.' +
    'Номер нашою стоматлогоічної клініки - 380980389278',
  keywords:
    'стоматологія Кременчук, стоматолог Кременчук, лікування зубів Кременчук, чистка зубів Кременчук, професійна гігієна зубів, брекети Кременчук, ортодонт Кременчук, протезування зубів Кременчук, зубні протези Кременчук, імплантація зубів Кременчук, зубні імпланти Кременчук, вініри Кременчук, встановлення вінірів, коронки на зуби Кременчук, зубні коронки, хірургічна стоматологія, видалення зубів Кременчук, стоматологія без болю, реставрація зубів, естетична стоматологія Кременчук, стоматологічна клініка Кременчук, записатися до стоматолога\n',
  openGraph: {
    title: 'Biodent.top - стоматологічна клініка',
    description:
      'Стоматологічна клініка Biodent – професійний підхід до вашої усмішки! Наша клініка у Кременчуці пропонує якісні стоматологічні послуги.',
    siteName: 'Biodent.top',
    url: `${BASE_URL}`,
    type: 'website',
    images: [
      {
        url: '/img/og-image.png',
        alt: 'Biodent - головна сторінка',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'uk-UA',
  },
};

export default async function Home() {
  return (
    <main>
      <h1 className={'hidden'}>Biodent - стоматологічна клініка Кременчуг</h1>
      <Hero />
      <Services />
      <Feedback sectionFlag="first" />
      <Trust />
      <Feedback sectionFlag="second" />
    </main>
  );
}
