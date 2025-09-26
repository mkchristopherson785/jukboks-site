export const metadata = {
  title: "Contact JukBoks",
  description: "Get in touch with the JukBoks team. Send us your questions, feedback, or partnership ideas.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-white/80 mb-6">
        We’d love to hear from you! Whether you have questions, feedback, or 
        partnership ideas, drop us a line and we’ll get back to you.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>
            <a
              href="mailto:hello@jukboks.com"
              className="underline text-white hover:text-white/80"
            >
              hello@jukboks.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Social</h2>
          <ul className="space-y-1 text-white/80">
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-white/60 mt-12">
        © {new Date().getFullYear()} JukBoks. All rights reserved.
      </p>
    </main>
  );
}