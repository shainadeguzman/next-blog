import CardGrid from "@/components/ui/CardGrid";
import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse blog categories including Next.js, React, CSS, and other topics in modern web development.",
};

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label="Categories"
        title="Browse by Topic"
        description="Choose a category and explore articles based on your current learning focus."
        size="lg"
      />
      <CardGrid classes="mt-12">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </CardGrid>
    </section>
  );
}
