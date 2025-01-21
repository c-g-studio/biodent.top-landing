import React from "react";
import {Section} from "@/components/shared/Section/Section";
import {Typography} from "@/components/ui/Typography/Typography";

export const Trust = (): React.JSX.Element => {

  const listItemStyle = "flex-1 basis-full md:calc pl-9 pr-8 py-8 2xl:py-14 bg-white"
  const spanStyle = "inline-block mb-2 text-blue-extra-light text-5xl/[1.2] md:text-5xl/[1.2] font-light"
  const h3TitleStyle = "text-black-light font-bold text-3xl/[1.19] md:text-3xl/[1.19] 2xl:text-4xl/[1.19] mb-2"
  const paragraphStyle = "text-black-light text-xl/[1.15] md:text-xl/[1.15] 2xl:text-2xl/[1.15] font-arial"

  return <Section className="bg-second-background py-[124px]">
    <Typography variant={'h2'} className="mb-[60px] font-bold text-black-light text-5xl/[1.22]">
      Нам доверяют пациенты
    </Typography>
    <ul className="flex flex-wrap gap-[24px]">
      <li className={listItemStyle}>
        <Typography variant={'span'} className={spanStyle}>1</Typography>
        <Typography variant={'h3'} className={h3TitleStyle}>Честные цены, без хитрых уловок</Typography>
        <Typography variant={'p'} className={paragraphStyle}>Фиксируем цены в плане лечения,
          не повышаем в процессе.
        </Typography>
      </li>
      <li className={listItemStyle}>
        <Typography variant={'span'} className={spanStyle}>2</Typography>
        <Typography variant={'h3'} className={h3TitleStyle}>Опытные Врачи</Typography>
        <Typography variant={'p'} className={paragraphStyle}>Врачи постоянно совершенствуются
          в своей специальности, несмотря
          на богатый опыт работы.</Typography>
      </li>
      <li className={listItemStyle}>
        <Typography variant={'span'} className={spanStyle}>3</Typography>
        <Typography variant={'h3'} className={h3TitleStyle}>Комфортные условия</Typography>
        <Typography variant={'p'} className={paragraphStyle}>Уютная обстановка и отзывчивый персонал сделают поход к
          стоматологу максимально
          приятным.
        </Typography>
      </li>
    </ul>
  </Section>
}
