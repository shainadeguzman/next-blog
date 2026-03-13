import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";
import type { Metadata, ResolvingMetadata } from "next";
import { fetchCategoryPageData } from "@/lib/data/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const { category } = await fetchCategoryPageData(slug);

  const categoryName = category?.name ?? slug;

  return {
    title: `${categoryName} Articles`,
    description:
      "Explore tutorials, design notes, frontend ideas, and practical guides for modern web development.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { category, blogs } = await fetchCategoryPageData(slug);

  const categoryName = category?.name ?? slug;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label={categoryName}
        title={`${categoryName} Articles`}
        description="Explore tutorials, design notes, frontend ideas, and practical guides for modern web development."
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
