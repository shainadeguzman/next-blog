import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";
import Link from "next/link";
import { fetchLatestBlogs } from "@/lib/data/blogs";

export default async function LatestArticles() {
  const latestBlogs = await fetchLatestBlogs();

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <SectionHeader label="Fresh content" title="Latest Blogs" />

      <CardGrid>
        {latestBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </CardGrid>
    </section>
  );
}
