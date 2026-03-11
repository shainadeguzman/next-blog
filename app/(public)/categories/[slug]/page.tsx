import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label={`${slug}`}
        title={`${slug} Articles`}
        description="Explore tutorials, design notes, frontend ideas, and practical guides for modern web development."
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
