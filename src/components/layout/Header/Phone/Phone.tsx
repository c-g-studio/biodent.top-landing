import Image from 'next/image';
import Link from 'next/link';
import { WithClassName } from '@/types/common';
import { FC } from 'react';

export const Phone: FC<WithClassName> = ({ className }) => (
  <Link
    href={'tel:+380980389278'}
    className={`text-grey-dark ${className}`}
    target="_blank"
  >
    <Image
      src={'/img/icons/phone.svg'}
      alt="phone number icon"
      width={20}
      height={20}
      className={'hidden md:block'}
    />
    <p className={'font-arial transition-all hover:text-blue'}>098-038-92-78</p>
  </Link>
);
