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
      ? 'Записуйтесь на прийом і отримуйте якісне лікування'
      : 'Під час онлайн запису, консультація безкоштовна';

  return (
    <Section
      className={`relative bg-custom-gradient py-[62px] ${sectionFlag === 'first' ? 'md:mt-28' : ''}`}
      id={'contacts'}
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
            Вкажіть свій номер телефону, ми передзвонимо і виберемо зручний для
            вас час прийому. Або зателефонуйте нам самостійно -{' '}
            <Link
              href="tel:+380980389278"
              className="text-[#0079FF] transition-colors hover:text-blue"
            >
              +380980389278
            </Link>
          </Typography>
          <Form className="mb-[75px] flex items-start gap-5" />
          <Typography
            variant={'p'}
            className="max-w-[527px] font-arial text-xl/[1.15] text-[#4E4E4E] sm:text-[18px]/[1.27] md:text-[18px]/[1.27] 2xl:text-2xl/[1.15]"
          >
            Записуючись на послугу, ви погоджуєтесь{' '}
            <Link
              href="/privacy-policy"
              className="underline transition-colors hover:text-blue-extra-light"
            >
              на обробку своїх персональних данних
            </Link>
          </Typography>
        </div>
        <Image
          src={imagePath}
          alt="Happy girl"
          width={744}
          height={752}
          className="absolute bottom-[-61px] right-0 max-w-[300px] lg:bottom-[-60px] lg:h-auto lg:max-w-[744px]"
        />
      </div>
    </Section>
  );
};
