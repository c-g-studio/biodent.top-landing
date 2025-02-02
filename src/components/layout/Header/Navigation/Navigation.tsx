'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';

import { mockNavigationData } from '@/components/layout/Header/Navigation/mockNavigationData';

import { WithClassName } from '@/types/common';

type TNavigationProps = {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

export const Navigation: FC<TNavigationProps & WithClassName> = ({
  className,
  setIsOpen = () => {},
}) => {
  return (
    <ul className={`gap-5 font-roboto text-grey-light ${className}`}>
      {mockNavigationData.map(item => (
        <li key={item.id} className={'transition-all hover:text-blue'}>
          <Link href={item.link} onClick={() => setIsOpen(false)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
