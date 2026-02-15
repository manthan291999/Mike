import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="section-container">
      <h2 className="mb-8 text-4xl font-bold">About Me</h2>
      <article className="card mx-auto max-w-[400px] p-12 hover:-translate-y-1 hover:border-neon hover:shadow-neon">
        <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" alt="Manthan Mittal" width={120} height={120} className="mx-auto mb-6 h-[120px] w-[120px] rounded-full border-2 border-neon object-cover" />
        <h3 className="text-center text-2xl font-bold">Manthan Mittal</h3>
        <p className="mb-4 text-center text-neon">AI Engineer & Software Developer</p>
        <p className="text-sm leading-6 text-textSecondary">I specialize in ML systems, modern web architecture, and end-to-end product delivery from model design to scalable deployment.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#" aria-label="GitHub"><Github /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
        </div>
      </article>
    </section>
  );
}
