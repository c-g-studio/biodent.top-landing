import { Hero } from '@/components/shared/Hero/Hero';
import { Trust } from '@/components/shared/Trust/Trust';
import { Feedback } from '@/components/shared/Feedback/Feedback';
import { Header } from '@/components/layout/Header/Header';

export default async function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Feedback sectionFlag="first" />
      <Trust />
      <Feedback sectionFlag="second" />
    </main>
  );
}
