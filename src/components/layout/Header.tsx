import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold text-blue-600">MyBrand</div>

        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="hover:text-blue-500 transition">
            Преимущества
          </Link>
          <Link href="#about" className="hover:text-blue-500 transition">
            О нас
          </Link>
          <Link href="#contact" className="hover:text-blue-500 transition">
            Контакты
          </Link>
        </nav>

        <button className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">Связаться</button>
      </div>
    </header>
  );
}
