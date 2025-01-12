import Image from 'next/image';
import Link from 'next/link';

export const Phone = () => (
  <Link href={'tel:+380980389278'} className={'flex gap-2'} target="_blank">
    <Image
      src={'/img/icons/phone.svg'}
      alt="phone number icon"
      width={20}
      height={20}
    />
    <p className={'font-arial text-grey-dark hover:text-blue transition-all'}>
      098-038-92-78
    </p>
  </Link>
);
