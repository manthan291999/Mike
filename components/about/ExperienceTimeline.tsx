import { experience } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <section className="timeline-block" aria-label="Experience timeline">
      <h3>Experience</h3>
      <ol className="timeline-list">
        {experience.map((item) => (
          <li key={`${item.org}-${item.period}`}>
            <div className="timeline-head">
              <h4>{item.title}</h4>
              <span>{item.period}</span>
            </div>
            <p className="muted">
              {item.org} · {item.location}
            </p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
