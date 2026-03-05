'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './Header.module.scss';

interface HeaderClientProps {
  logoText?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
}

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#work', label: 'Как мы работаем' },
  { href: '#guarantee', label: 'Гарантия' },
  { href: '#about', label: 'О нас' },
];

export default function HeaderClient({ logoText, phoneNumber, email }: HeaderClientProps) {
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
        <div className={style.logoGroup}>
          <div className={style.logoImage}>
            <Image className={style.logo} src="/logo.png" fill alt="logo" />
          </div>
          <div className={style.logoText}>{logoText ?? ''}</div>
        </div>

        <nav className={style.nav}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={style.link}>
              {label}
            </a>
          ))}
        </nav>

        <div className={style.contact}>
          <div className={style.group}>
            <p className={style.phone}>{phoneNumber ?? ''}</p>
            <p className={style.email}>{email ?? ''}</p>
          </div>
          <div className={style.socials}>
            <a href="https://t.me/FKazihanov" target="_blank" rel="noopener noreferrer">
              <div className={style.imageWrapper}>
                <Image className={style.image} src="/images/header/telegram.svg" fill alt="Telegram" />
              </div>
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOK3ikbD82tqMrG53hYtLWmkRoj_LTWDdC-IRBQGspjQ3sw-nFo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={style.imageWrapper}>
                <Image className={style.image} src="/images/header/max.svg" fill alt="Max" />
              </div>
            </a>
            <a href="https://wa.me/79998337970" target="_blank" rel="noopener noreferrer">
              <div className={style.imageWrapper}>
                <Image className={style.image} src="/images/header/whatsapp.svg" fill alt="WhatsApp" />
              </div>
            </a>
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
          <p className={style.phone}>{phoneNumber ?? ''}</p>
          <p className={style.email}>{email ?? ''}</p>
          <div className={style.socials}>
            <a href="https://t.me/FKazihanov" target="_blank" rel="noopener noreferrer">
              <div className={style.imageWrapper}>
                <Image className={style.image} src="/images/header/telegram.svg" fill alt="Telegram" />
              </div>
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOK3ikbD82tqMrG53hYtLWmkRoj_LTWDdC-IRBQGspjQ3sw-nFo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={style.imageWrapper}>
                <Image className={style.image} src="/images/header/max.svg" fill alt="Max" />
              </div>
            </a>
            <a href="https://wa.me/79998337970" target="_blank" rel="noopener noreferrer">
              <div className={style.imageWrapper}>
                <Image className={style.image} src="/images/header/whatsapp.svg" fill alt="WhatsApp" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {isOpen && <div className={style.overlay} onClick={closeMenu} aria-hidden="true" />}
    </header>
  );
}
