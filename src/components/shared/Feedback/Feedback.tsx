import { Form } from '@/components/shared/Form/Form';
import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type FeedbackTypes = {
  sectionFlag?: 'first' | 'second';
};

export const Feedback: React.FC<FeedbackTypes> = ({ sectionFlag }) => {
  const imagePath =
    sectionFlag === 'first' ? '/img/first_girl.webp' : '/img/second_girl.webp';
  const sectionTitle =
    sectionFlag === 'first'
      ? 'При фиксации брекетов на обе челюсти получи сертификат на 7000 рублей'
      : 'Онлайн консультация специалиста по аудио и видео связи, Бесплатно.';

  return (
    <Section
      className={`relative bg-custom-gradient py-[62px] ${sectionFlag === 'first' ? 'md:mt-28' : ''} `}
    >
      <div className="relative w-full">
        <div className="relative z-10">
          <Typography
            variant={'h2'}
            className="mb-10 max-w-[881px] text-[42px]/[1.22] font-bold text-black-light"
          >
            {sectionTitle}
          </Typography>

          <Typography
            variant={'p'}
            className="mb-[37px] max-w-[527px] font-arial text-xl/[1.29] text-black-light md:text-2xl/[1.29]"
          >
            Укажите вой номер телефона, мы перезвоним и подберем для вас удобное
            время приёма. Или позвоните нам сами —{' '}
            <Link href="tel:+79003331040" className="text-[#0079FF] transition-colors hover:text-blue">
              +79003331040
            </Link>
          </Typography>
          <Form className="mb-[37px] flex items-start gap-5" />
          <Typography
            variant={'p'}
            className="max-w-[527px] font-arial text-xl/[1.15] text-[#4E4E4E] sm:text-[18px]/[1.27] md:text-[18px]/[1.27] 2xl:text-2xl/[1.15]"
          >
            Записываясь на услугу вы даёте согласие на{' '}
            <Link href="#" className="underline transition-colors hover:text-blue-extra-light">
              обработку своих персональных данных
            </Link>
          </Typography>
        </div>
        <Image
          src={imagePath}
          alt="Happy girl"
          width={744}
          height={752}
          className="absolute bottom-[110px] right-0 max-w-[300px] md:bottom-0 lg:bottom-[-60px] lg:h-auto lg:max-w-[744px]"
        />
      </div>
    </Section>
  );
};
