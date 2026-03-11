import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";
import Link from "next/link";

export default function LatestArticles() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <SectionHeader
        label="Fresh content"
        title="Latest Articles"
        action={
          <Link
            href="/blog?filter=latest"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            See all latest posts
          </Link>
        }
      />

      <CardGrid>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </CardGrid>
    </section>
  );
}
