'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function PillNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-borderDark/40 bg-bgDark/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-12">
        <span className="font-semibold text-neon">MM</span>
        <div className="hidden gap-2 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="pill-link text-textSecondary hover:scale-105 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon">
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-borderDark bg-bgLight p-4 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="mb-2 block pill-link bg-white/5 text-center text-white" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
