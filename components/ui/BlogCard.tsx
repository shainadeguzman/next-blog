import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <span className="text-xs font-medium text-gray-500">{blog.category}</span>
      <h3 className="font-semibold text-lg mt-2">{blog.title}</h3>
      <p className="text-gray-600 text-sm mt-3 leading-7 line-clamp-2">
        {blog.excerpt}
      </p>
      <Link
        href={`/blog/${blog.slug}`}
        scroll={true}
        className="mt-5 inline-block text-sm font-medium text-black hover:underline"
      >
        Read more &rarr;
      </Link>
    </article>
  );
}
