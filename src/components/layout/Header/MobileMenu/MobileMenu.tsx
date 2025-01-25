'use client';

import { useEffect, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseLargeLine } from 'react-icons/ri';
import { Navigation } from '@/components/layout/Header/Navigation/Navigation';
import { SocialList } from '@/components/shared/SocialList/SocialList';
import { Phone } from '@/components/layout/Header/Phone/Phone';
// import { GetCallModal } from '@/components/shared/GetCallModal/GetCallModal';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpenMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
    }

    return () => {
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={toggleOpenMobileMenu} className={'z-40 md:hidden'}>
        {isOpen ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
      </button>
      <nav
        className={`fixed right-0 top-[121px] z-30 h-full w-full ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col gap-6 bg-blue-extra-dark p-4 transition-transform md:hidden`}
      >
        <Navigation className={'flex flex-col gap-2'} setIsOpen={setIsOpen} />
        <SocialList className={'flex gap-2'} />
        <Phone className={'flex text-grey-light'} />
        {/*<GetCallModal text={'Замовити дзвінок'} className={'block'} />*/}
      </nav>
    </>
  );
};
//
// ('use client');
//
// import { useState, useEffect } from 'react';
//
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { RiCloseLargeLine } from 'react-icons/ri';
// import { Navigation } from '@/components/layout/Header/Navigation/Navigation';
//
// export const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//
//   const toggleOpenMobileMenu = () => {
//     setIsOpen(!isOpen);
//   };
//
//   useEffect(() => {
//     // Блокировка скролла при открытии меню
//     if (isOpen) {
//       document.body.classList.add('overflow-hidden');
//     } else {
//       document.body.classList.remove('overflow-hidden');
//     }
//
//     // Сброс состояния при размонтировании
//     return () => {
//       document.body.classList.remove('overflow-hidden');
//     };
//   }, [isOpen]);
//
//   return (
//     <>
//       <button onClick={toggleOpenMobileMenu} className={'z-10 md:hidden'}>
//         {isOpen ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
//       </button>
//       <nav
//         className={`fixed right-0 top-0 z-30 h-full w-full ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } bg-blue-extra-dark p-4 transition-transform md:hidden`}
//       >
//         <Navigation className={'visible flex flex-col gap-2'} />
//       </nav>
//     </>
//   );
// };
