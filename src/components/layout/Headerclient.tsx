'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './Header.module.scss';

interface HeaderClientProps {
  logoText: string;
  phoneNumber: string;
}

const navLinks = [
  { href: '#work', label: 'Как работаем' },
  { href: '#guarantee', label: 'Гарантия' },
  { href: '#masters', label: 'Мастера' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#reviews', label: 'Отзывы' },
];

export default function HeaderClient({ logoText, phoneNumber }: HeaderClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={style.header}>
      <div className={style.wrap}>
        <div className={style.logo}>{logoText}</div>

        <nav className={style.nav}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={style.link}>
              {label}
            </a>
          ))}
        </nav>

        <div className={style.contact}>
          <p className={style.phone}>{phoneNumber}</p>
          <div className={style.socials}>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/telegram.svg" fill alt="Telegram" />
            </div>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/max.svg" fill alt="Max" />
            </div>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/whatsapp.svg" fill alt="WhatsApp" />
            </div>
          </div>
        </div>

        <button
          className={[style.burger, isOpen && style.burgerOpen].filter(Boolean).join(' ')}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
        >
          <span className={style.burgerLine} />
          <span className={style.burgerLine} />
          <span className={style.burgerLine} />
        </button>
      </div>

      <div
        className={[style.mobileMenu, isOpen && style.mobileMenuOpen].filter(Boolean).join(' ')}
        aria-hidden={!isOpen}
      >
        <nav className={style.mobileNav}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={style.mobileLink} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className={style.mobileContact}>
          <p className={style.phone}>{phoneNumber}</p>
          <div className={style.socials}>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/telegram.svg" fill alt="Telegram" />
            </div>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/max.svg" fill alt="Max" />
            </div>
            <div className={style.imageWrapper}>
              <Image className={style.image} src="/images/header/whatsapp.svg" fill alt="WhatsApp" />
            </div>
          </div>
        </div>
      </div>

      {isOpen && <div className={style.overlay} onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
}
