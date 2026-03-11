import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function LatestArticles() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <SectionHeader
        label="Fresh content"
        title="Latest Articles"
        action={
          <Link
            href="/categories"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Browse categories
          </Link>
        }
      />

      <div className="grid md:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
