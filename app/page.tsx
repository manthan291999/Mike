import Certifications from "@/components/about/Certifications";
import EducationList from "@/components/about/EducationList";
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import ProfileCard from "@/components/about/ProfileCard";
import LaserFlow from "@/components/contact/LaserFlow";
import AsciiName from "@/components/hero/AsciiName";
import DecryptedRole from "@/components/hero/DecryptedRole";
import VariableTitle from "@/components/hero/VariableTitle";
import PillNav from "@/components/nav/PillNav";
import LetterGlitchBg from "@/components/projects/LetterGlitchBg";
import ProjectStack from "@/components/projects/ProjectStack";
import LogoLoop from "@/components/skills/LogoLoop";
import { profile, socialLinks } from "@/data/portfolio";

export default function Home() {
  const personLdJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: profile.location
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLdJson) }}
      />
      <main>
        <PillNav />

        <section id="home" className="section hero">
          <AsciiName />
          <DecryptedRole text={profile.role} />
          <VariableTitle text={profile.tagline} />
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="hero-actions">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="about-grid">
            <ProfileCard />
            <ExperienceTimeline />
            <EducationList />
            <Certifications />
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <p className="section-subtitle">Core technologies I use for intelligent systems and product delivery.</p>
          <LogoLoop />
        </section>

        <section id="projects" className="section projects-section">
          <LetterGlitchBg />
          <h2>Projects</h2>
          <p className="section-subtitle">Selected work across AI modeling, robotics, and automation.</p>
          <ProjectStack />
        </section>

        <section id="contact" className="section contact-section">
          <LaserFlow />
          <h2>Contact</h2>
          <p className="section-subtitle">Open to AI engineering, robotics, and full-stack collaborations.</p>
          <a href={`mailto:${profile.email}`} className="email-btn">
            Email Me
          </a>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
