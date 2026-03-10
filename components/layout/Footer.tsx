import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© 2026 NextBlog</p>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-black">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-black">
            Terms
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
