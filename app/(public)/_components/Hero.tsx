import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-gray-600">
            Built for modern frontend content
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            A clean modern blog platform for developers
          </h1>

          <p className="text-gray-600 mt-6 max-w-xl text-base leading-8">
            Read modern development articles about Next.js, React, UI design,
            frontend architecture, and developer productivity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Explore Blogs
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 bg-white px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <Image
            src="/images/hero.jpg"
            alt="Hero"
            width={1200}
            height={420}
            priority
            className="h-auto w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
