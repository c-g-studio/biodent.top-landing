import { Hero } from '@/components/shared/Hero/Hero';
import { Trust } from '@/components/shared/Trust/Trust';
import { Feedback } from '@/components/shared/Feedback/Feedback';
import { Services } from '@/components/shared/Services/Services';

export default async function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Feedback sectionFlag="first" />
      <Trust />
      <Feedback sectionFlag="second" />
    </main>
  );
}
