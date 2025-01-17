import {Typography} from "@/components/ui/Typography/Typography";
import {Button} from "@/components/shared/Button/Button";
import {Section} from "@/components/shared/Section/Section";
import {AdvantagesList} from "@/components/shared/Hero/AdvantagesList";

export const Hero = ()=> {

return <Section className="relative mx-auto max-w-[1768px] bg-hero-mobile bg-cover bg-center bg-no-repeat pt-[146px] md:bg-hero-tablet md:py-[146px] lg:bg-hero-bgc">
  <div className="absolute left-0 right-[50%] top-0 bottom-0 bg-gradient-to-r from-white to-white-transparent"></div>
  <div className="relative z-20 mb-20 max-w-[465px] md:mb-0">
    <Typography variant="p" className="mb-[18px] text-xl/[1.15] text-grey">
      — Стоматология в Чебоксарах
    </Typography>
    <Typography variant="h1" className="mb-5 max-w-[364px]">
      Лечение зубов в тот же день
    </Typography>
    <Typography variant="p" className="mb-9 text-xl/[1.15] text-grey">
      Мы проведем полную консультацию, профессиональную гигиену полости рта,
      лечение зубов и десен
    </Typography>
    <Button className="w-full text-xl/[1.15] md:max-w-max md:text-[16px]/[1.11]" aria="Кнопка записи на приём">
      Записаться на приём
    </Button>
  </div>
  <AdvantagesList />
</Section>

}
