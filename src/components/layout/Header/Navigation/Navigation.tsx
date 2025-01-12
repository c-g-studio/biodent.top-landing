import { mockNavigationData } from '@/components/layout/Header/Navigation/mockNavigationData';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <ul className={'text-grey-light flex gap-9 font-roboto'}>
      {mockNavigationData.map((item: any) => (
        <li key={item.id} className={'hover:text-blue transition-all'}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
