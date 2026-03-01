import Guarantee from '@/components/sections/Guarantee';
import Hero from '@/components/sections/Hero';
import Reliability from '@/components/sections/Reliability';
import Services from '@/components/sections/Services';
import Workflow from '@/components/sections/Workflow';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Workflow />
      <Guarantee />
      <Reliability />
    </>
  );
}
