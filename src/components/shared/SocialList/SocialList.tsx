import { mockSocialsData } from '@/components/shared/SocialList/mockSocialsData';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { WithClassName } from '@/types/common';

type TSocialListTypes = {
  variant?: string;
};

export const SocialList: FC<TSocialListTypes & WithClassName> = ({
  className,
  variant,
}) => {
  const isFooter = variant === 'footer';

  return (
    <ul className={`${className}`}>
      {mockSocialsData.map(item => (
        <li key={item.id}>
          <Link href={item.link} target={'_blank'}>
            <Image
              src={item.icon}
              alt={item.alt}
              width={40}
              height={40}
              className={`fill-blue-extra-light ${isFooter ? 'h-4 w-4 md:h-10 md:w-10' : ''} `}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
