import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/85 to-white" />
        </div>

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="w-full max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 shadow-sm backdrop-blur sm:text-sm">
              Built with Next.js
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-5xl lg:text-6xl">
              Next Blog
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
              A clean and modern blog platform for sharing tutorials, ideas, and
              notes about web development, Next.js, React, and frontend tools.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
              >
                Read the Blog
              </Link>

              <button
                type="button"
                disabled
                className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-400 opacity-90 shadow-sm sm:w-auto"
              >
                Admin
                <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-slate-400">
                  Coming soon
                </span>
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-slate-900">
                  Simple Reading
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Clean layout focused on content and readability.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-slate-900">
                  Modern Stack
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Built with Next.js, React, and Tailwind CSS.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-slate-900">
                  Easy to Manage
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Includes an admin side for managing blog content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
