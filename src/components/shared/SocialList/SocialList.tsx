import { mockSocialsData } from '@/components/shared/SocialList/mockSocialsData';
import Image from 'next/image';
import Link from 'next/link';

export const SocialList = () => {
  return (
    <ul className={'flex gap-4'}>
      {mockSocialsData.map(item => (
        <li key={item.id}>
          <Link href={item.link} target={'_blank'}>
            <Image
              src={item.icon}
              alt={item.alt}
              width={20}
              height={20}
              className={'fill-blue-extra-light'}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
