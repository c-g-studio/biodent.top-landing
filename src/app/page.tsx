import {Hero} from "@/components/shared/Hero/Hero";
import {Trust} from "@/components/shared/Trust/Trust";
import {Feedback} from "@/components/shared/Feedback/Feedback";


export default async function Home() {
  return <main>
    <Hero/>
    <Trust/>
    <Feedback sectionFlag="first"/>
    <Feedback sectionFlag="second"/>
  </main>
}
