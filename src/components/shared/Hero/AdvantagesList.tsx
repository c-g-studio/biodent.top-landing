import {Typography} from "@/components/ui/Typography/Typography";
import Image from "next/image";

export const AdvantagesList = () => {

  const itemClass = 'relative flex items-center content-center gap-6 pl-3 md:pl-[30px] h-[105px] bg-[rgba(255,255,255,0.4)]';

  return <ul
    className="flex flex-col flex-wrap gap-3 justify-between w-full left-0 md:flex-row md:gap-[7px] md:absolute md:bottom-[-31px]">
    <li className={`${itemClass} flex-1 justify-center py-[20px] pr-2.5 md:py-0 md:justify-end`}>
      <div className="absolute inset-0 backdrop-blur bg-[rgba(255,255,255,0.4)]"></div>
      <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row">
        <Image src="/img/icons/hero/doc_icon_n.svg" alt="icon" width={27} height={37} loading={"lazy"}/>
        <Typography
          variant="p"
          className="text-center text-[18px]/[1.11] text-grey-dark md:text-start xl:text-[16px]/[1.11] 2xl:text-[18px]/[1.11] max-w-[290px]"
        >
          Команда квалифицированных специалистов
        </Typography>
      </div>
    </li>

    <li className={`${itemClass} flex-1 justify-center py-[20px] pr-2.5 md:py-0 xl:flex-[0.5]`}>
      <div className="absolute inset-0 backdrop-blur bg-[rgba(255,255,255,0.4)]"></div>
      <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row">
        <Image src="/img/icons/hero/arm_chair_icon.svg" alt="icon" width={29} height={39} loading={"lazy"}/>
        <Typography
          variant="p"
          className="text-center text-[18px]/[1.11] text-grey-dark md:text-start xl:text-[16px]/[1.11] 2xl:text-[18px]/[1.11]"
        >
          3 стоматологических кабинета
        </Typography>
      </div>
    </li>

    <li className={`${itemClass} flex-1 justify-center py-[20px] pr-2.5 md:py-0`}>
      <div className="absolute inset-0 backdrop-blur bg-[rgba(255,255,255,0.4)]"></div>
      <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row">
        <Image src="/img/icons/hero/locate_icon.svg" alt="icon" width={25} height={41} loading={"lazy"}/>
        <Typography
          variant="p"
          className="text-center text-[18px]/[1.11] text-grey-dark md:text-start xl:text-[16px]/[1.11] 2xl:text-[18px]/[1.11]"
        >
          Удобное расположение
        </Typography>
      </div>
    </li>
  </ul>

}
