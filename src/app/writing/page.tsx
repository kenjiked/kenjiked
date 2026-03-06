import Link from "next/link";
import Image from "next/image";
import articles from "../../../content/writing/index.json";

export const metadata = {
  title: "Writing - kenjiked",
};

type Article = {
  title: string;
  date: string;
  slug?: string;
  url?: string;
  image?: string;
};

function getPlatform(article: Article): { label: string; color: string } {
  if (!article.url) return { label: "Site", color: "bg-black" };
  if (article.url.includes("qiita.com")) return { label: "Qiita", color: "bg-[#55C500]" };
  if (article.url.includes("note.com")) return { label: "note", color: "bg-[#9b9b9b]" };
  return { label: "Link", color: "bg-[#9b9b9b]" };
}

export default function WritingPage() {
  const sorted = (articles as Article[]).sort((a, b) =>
    a.date > b.date ? -1 : 1
  );

  return (
    <div className="max-w-[680px] mx-auto px-6 py-16">
      <h1 className="text-lg font-light tracking-wide mb-12">Writing</h1>
      <ul className="space-y-10">
        {sorted.map((article, i) => {
          const href = article.url ?? `/writing/${article.slug}`;
          const isExternal = !!article.url;

          return (
            <li key={i}>
              <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group block"
              >
                {article.image && (
                  <div className="mb-3 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={680}
                      height={380}
                      className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2 text-sm font-light group-hover:opacity-50 transition-opacity">
                    <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${getPlatform(article).color}`} />
                    {article.title}
                  </span>
                  <span className="text-xs font-light text-gray-400 shrink-0">
                    {article.date}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
