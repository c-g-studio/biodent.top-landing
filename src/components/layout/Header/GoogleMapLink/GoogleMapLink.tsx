import Image from 'next/image';
import Link from 'next/link';

export const GoogleMapLink = () => {
  return (
    <Link
      href={
        'https://www.google.com/maps/place/%D0%91%D1%96%D0%BE%D0%B4%D0%B5%D0%BD%D1%82/@49.0929631,33.4270437,17z/data=!4m14!1m7!3m6!1s0x40d7536126a8f91f:0x62a3bcc4ea364e11!2z0JHRltC-0LTQtdC90YI!8m2!3d49.0929631!4d33.4296186!16s%2Fg%2F11n0vw963w!3m5!1s0x40d7536126a8f91f:0x62a3bcc4ea364e11!8m2!3d49.0929631!4d33.4296186!16s%2Fg%2F11n0vw963w?hl=uk-UA&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D'
      }
      className={'flex gap-2'}
      target="_blank"
    >
      <Image
        src={'/img/icons/social_icons/google_map.svg'}
        alt="google map icon"
        width={20}
        height={20}
      />
      <p className={'font-arial text-grey-dark hover:text-blue transition-all'}>
        проспект Свободи, 61/17
      </p>
    </Link>
  );
};
