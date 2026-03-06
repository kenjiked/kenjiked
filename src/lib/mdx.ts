import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingDir = path.join(process.cwd(), "content/writing");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(writingDir).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(writingDir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string) {
  const filePath = path.join(writingDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
    },
    content,
  };
}
