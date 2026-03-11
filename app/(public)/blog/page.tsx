import BlogCard from "@/components/ui/BlogCard";

export default function page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-gray-500">Blog</p>
        <h1 className="text-4xl font-bold mt-2">Latest Articles</h1>
        <p className="text-gray-600 mt-4 leading-8">
          Explore tutorials, design notes, frontend ideas, and practical guides
          for modern web development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
