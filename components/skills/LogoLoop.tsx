import { skillGroups } from "@/data/portfolio";

export default function LogoLoop() {
  return (
    <div className="logo-loop-wrap">
      {skillGroups.map((group) => (
        <section key={group.category} className="skill-group">
          <h3>{group.category}</h3>
          <div className="logo-loop" role="list" aria-label={group.category}>
            {[...group.items, ...group.items].map((item, index) => (
              <span key={`${item}-${index}`} role="listitem">
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
