import { Typography } from '@/components/ui/Typography/Typography';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {mockDataForServices, Service} from "@/components/shared/Services/mockDataServices";

export const ServicesList = (): React.JSX.Element => {
  return (
    <ul className="flex flex-wrap justify-center gap-5 lg:gap-6">
      {mockDataForServices &&
        mockDataForServices.map(({ imgPath, description }:Service )=> (
          <li
            key={uuidv4()}
            className="flex h-36 w-full grow-0 flex-col items-center justify-center gap-4 bg-second-background px-8 md:w-[200px] lg:h-[180px] lg:calc-services rounded-[5px] hover:bg-blue-extra-light group transition-colors duration-300"
          >
            <svg  xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 fill-blue-extra-light group-hover:fill-white transition-colors duration-300">
              <use href={imgPath}></use>
            </svg>
            <Typography
              variant={'p'}
              className="max-w-[180px] text-center font-roboto_roboto text-xl/[1.15] font-bold text-grey-dark md:text-xl/[1.15] lg:max-w-[218px] 2xl:text-[26px]/[1.22] group-hover:text-white transition-colors duration-300"
            >
              {description}
            </Typography>
          </li>
        ))}
    </ul>
  );
};
