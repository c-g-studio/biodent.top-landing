import { mockSocialsData } from '@/components/shared/SocialList/mockSocialsData';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { WithClassName } from '@/types/common';

export const SocialList: FC<WithClassName> = ({ className }) => {
  return (
    <ul className={`hidden gap-4 md:flex ${className}`}>
      {mockSocialsData.map(item => (
        <li key={item.id}>
          <Link href={item.link} target={'_blank'}>
            <Image
              src={item.icon}
              alt={item.alt}
              width={20}
              height={20}
              className={'fill-blue-extra-light'}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
