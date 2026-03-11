import CategoryCard from "@/components/ui/CategoryCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label="Categories"
        title="Browse by Topic"
        description="Choose a category and explore articles based on your current learning focus."
        size="lg"
      />
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
}
