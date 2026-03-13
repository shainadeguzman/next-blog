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
  const filter = params.filter;

  const isLatest = filter === "latest";

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
  const filter = (await searchParams).filter;
  const isLatest = filter === "latest";
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
      <CardGrid classes="mt-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </CardGrid>
    </section>
  );
}
