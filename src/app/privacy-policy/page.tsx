import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';
import Link from 'next/link';

const BASE_URL = process.env.BASE_URL;

export const metadata = {
  title:
    'Biodent | Стоматологічна клініка Кременчуг | Політика конфедеційності',
  description:
    'Стоматологічна клініка Biodent – професійний підхід до вашої усмішки! ' +
    'Наша клініка у Кременчуці пропонує якісні стоматологічні послуги. ' +
    'Ми використовуємо сучасні методи лікування, безпечні матеріали та індивідуальний підхід до кожного пацієнта.' +
    'Номер нашою стоматлогоічної клініки - 380980389278',
  keywords:
    'стоматологія Кременчук, стоматолог Кременчук, лікування зубів Кременчук, чистка зубів Кременчук, професійна гігієна зубів, брекети Кременчук, ортодонт Кременчук, протезування зубів Кременчук, зубні протези Кременчук, імплантація зубів Кременчук, зубні імпланти Кременчук, вініри Кременчук, встановлення вінірів, коронки на зуби Кременчук, зубні коронки, хірургічна стоматологія, видалення зубів Кременчук, стоматологія без болю, реставрація зубів, естетична стоматологія Кременчук, стоматологічна клініка Кременчук, записатися до стоматолога',
  openGraph: {
    title: 'Biodent.top - стоматологічна клініка',
    description:
      'Стоматологічна клініка Biodent – професійний підхід до вашої усмішки! Наша клініка у Кременчуці пропонує якісні стоматологічні послуги.',
    siteName: 'Biodent.top',
    url: `${BASE_URL}/privacy-policy`,
    type: 'website',
    images: [
      {
        url: '/img/og-image.png',
        alt: 'Biodent - політика конфедеційності',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'uk-UA',
  },
};

export default function Page() {
  return (
    <Section>
      <Typography
        variant={'h1'}
        className={'mb-8 text-center text-[24px] md:text-[40px] lg:text-[60px]'}
      >
        Політика конфіденційності
      </Typography>
      <Typography
        variant={'h2'}
        className={
          'mb-1 text-[16px] text-blue-extra-dark md:text-[18px] lg:text-[20px]'
        }
      >
        1. Загальні положення
      </Typography>
      <Typography variant={'p'} className={'mb-3 text-blue-extra-dark'}>
        Ця політика конфіденційності регулює порядок збору, використання та
        захисту персональних даних користувачів сайту biodent.top (далі –
        «Сайт»). Використовуючи Сайт, ви надаєте згоду на обробку ваших
        персональних даних відповідно до цієї Політики.{' '}
      </Typography>
      <Typography
        variant={'h2'}
        className={
          'mb-1 text-[16px] text-blue-extra-dark md:text-[18px] lg:text-[20px]'
        }
      >
        2. Збір та використання персональних даних
      </Typography>
      <Typography variant={'p'} className={'mb-3 text-blue-extra-dark'}>
        При використанні Сайту ми можемо збирати наступну інформацію: Номер
        телефону (запитується через форму на сайті); Ім&apos;я (якщо користувач
        надає його добровільно); Інші дані, які користувач може вказати в заявці
        або повідомленні. Ця інформація використовується виключно для
        зв&apos;язку з клієнтом, надання консультацій та запису на прийом.
      </Typography>
      <Typography
        variant={'h2'}
        className={
          'mb-1 text-[16px] text-blue-extra-dark md:text-[18px] lg:text-[20px]'
        }
      >
        3. Захист персональних даних
      </Typography>
      <Typography variant={'p'} className={'mb-3 text-blue-extra-dark'}>
        Ми гарантуємо конфіденційність наданої вами інформації. Дані не
        передаються третім особам, окрім випадків, передбачених законодавством
        України.
      </Typography>
      <Typography
        variant={'h2'}
        className={
          'mb-1 text-[16px] text-blue-extra-dark md:text-[18px] lg:text-[20px]'
        }
      >
        4. Зберігання персональних даних
      </Typography>
      <Typography variant={'p'} className={'mb-3 text-blue-extra-dark'}>
        Персональні дані зберігаються не довше, ніж це необхідно для досягнення
        цілей їх обробки. Ви можете в будь-який час звернутися до нас із запитом
        на видалення своїх даних.
      </Typography>
      <Typography
        variant={'h2'}
        className={
          'mb-1 text-[16px] text-blue-extra-dark md:text-[18px] lg:text-[20px]'
        }
      >
        5. Права користувача
      </Typography>
      <Typography variant={'p'} className={'text-blue-extra-dark'}>
        Користувач має право:
      </Typography>
      <ul className={'mb-3 list-disc pl-5'}>
        <li>
          Отримати інформацію про свої персональні дані, які ми зберігаємо;{' '}
        </li>
        <li>Вимагати виправлення або видалення своїх даних;</li>
        <li>Відкликати згоду на обробку даних.</li>
      </ul>

      <Typography
        variant={'h2'}
        className={
          'mb-1 text-[16px] text-blue-extra-dark md:text-[18px] lg:text-[20px]'
        }
      >
        6. Зміни до Політики конфіденційності
      </Typography>
      <Typography variant={'p'} className={'mb-3 text-blue-extra-dark'}>
        Ми залишаємо за собою право змінювати цю Політику конфіденційності.
        Оновлення буде опубліковано на цій сторінці. 8. Контактна інформація
        Якщо у вас є питання щодо обробки персональних даних, звертайтеся за
        контактним номером:
        <Link
          href={'tel:+380980389278'}
          className={`ml-3 inline-block text-grey-dark`}
          target="_blank"
        >
          <span
            className={'font-arial text-blue transition-all hover:text-blue'}
          >
            098-038-92-78
          </span>
        </Link>
      </Typography>
    </Section>
  );
}
