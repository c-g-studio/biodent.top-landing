import Image from 'next/image';
import { SocialList } from '@/components/shared/SocialList/SocialList';
import { Navigation } from '@/components/layout/Header/Navigation/Navigation';
import { GoogleMapLink } from '@/components/layout/Header/GoogleMapLink/GoogleMapLink';
import { Calendar } from '@/components/layout/Header/Calendar/Calendar';
import { Phone } from '@/components/layout/Header/Phone/Phone';
import { Button } from '@/components/shared/Button/Button';

export const Header = () => {
  return (
    <header className="">
      <div className="container flex items-center justify-between py-8">
        <Image src={'/img/logo.png'} alt={'Logo'} width={57} height={51} />
        <SocialList />
        <Navigation />
        <GoogleMapLink />
        <Calendar />
        <Phone />
        <Button>Замовити дзвінок</Button>
      </div>
    </header>
  );
};
