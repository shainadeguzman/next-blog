import BlogCard from "@/components/ui/BlogCard";

export default function BlogPosts() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-sm font-medium text-gray-500">Fresh content</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-1">
            Latest Articles
          </h2>
        </div>
        <a
          href="categories.html"
          className="text-sm font-medium text-gray-700 hover:text-black"
        >
          Browse categories
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
