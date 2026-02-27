import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <>
      <section id="hero" className="py-20 text-center">
        <h1 className="text-5xl font-extrabold">Лучший проект на Next.js 15</h1>
        <p className="mt-4 text-gray-600">Работает в связке с Payload CMS</p>
      </section>

      <Hero />
    </>
  );
}
