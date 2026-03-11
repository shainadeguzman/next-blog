export default function NewsLetter() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold">Subscribe to our newsletter</h2>
        <p className="text-gray-600 mt-3">
          Get new articles, ideas, and frontend notes directly in your inbox.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <input
            className="border px-4 py-3 rounded-lg w-full sm:w-80 border-gray-200 outline-none focus:border-black"
            placeholder="Enter your email"
          />
          <button className="bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
