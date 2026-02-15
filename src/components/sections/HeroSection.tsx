'use client';

import gsap from 'gsap';
import { useEffect, useMemo, useState } from 'react';

const role = 'AI Engineer & Software Developer';

export function HeroSection() {
  const [decryptText, setDecryptText] = useState('');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    gsap.fromTo('#ascii-name', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.2 });
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      const progress = Math.min(role.length, Math.floor(frame / 2));
      const next = role
        .split('')
        .map((ch, i) => (i < progress ? ch : chars[Math.floor(Math.random() * chars.length)]))
        .join('');
      setDecryptText(next);
      if (progress >= role.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const descClass = useMemo(
    () => (hovered ? 'scale-[1.08] opacity-100 blur-0' : 'scale-100 opacity-80 blur-[0.4px]'),
    [hovered],
  );

  return (
    <section id="home" className="section-container flex min-h-screen flex-col items-center justify-center text-center">
      <pre id="ascii-name" className="font-mono text-3xl font-black leading-none tracking-[-2px] text-white drop-shadow-[0_0_30px_rgba(0,255,136,0.3)] md:text-7xl">{`MANTHAN\nMITTAL`}</pre>
      <h1 className="mt-6 text-xl font-semibold text-neon md:text-3xl">{decryptText}</h1>
      <p
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`mt-8 max-w-[600px] text-base text-textSecondary transition-all duration-200 md:text-lg ${descClass}`}
      >
        I build production-ready AI products and robust full-stack platforms with a strong focus on performance, UX, and measurable business impact.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#projects" className="rounded-lg bg-neon px-8 py-4 font-semibold text-bgDark">View Projects</a>
        <a href="#contact" className="rounded-lg border-2 border-neon px-8 py-4 font-semibold text-neon">Contact Me</a>
      </div>
    </section>
  );
}
