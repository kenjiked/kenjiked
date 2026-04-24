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
          src="/images/profile.JPG"
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
          2002年、東京生まれ。2023年にLiberal Vision株式会社を設立。
        </p>
        <p>
          飲食店の経営に携わりながら、ポスト量子暗号 (Rust/UEFI実装)、四足歩行ロボット × 自律巡回ドローン (Nomad Dock)、屋内点検ソリューション、ドローン空撮の領域を並行して動かしている。
        </p>
      </div>
    </div>
  );
}
