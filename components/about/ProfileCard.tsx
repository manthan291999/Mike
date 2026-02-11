import { profile, socialLinks } from "@/data/portfolio";

export default function ProfileCard() {
  return (
    <article className="profile-card" aria-label="Profile overview">
      <header className="profile-head">
        <div className="avatar" aria-hidden>
          MM
        </div>
        <div>
          <h3>{profile.name}</h3>
          <p className="muted">{profile.role}</p>
          <p className="muted">{profile.location}</p>
        </div>
      </header>

      <p>{profile.bio}</p>

      <ul className="stats">
        {profile.quickStats.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>

      <div className="profile-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={`tel:${profile.phone}`}>Call</a>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
