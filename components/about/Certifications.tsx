import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section className="cert-block" aria-label="Certifications">
      <h3>Certifications</h3>
      <ul>
        {certifications.map((certification) => (
          <li key={certification}>{certification}</li>
        ))}
      </ul>
    </section>
  );
}
