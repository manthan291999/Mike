import { projects } from "@/data/portfolio";

export default function ProjectStack() {
  return (
    <div className="project-stack">
      {projects.map((project, index) => (
        <article key={project.title} className="project-card" style={{ top: `${index * 20}px` }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            ) : (
              <span className="chip-muted">Demo on request</span>
            )}
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : (
              <span className="chip-muted">Code on request</span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
