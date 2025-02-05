import { Calendar } from '@/components/layout/Header/Calendar/Calendar';
import { GoogleMapLink } from '@/components/layout/Header/GoogleMapLink/GoogleMapLink';
import { MobileMenu } from '@/components/layout/Header/MobileMenu/MobileMenu';
import { Navigation } from '@/components/layout/Header/Navigation/Navigation';
import { Phone } from '@/components/layout/Header/Phone/Phone';
import { GetCallModal } from '@/components/shared/GetCallModal/GetCallModal';
import { SocialList } from '@/components/shared/SocialList/SocialList';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-6 md:py-8">
        <Link href={'/'}>
          <Image src={'/img/logo.png'} alt={'Logo'} width={57} height={51} />
        </Link>
        <Image
          src={'/img/logo.svg'}
          alt={'Logo'}
          width={130}
          height={51}
          className="md:hidden"
        />
        <SocialList className={'hidden md:flex md:gap-4'} />
        <Navigation className={'hidden md:flex'} />
        <div className={'hidden items-center justify-center gap-5 xl:flex'}>
          <GoogleMapLink />
          <Calendar />
        </div>
        <Phone className={'hidden md:flex md:gap-2'} />
        <GetCallModal text={'Замовити дзвінок'} className="hidden" />
        <MobileMenu />
      </div>
    </header>
  );
};
