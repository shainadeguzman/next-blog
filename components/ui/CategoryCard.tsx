import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
};

export default function BlogCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:-translate-y-1 transition"
    >
      <h2 className="text-xl font-semibold">{category.name}</h2>
      <p className="text-gray-600 mt-3 text-sm leading-7">
        Routing, layouts, rendering, and production-ready app patterns.
      </p>
    </Link>
  );
}
