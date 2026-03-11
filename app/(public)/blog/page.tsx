import BlogCard from "@/components/ui/BlogCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label="Blog"
        title="Latest Articles"
        description="Explore tutorials, design notes, frontend ideas, and practical guides for modern web development."
        size="lg"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
