import Image from 'next/image';
import Link from 'next/link';
import { WithClassName } from '@/types/common';
import { FC } from 'react';

export const Phone: FC<WithClassName> = ({ className }) => (
  <Link
    href={'tel:+380980389278'}
    className={`hidden md:flex md:gap-2 ${className}`}
    target="_blank"
  >
    <Image
      src={'/img/icons/phone.svg'}
      alt="phone number icon"
      width={20}
      height={20}
    />
    <p className={'font-arial text-grey-dark transition-all hover:text-blue'}>
      098-038-92-78
    </p>
  </Link>
);
