import { getAllPosts, getPost } from "@/lib/mdx";
import { MDXRemote } from "@/components/mdx-remote";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const { meta } = getPost(params.slug);
  return {
    title: `${meta.title} - kenjiked`,
    openGraph: {
      title: meta.title,
      type: "article",
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { meta, content } = getPost(params.slug);

  return (
    <article className="max-w-[680px] mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-xl font-light tracking-wide">{meta.title}</h1>
        <time className="text-xs font-light text-gray-400 mt-2 block">
          {meta.date}
        </time>
      </header>
      <div className="prose prose-sm prose-neutral max-w-none font-light leading-relaxed">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
