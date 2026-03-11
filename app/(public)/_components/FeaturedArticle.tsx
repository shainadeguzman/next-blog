import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <SectionHeader
        label="Editor's Pick"
        title="Featured Article"
        action={
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            See all blogs
          </Link>
        }
      />

      <div className="grid lg:grid-cols-2 gap-6 rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          alt="Article layout design"
          className="h-80 w-full rounded-2xl object-cover"
          width={1200}
          height={420}
        />

        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium text-gray-500">Frontend</span>

          <h3 className="text-3xl font-semibold mt-3">
            Building a modern blog UI with Tailwind
          </h3>

          <p className="text-gray-600 mt-4 max-w-2xl leading-8">
            Learn how to design clean, content-focused blog layouts using
            spacing, typography, hierarchy, and simple UI patterns that feel
            polished.
          </p>

          <Link
            href="/blog/test"
            className="mt-6 inline-flex w-fit items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Read Article
          </Link>
        </div>
      </div>
    </section>
  );
}
