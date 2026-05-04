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
      <div className="space-y-5 text-sm font-light leading-relaxed text-gray-700">
        <p>池田 憲史</p>
        <p>2002年、東京生まれ。</p>
        <p>
          2023年に Liberal Vision 株式会社を設立。飲食店の経営を事業の地面として、そこで得た視点と資金を、未来の技術領域へ投資し続けている。
        </p>
        <p>
          飲食店経営に携わりながら、ポスト量子暗号 (Rust/UEFI 実装)、四足歩行ロボット × 自律巡回ドローン (Nomad Dock)、屋内点検ソリューション、ドローン空撮を並行して動かしている。
        </p>

        <hr className="my-8 border-gray-200" />

        <p>中心にあるのは3つ。</p>
        <p>
          <span className="font-normal text-gray-900">経営自動化</span>
          ：飲食店の経理 (gmo-manager)、コールセンター SaaS (callcenter-system)、不動産営業リスト自動収集など、ローカルビジネスの効率化を主軸に。
        </p>
        <p>
          <span className="font-normal text-gray-900">Nomad Dock</span>
          ：Unitree Go2 と自律ドローンを組み合わせた屋内点検システム。ROS 2 / Nav2 を用いた四足ロボットの自律移動 PoC 開発を 4 人チームで推進 (go2_nav2、MuJoCo 上でシミュレーション)。
        </p>
        <p>
          <span className="font-normal text-gray-900">ポスト量子暗号</span>
          ：次世代暗号方式の UEFI 実装 (rust-uefi-pqc)。量子コンピュータ時代の通信基盤を、誰かが先に作っておく必要がある。
        </p>
        <p>
          並行して、ドローン空撮によるショートフィルム、Obsidian を核とした自己知識ベース、AI エージェントによる日次ニュース集約 (news-digest) を継続している。
        </p>
        <p>
          散らばっているように見えて、問いは一つ。「人間が今後 10 年でやらなくてよくなる仕事は何か」。ローカルビジネスの泥臭さと先端技術の抽象度を同じ人間が持っておくと、情報のハブになれる。その確信だけで動いている。
        </p>
        <p>2026 年 4 月、結婚。仕事は妻と並走する形になった。</p>
        <p className="pt-4 text-xs text-gray-500">
          東京・渋谷 / Liberal Vision Co., Ltd.
        </p>
      </div>
    </div>
  );
}
