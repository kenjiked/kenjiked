import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - kenjiked",
};

export default function ContactPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-16">
      <h1 className="text-lg font-light tracking-wide mb-12">Contact</h1>
      <p className="text-sm font-light">
        <a
          href="mailto:your-email@example.com"
          className="underline underline-offset-4 hover:opacity-50 transition-opacity"
        >
          your-email@example.com
        </a>
      </p>
    </div>
  );
}
