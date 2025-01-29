import Image from 'next/image';
import { SocialList } from '@/components/shared/SocialList/SocialList';
import { Navigation } from '@/components/layout/Header/Navigation/Navigation';
import { GoogleMapLink } from '@/components/layout/Header/GoogleMapLink/GoogleMapLink';
import { Calendar } from '@/components/layout/Header/Calendar/Calendar';
import { Phone } from '@/components/layout/Header/Phone/Phone';
import { MobileMenu } from '@/components/layout/Header/MobileMenu/MobileMenu';
import { Typography } from '@/components/ui/Typography/Typography';
import Link from 'next/link';
import { GetCallModal } from '@/components/shared/GetCallModal/GetCallModal';

export const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-8">
        <Link href={'/'}>
          <Image src={'/img/logo.png'} alt={'Logo'} width={57} height={51} />
        </Link>
        <Typography
          className={'mb-0 text-4xl italic text-blue md:hidden'}
          variant={'h2'}
        >
          Biodent
        </Typography>
        <SocialList className={'hidden md:flex md:gap-4'} />
        <Navigation className={'hidden md:flex'} />
        <div className={'hidden items-center justify-center gap-5 xl:flex'}>
          <GoogleMapLink />
          <Calendar />
        </div>
        <Phone className={'hidden md:flex md:gap-2'} />
        <GetCallModal text={'Замовити дзвінок'} className="hidden"/>
        <MobileMenu />
      </div>
    </header>
  );
};
