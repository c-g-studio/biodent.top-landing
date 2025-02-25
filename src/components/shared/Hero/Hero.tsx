import { Typography } from '@/components/ui/Typography/Typography';
import { Section } from '@/components/shared/Section/Section';
import { AdvantagesList } from '@/components/shared/Hero/AdvantagesList';
import { GetCallModal } from '@/components/shared/GetCallModal/GetCallModal';

export const Hero = () => {
  return (
    <Section className="relative mx-auto max-w-[1768px] bg-hero-mobile bg-cover bg-center bg-no-repeat pt-[146px] md:bg-hero-tablet md:py-[146px] lg:bg-hero-bgc">
      <div className="to-white-transparent absolute bottom-0 left-0 right-[50%] top-0 bg-gradient-to-r from-white"></div>
      <div className="relative z-20 mb-20 max-w-[465px] md:mb-0">
        <Typography variant="p" className="mb-[18px] text-xl/[1.15] text-grey">
          — Стоматологія в Кременчуці
        </Typography>
        <Typography
          variant="h2"
          className="mb-5 max-w-[364px] text-6xl font-bold text-blue-extra-dark md:text-5xl/[1.04]"
        >
          Лікування зубів в той же день
        </Typography>
        <Typography variant="p" className="mb-9 text-xl/[1.15] text-grey">
          Ми проведемо повну консультацію, професійну гігієну ротової порожнини,
          Лікування зубів та ясен
        </Typography>
        <GetCallModal
          className="w-full text-xl/[1.15] md:max-w-max md:text-[16px]/[1.11]"
          text="Записатися на прийом"
        />
      </div>
      <AdvantagesList />
    </Section>
  );
};
