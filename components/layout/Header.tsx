"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Next <span className="text-gray-900">Blog</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className={`text-black font-medium ${pathname === "/" ? "text-black font-medium" : "text-gray-500 hover:text-black transition"}`}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={`text-black font-medium ${pathname.startsWith("/blog") ? "text-black font-medium" : "text-gray-500 hover:text-black transition"}`}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={`text-black font-medium ${pathname === "/about" ? "text-black font-medium" : "text-gray-500 hover:text-black transition"}`}
          >
            About
          </Link>
        </nav>

        <Link
          href="/blog"
          className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Start Reading
        </Link>
      </div>
    </header>
  );
}
