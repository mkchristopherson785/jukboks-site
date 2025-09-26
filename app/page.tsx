import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold">JB</span>
            <span className="text-lg font-semibold tracking-tight">JukBoks</span>
          </Link>
          <nav className="hidden gap-6 md:flex text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/app" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:border-white/40">
              Open Web App
            </Link>
            <a href="#" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">
              Get the mobile app
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Crowd-powered music queues
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Spin up a party in seconds. Friends join, add songs, and vote in real time.
              The most-loved tracks rise to the top—no DJ required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/app"
                className="rounded-xl bg-white px-6 py-3 font-medium text-black hover:bg-white/90"
              >
                Start a party
              </Link>
              <a
                href="#features"
                className="rounded-xl border border-white/20 px-6 py-3 hover:border-white/40"
              >
                Learn more
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">
              No signup required for guests. Works on iOS, Android, and web.
            </p>
          </div>

          {/* Phone mock placeholder */}
          <div className="relative">
            <div className="mx-auto w-[320px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl">
              <div className="aspect-[9/19.5] w-full rounded-[1.5rem] bg-black p-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="h-6 w-24 rounded bg-white/10" />
                    <div className="h-6 w-6 rounded bg-white/10" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 rounded bg-white/10" />
                    <div className="h-10 rounded bg-white/10" />
                    <div className="h-10 rounded bg-white/10" />
                  </div>
                </div>
                <div className="mt-3 h-11 rounded-xl bg-white text-black text-center leading-[44px] font-medium">
                  + Add Song
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Live voting
            </div>
          </div>
        </div>
      </section>

      {/* … features, how it works, FAQ, footer (same as your version) … */}
    </main>
  );
}