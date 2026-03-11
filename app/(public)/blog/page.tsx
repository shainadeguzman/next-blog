import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filter = (await searchParams).filter;
  const isLatest = filter === "latest";
  const title = isLatest ? "Latest Articles" : "All Articles";
  const description = isLatest
    ? "Discover the latest tutorials, design notes, frontend ideas, and practical guides for modern web development."
    : "Explore tutorials, design notes, frontend ideas, and practical guides for modern web development.";

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label="Articles"
        title={title}
        description={description}
        size="lg"
      />
      <CardGrid classes="mt-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </CardGrid>
    </section>
  );
}
