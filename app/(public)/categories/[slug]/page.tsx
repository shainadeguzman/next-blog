import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";
import CardGrid from "@/components/ui/CardGrid";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;
  // console.log(slug);

  // fetch post information
  /* const post = await fetch(`https://api.vercel.app/blog/${slug}`).then((res) =>
    res.json(),
  ); */

  return {
    title: slug,
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
