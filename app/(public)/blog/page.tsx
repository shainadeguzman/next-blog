import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";
import type { Metadata } from "next";
import { fetchBlogs } from "@/lib/data/blogs";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const sort = params.sort;

  const isLatest = sort === "latest";

  return {
    title: isLatest ? "Latest Blogs" : "Blog",
    description: isLatest
      ? "Discover the latest tutorials, design notes, frontend ideas, and practical guides for modern web development."
      : "Explore tutorials, design notes, frontend ideas, and practical guides for modern web development.",
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sort = (await searchParams).sort;
  const isLatest = sort === "latest";
  const title = isLatest ? "Latest Blogs" : "All Blogs";
  const description = isLatest
    ? "Discover the latest tutorials, design notes, frontend ideas, and practical guides for modern web development."
    : "Explore tutorials, design notes, frontend ideas, and practical guides for modern web development.";

  const blogs = await fetchBlogs();
  console.log(blogs);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label="Blog"
        title={title}
        description={description}
        size="lg"
      />

      <div className="mt-10 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <label htmlFor="category" className="text-sm text-gray-500">
            Category
          </label>
          <select
            id="category"
            className="min-w-55 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="all">All Categories</option>
            <option value="nextjs">Next.js</option>
            <option value="react">React</option>
            <option value="frontend-architecture">Frontend Architecture</option>
            <option value="ui-design">UI Design</option>
            <option value="developer-productivity">
              Developer Productivity
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <label htmlFor="sort" className="text-sm text-gray-500">
            Sort by
          </label>
          <select
            id="sort"
            className="min-w-45 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <CardGrid classes="mt-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </CardGrid>
    </section>
  );
}
