export const metadata = {
  title: "Privacy Policy — JukBoks",
  description: "Read the JukBoks Privacy Policy to learn how we protect your information and respect your privacy.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-white/80 mb-4">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <p className="text-white/80 mb-4">
        At <strong>JukBoks</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our website, mobile apps, and related
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc list-inside text-white/80 mb-4">
        <li>Basic account details (like name, email) if you sign up</li>
        <li>Usage data (like songs added, votes cast, and party activity)</li>
        <li>Device and browser information for analytics</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc list-inside text-white/80 mb-4">
        <li>To operate the JukBoks platform and improve features</li>
        <li>To personalize your experience</li>
        <li>To prevent abuse and ensure security</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Sharing of Information</h2>
      <p className="text-white/80 mb-4">
        We do not sell your personal information. We may share limited data
        with trusted partners to provide analytics, hosting, or legal
        compliance if required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Choices</h2>
      <p className="text-white/80 mb-4">
        You can request deletion of your data by contacting us at{" "}
        <a href="mailto:hello@jukboks.com" className="underline text-white">
          hello@jukboks.com
        </a>
        .
      </p>

      <p className="text-white/60 mt-10">
        For questions about this Privacy Policy, contact us at{" "}
        <a href="mailto:hello@jukboks.com" className="underline text-white">
          hello@jukboks.com
        </a>
        .
      </p>
    </main>
  );
}