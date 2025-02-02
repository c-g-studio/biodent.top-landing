import Link from 'next/link';
import { Section } from '@/components/shared/Section/Section';
import { classnames } from '@/utils/classnames';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Section className="flex h-[100vh] items-center justify-center">
      <div className="text-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={'/img/404.png'}
            alt={'not found image'}
            width={360}
            height={360}
          />
          <h3 className={'mb-2 text-[20px] md:text-[50px]'}>
            Сторінку не знайдено
          </h3>
          <p className={'mb-2 text-[20px] md:text-[50px]'}>
            Перейдіть на головну сторінку
          </p>
          <Link
            href="/"
            className={classnames(
              'inline-block rounded-[4px] bg-blue-extra-light px-2 py-3 text-white transition-all hover:bg-blue',
            )}
          >
            Перейти на головну
          </Link>
        </div>
      </div>
    </Section>
  );
}
