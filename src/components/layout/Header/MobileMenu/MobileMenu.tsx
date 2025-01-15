'use client';

import { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeLine } from 'react-icons/ri';
import { Navigation } from '@/components/layout/Header/Navigation/Navigation';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpenMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleOpenMobileMenu} className={'z-10 md:hidden'}>
        {isOpen ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
      </button>
      <nav
        className={`absolute right-0 top-[121px] h-full w-full ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-blue-extra-dark p-4 transition-all md:hidden`}
      >
        <Navigation className={'visible flex flex-col gap-2'} />
      </nav>
    </>
  );
};
