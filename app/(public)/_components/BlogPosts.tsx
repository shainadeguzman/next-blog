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
        <article className="bg-white border rounded-2xl p-6 shadow-sm">
          <span className="text-xs font-medium text-gray-500">Next.js</span>
          <h3 className="font-semibold text-lg mt-2">
            Understanding App Router
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-7">
            Learn how the Next.js App Router works and how layouts improve
            application structure.
          </p>
          <a
            href="article-app-router.html"
            className="mt-5 inline-block text-sm font-medium text-black hover:underline"
          >
            Read more →
          </a>
        </article>

        <article className="bg-white border rounded-2xl p-6 shadow-sm">
          <span className="text-xs font-medium text-gray-500">Design</span>
          <h3 className="font-semibold text-lg mt-2">Dashboard UI Patterns</h3>
          <p className="text-gray-600 text-sm mt-3 leading-7">
            A guide to building clean, scalable, and consistent dashboard
            interfaces.
          </p>
          <a
            href="article-tailwind-ui.html"
            className="mt-5 inline-block text-sm font-medium text-black hover:underline"
          >
            Read more →
          </a>
        </article>

        <article className="bg-white border rounded-2xl p-6 shadow-sm">
          <span className="text-xs font-medium text-gray-500">Frontend</span>
          <h3 className="font-semibold text-lg mt-2">Component Driven UI</h3>
          <p className="text-gray-600 text-sm mt-3 leading-7">
            Build scalable UI systems using reusable components and consistent
            structure.
          </p>
          <a
            href="article-component-ui.html"
            className="mt-5 inline-block text-sm font-medium text-black hover:underline"
          >
            Read more →
          </a>
        </article>
      </div>
    </section>
  );
}
