import { SocialList } from '@/components/shared/SocialList/SocialList';
import Image from 'next/image';
import { Typography } from '@/components/ui/Typography/Typography';
import Link from 'next/link';

export const Footer = async () => {
  return (
    <>
      <footer
        className={`container flex items-center justify-between py-4 lg:py-10`}
      >
        <SocialList className={'flex mr-4 md:mr-0 gap-2 md:gap-9'} variant={'footer'} />
        <Link href={'/'}>
          <Typography variant={'h3'} className={'text-black-light underline'}>
            Ознайомитись з політика конфедеційності
          </Typography>
        </Link>
        <Link href={'/'}>
          <Image
            src={'/img/logo.png'}
            alt={'Logo'}
            width={57}
            height={51}
            className={'h-8 w-8 md:h-14 md:w-16'}
          />
        </Link>
      </footer>
      <Typography
        variant={'h3'}
        className={
          'border-blue-grey-light border-t py-2 text-center text-[12px] text-grey-light'
        }
      >
        Developed by{' '}
        <Link
          href={'https://coding-gods.com'}
          className={'underline'}
          target={'_blank'}
        >
          coding-gods.com
        </Link>
      </Typography>
    </>
  );
};
