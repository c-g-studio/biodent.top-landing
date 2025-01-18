import { mockNavigationData } from '@/components/layout/Header/Navigation/mockNavigationData';
import Link from 'next/link';
import { WithClassName } from '@/types/common';
import { FC } from 'react';

export const Navigation: FC<WithClassName> = ({ className }) => {
  return (
    <ul className={`gap-9 font-roboto text-grey-light ${className}`}>
      {mockNavigationData.map(item => (
        <li key={item.id} className={'transition-all hover:text-blue'}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
