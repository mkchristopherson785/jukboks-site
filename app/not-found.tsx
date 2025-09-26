import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center p-10 text-center">
      <div>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-white/70 mt-2">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="inline-block mt-6 rounded-xl bg-white text-black px-5 py-3">
          Go home
        </Link>
      </div>
    </main>
  );
}