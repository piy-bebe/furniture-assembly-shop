import Feedback from '@/components/sections/Feedback';
import Footer from '@/components/sections/Footer';
import Guarantee from '@/components/sections/Guarantee';
import Hero from '@/components/sections/Hero';
import Reliability from '@/components/sections/Reliability';
import Services from '@/components/sections/Services';
import Tools from '@/components/sections/Tools';
import Workflow from '@/components/sections/Workflow';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Workflow />
      <Guarantee />
      <Reliability />
      <Tools />
      <Feedback />
      <Footer />
    </>
  );
}
