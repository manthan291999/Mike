const skills = ['React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PyTorch', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'];

export function SkillsSection() {
  const loop = [...skills, ...skills, ...skills];
  return (
    <section id="skills" className="section-container">
      <h2 className="mb-8 text-4xl font-bold">Skills</h2>
      <div className="overflow-hidden rounded-2xl border border-borderDark bg-bgLight py-6">
        <div className="flex w-max animate-marquee gap-12 px-12 hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <div key={`${s}-${i}`} className="group relative flex h-16 w-16 items-center justify-center rounded-xl border border-borderDark bg-bgDark text-xs text-textSecondary grayscale transition hover:scale-110 hover:text-neon hover:grayscale-0 md:h-20 md:w-20">
              {s.slice(0, 3).toUpperCase()}
              <span className="absolute -bottom-7 hidden whitespace-nowrap text-xs text-neon group-hover:block">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
