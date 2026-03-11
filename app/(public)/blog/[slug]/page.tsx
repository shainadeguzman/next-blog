import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Blog
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <p className="text-sm font-medium text-gray-500">Frontend</p>
        <h1 className="text-4xl font-bold mt-2">
          Building a modern blog UI with Tailwind
        </h1>
        <p className="text-gray-500 mt-3">January 12, 2026 • 6 min read</p>

        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
          alt="Modern blog UI"
          className="w-full `h-95 object-cover rounded-3xl mt-8"
          width={1200}
          height={420}
        />

        <article className="prose prose-gray max-w-none mt-10 leading-8 text-gray-700">
          <p>
            A clean blog layout starts with spacing, typography, and content
            hierarchy. Tailwind makes it easier to build simple but polished
            interfaces using utility classNamees.
          </p>
          <p>
            Focus on readable line lengths, generous white space, and consistent
            spacing between sections. Use cards only when needed and avoid
            unnecessary decoration.
          </p>
          <p>
            Good blog UI is not about adding more effects. It is about removing
            distractions and making the content easier to scan.
          </p>
        </article>
      </div>
    </section>
  );
}
