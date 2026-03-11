import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-gray-600 hover:text-black">
        &larr; Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-4">Privacy Policy</h1>

      <p className="text-gray-600 mt-6 leading-8">
        At Next Blog, your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your information when you
        visit and interact with our website.
      </p>

      <h2 className="text-xl font-semibold mt-10">Information We Collect</h2>
      <p className="text-gray-600 mt-4 leading-8">
        We may collect limited information such as browser type, device
        information, and pages visited to help us understand how visitors use
        the website and improve the reading experience.
      </p>

      <h2 className="text-xl font-semibold mt-10">How We Use Information</h2>
      <p className="text-gray-600 mt-4 leading-8">
        Any information collected is used solely for improving site performance,
        analyzing traffic trends, and enhancing the quality of the content we
        provide.
      </p>

      <h2 className="text-xl font-semibold mt-10">Third-Party Services</h2>
      <p className="text-gray-600 mt-4 leading-8">
        We may use third-party tools such as analytics services to understand
        how visitors interact with the website. These services may collect
        anonymous usage data according to their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-10">Changes to This Policy</h2>
      <p className="text-gray-600 mt-4 leading-8">
        This privacy policy may be updated from time to time. Any changes will
        be reflected on this page.
      </p>
    </section>
  );
}
