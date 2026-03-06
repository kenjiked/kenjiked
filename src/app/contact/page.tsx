import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - kenjiked",
};

const links = [
  { label: "Mail", href: "mailto:kenjiked.0@icloud.com" },
  { label: "Instagram", href: "https://www.instagram.com/kenjiked/" },
  { label: "X", href: "https://x.com/kenjiked_" },
  { label: "Scrapbox", href: "https://scrapbox.io/kenjiked/" },
  { label: "GitHub", href: "https://github.com/kenjiked" },
];

export default function ContactPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-16">
      <h1 className="text-lg font-light tracking-wide mb-12">Contact</h1>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-sm font-light underline underline-offset-4 hover:opacity-50 transition-opacity"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
