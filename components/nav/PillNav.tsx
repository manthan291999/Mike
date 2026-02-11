import { navItems } from "@/data/portfolio";

export default function PillNav() {
  return (
    <nav className="pill-nav" aria-label="Main">
      {navItems.map((item) => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
