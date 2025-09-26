export const metadata = {
  title: "Terms of Service — JukBoks",
  description: "Review the JukBoks Terms of Service covering usage, responsibilities, and agreements.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-white/80 mb-4">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <p className="text-white/80 mb-4">
        Welcome to <strong>JukBoks</strong>. By accessing or using our website,
        apps, and services, you agree to these Terms of Service. Please read
        them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Service</h2>
      <ul className="list-disc list-inside text-white/80 mb-4">
        <li>You may not use JukBoks for illegal or harmful activities.</li>
        <li>You are responsible for the content you add (e.g., songs, names).</li>
        <li>We may update or discontinue features at any time.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Accounts</h2>
      <p className="text-white/80 mb-4">
        Some features may require an account. You are responsible for keeping
        your login secure and notifying us of any unauthorized use.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="text-white/80 mb-4">
        JukBoks is provided “as is” without warranties. We are not liable for
        damages arising from use of the service, to the maximum extent
        permitted by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Termination</h2>
      <p className="text-white/80 mb-4">
        We may suspend or terminate your access if you violate these Terms or
        misuse the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes</h2>
      <p className="text-white/80 mb-4">
        We may update these Terms occasionally. Continued use of JukBoks means
        you accept the updated Terms.
      </p>

      <p className="text-white/60 mt-10">
        For questions about these Terms, contact us at{" "}
        <a href="mailto:hello@jukboks.com" className="underline text-white">
          hello@jukboks.com
        </a>
        .
      </p>
    </main>
  );
}