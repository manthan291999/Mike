import { education } from "@/data/portfolio";

export default function EducationList() {
  return (
    <section className="education-block" aria-label="Education">
      <h3>Education</h3>
      <ul>
        {education.map((item) => (
          <li key={`${item.institution}-${item.period}`}>
            <strong>{item.degree}</strong>
            <p className="muted">
              {item.institution} · {item.location}
            </p>
            <span>{item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
