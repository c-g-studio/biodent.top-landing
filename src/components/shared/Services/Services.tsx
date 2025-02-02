import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';
import React from 'react';
import { ServicesList } from '@/components/shared/Services/ServicesList';

export const Services = (): React.JSX.Element => {
  const paragraphStyle =
    'text-black-light text-xl/[1.15] md:text-xl/[1.15] 2xl:text-2xl/[1.15] font-arial';

  return (
    <Section className="py-[116px]" id="services">
      <div className="mb-[69px] max-w-[425px]">
        <Typography
          variant={'h2'}
          className="mb-3 text-[42px]/[1.22] font-bold text-blue-dark md:text-5xl/[1.22]"
        >
          Услуги
        </Typography>
        <Typography variant={'p'} className={paragraphStyle}>
          Мы постарались сделать прайс, максимально простым и понятным.
        </Typography>
      </div>
      <ServicesList />
    </Section>
  );
};
