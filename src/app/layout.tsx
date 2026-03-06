import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "kenjiked",
  description: "Portfolio of kenjiked",
  openGraph: {
    title: "kenjiked",
    description: "Portfolio of kenjiked",
    type: "website",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "kenjiked",
    description: "Portfolio of kenjiked",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased bg-white text-[#111111]`}
        style={{ fontFamily: "var(--font-inter), var(--font-noto), sans-serif" }}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
          <nav className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="kenjiked"
                width={120}
                height={63}
                className="h-8 w-auto invert"
                priority
              />
            </Link>
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-sm font-light tracking-wide hover:opacity-50 transition-opacity"
              >
                Photos
              </Link>
              <Link
                href="/writing"
                className="text-sm font-light tracking-wide hover:opacity-50 transition-opacity"
              >
                Writing
              </Link>
              <Link
                href="/about"
                className="text-sm font-light tracking-wide hover:opacity-50 transition-opacity"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-light tracking-wide hover:opacity-50 transition-opacity"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
