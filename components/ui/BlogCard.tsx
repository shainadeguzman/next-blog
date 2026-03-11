import Link from "next/link";

export default function BlogCard() {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <span className="text-xs font-medium text-gray-500">Next.js</span>
      <h3 className="font-semibold text-lg mt-2">Understanding App Router</h3>
      <p className="text-gray-600 text-sm mt-3 leading-7">
        Learn how the Next.js App Router works and how layouts improve
        application structure.
      </p>
      <Link
        href="/blog/test"
        className="mt-5 inline-block text-sm font-medium text-black hover:underline"
      >
        Read more &rarr;
      </Link>
    </article>
  );
}
