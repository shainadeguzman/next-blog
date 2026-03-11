import Link from "next/link";

export default function BlogCard() {
  return (
    <Link
      href={`/categories/nextjs`}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:-translate-y-1 transition"
    >
      <h2 className="text-xl font-semibold">Next.js</h2>
      <p className="text-gray-600 mt-3 text-sm leading-7">
        Routing, layouts, rendering, and production-ready app patterns.
      </p>
    </Link>
  );
}
