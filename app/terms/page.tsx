import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-gray-600 hover:text-black">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-4">Terms of Service</h1>

      <p className="text-gray-600 mt-6 leading-8">
        By accessing and using NextBlog, you agree to follow these terms and
        conditions. These terms exist to ensure a safe and respectful experience
        for all visitors.
      </p>

      <h2 className="text-xl font-semibold mt-10">Use of Content</h2>
      <p className="text-gray-600 mt-4 leading-8">
        All articles and content published on NextBlog are intended for
        educational and informational purposes. You may reference or share
        content with proper attribution.
      </p>

      <h2 className="text-xl font-semibold mt-10">User Responsibility</h2>
      <p className="text-gray-600 mt-4 leading-8">
        Users agree to use this website responsibly and not engage in activities
        that may harm the site, its content, or other users.
      </p>

      <h2 className="text-xl font-semibold mt-10">External Links</h2>
      <p className="text-gray-600 mt-4 leading-8">
        This website may contain links to external resources. We are not
        responsible for the content or privacy practices of external websites.
      </p>

      <h2 className="text-xl font-semibold mt-10">Changes to the Terms</h2>
      <p className="text-gray-600 mt-4 leading-8">
        These terms may be updated periodically. Continued use of the website
        means you accept any updates to the terms.
      </p>
    </section>
  );
}
