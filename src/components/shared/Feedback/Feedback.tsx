import React from "react";
import {Section} from "@/components/shared/Section/Section";
import {Typography} from "@/components/ui/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import {Form} from "@/components/shared/Form/Form";

type FeedbackTypes = {
  sectionFlag?: "first" | "second";
}

export const Feedback:React.FC<FeedbackTypes> = ({sectionFlag}):React.JSX.Element=> {

  const imagePath = sectionFlag === "first" ? "/img/first_girl.webp" : "/img/second_girl.webp"
  const sectionTitle = sectionFlag === "first" ?
    "При фиксации брекетов на обе челюсти получи сертификат на 7000 рублей"
    :
    "Онлайн консультация специалиста по аудио и видео связи, Бесплатно."

  return <Section className="bg-custom-gradient relative py-[62px]">
    <div className="relative w-full">
     <div className="relative z-10">
       <Typography variant={'h2'} className="font-bold text-black-light text-[42px]/[1.22] max-w-[881px] mb-10">
         {sectionTitle}
       </Typography>

       <Typography variant={'p'} className="max-w-[527px] mb-[37px] text-black-light text-xl/[1.29] md:text-2xl/[1.29] font-arial"> Укажите вой номер телефона, мы перезвоним и подберем для вас удобное время приёма.
         Или позвоните нам сами — <Link href="tel:+79003331040" className="text-[#0079FF] ">+79003331040</Link> </Typography>
       <Form className="flex gap-5 items-start mb-[37px]"/>
       <Typography variant={'p'} className="max-w-[527px] text-xl/[1.15] text-[#4E4E4E] sm:text-[18px]/[1.27] md:text-[18px]/[1.27] font-arial 2xl:text-2xl/[1.15] "> Записываясь на услугу вы даёте согласие на <Link href="#" className="underline">обработку своих персональных данных</Link> </Typography>

     </div>
     <Image src={imagePath} alt="Happy girl" width={744} height={752} className="absolute right-0 bottom-16 md:bottom-0 max-w-[300px] lg:max-w-full"/>
    </div>
  </Section>
}
