import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - kenjiked",
};

export default function AboutPage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 py-16">
      <h1 className="text-lg font-light tracking-wide mb-12">About</h1>
      <div className="mb-10">
        <Image
          src="/images/profile.jpg"
          alt="kenjiked"
          width={680}
          height={450}
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-4 text-sm font-light leading-relaxed text-gray-700">
        <p>
          池田 憲史
        </p>
        <p>
          2002年 東京杉並区生まれ
        </p>
        <p>
          Liberal Vision株式会社 代表。飲食経営とLatticeベースのPQC署名を研究中。
        </p>
      </div>
    </div>
  );
}
