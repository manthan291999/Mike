'use client';

import { useEffect, useState } from 'react';

const projects = [
  { title: 'RAG Knowledge Assistant', stack: ['Next.js', 'Python', 'LangChain'], desc: 'Enterprise search and Q&A over internal docs.' },
  { title: 'Vision Defect Detector', stack: ['PyTorch', 'FastAPI', 'Docker'], desc: 'Computer vision QA system for manufacturing.' },
  { title: 'AI Interview Copilot', stack: ['React', 'Node.js', 'OpenAI'], desc: 'Real-time interview coaching and structured feedback.' },
];

export function ProjectsSection() {
  const [bg, setBg] = useState('');
  useEffect(() => {
    const chars = '01ABCDEF<>[]{}#*';
    const tick = () =>
      Array.from({ length: 120 })
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('');
    setBg(tick());
    const t = setInterval(() => setBg(tick()), 100);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      <p className="pointer-events-none absolute inset-0 -z-10 whitespace-pre-wrap break-all font-mono text-[10px] leading-3 text-neon/10">{bg.repeat(20)}</p>
      <h2 className="mb-8 text-4xl font-bold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article key={p.title} className="card aspect-[16/10] p-8 transition hover:z-10 hover:scale-105 hover:rotate-0 hover:border-neon hover:shadow-neon" style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <div className="my-3 flex flex-wrap gap-2">
              {p.stack.map((t) => <span key={t} className="rounded-full border border-borderDark px-3 py-1 text-xs text-textSecondary">{t}</span>)}
            </div>
            <p className="text-sm text-textSecondary">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
