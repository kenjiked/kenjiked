import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Writing - kenjiked",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-16">
      <h1 className="text-lg font-light tracking-wide mb-12">Writing</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="flex items-baseline justify-between gap-4 group"
            >
              <span className="text-sm font-light group-hover:opacity-50 transition-opacity">
                {post.title}
              </span>
              <span className="text-xs font-light text-gray-400 shrink-0">
                {post.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
