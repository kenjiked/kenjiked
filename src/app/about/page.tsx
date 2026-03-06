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
          ここに自己紹介を書いてください。1〜2段落程度のシンプルな文章が入ります。
        </p>
        <p>
          写真や文章を通じて、日常の風景や旅先で出会った場面を記録しています。
        </p>
      </div>
    </div>
  );
}
