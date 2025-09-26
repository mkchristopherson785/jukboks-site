export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold">JB</span>
            <span className="text-lg font-semibold tracking-tight">JukBoks</span>
          </a>
          <nav className="hidden gap-6 md:flex text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/app" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:border-white/40">Open Web App</a>
            <a href="#" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90">Get the mobile app</a>
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
              <a
                href="/app"
                className="rounded-xl bg-white px-6 py-3 font-medium text-black hover:bg-white/90"
              >
                Start a party
              </a>
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

          {/* Placeholder phone mock */}
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

      {/* Features */}
      <section id="features" className="border-t border-white/10 bg-white/-[0.02] py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {[
            { title: "Real-time queue", desc: "Songs rise and fall instantly as people vote." },
            { title: "Easy joining", desc: "Share a code or link. No account needed for guests." },
            { title: "Host controls", desc: "Skip, lock queue, or clear trolls with one tap." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-black p-6">
              <div className="mb-3 h-8 w-8 rounded-lg bg-white/10" />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { n: "1", t: "Create a party", d: "Host taps Start a party and gets a shareable code." },
            { n: "2", t: "Friends join", d: "Guests open the link, add songs from search, and vote." },
            { n: "3", t: "Music flows", d: "Top-voted songs play next. Everyone’s happy." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">{s.n}</div>
              <div className="font-medium">{s.t}</div>
              <div className="text-sm text-white/70">{s.d}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-white/-[0.02] py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-6">
            <div>
              <div className="font-medium">Do guests need to create an account?</div>
              <p className="text-sm text-white/70">No. Share a code or link—guests can join and vote immediately.</p>
            </div>
            <div>
              <div className="font-medium">Does it work on iPhone and Android?</div>
              <p className="text-sm text-white/70">Yes. Mobile apps and a web version are supported.</p>
            </div>
            <div>
              <div className="font-medium">Can the host moderate?</div>
              <p className="text-sm text-white/70">Hosts can skip, lock, or clear entries, and set limits per user.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} JukBoks</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="mailto:hello@jukboks.com" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}