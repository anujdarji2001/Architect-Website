// app/page.tsx (or app/coming-soon/page.tsx if you want a separate route)

import { Metadata } from 'next';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Install with: npm install react-icons

export const metadata: Metadata = {
  title: 'Architect Website - Coming Soon',
  description: 'Our architect website is under construction. Stay tuned!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center text-white px-4">
      <main className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-200">
          We&apos;re crafting an exceptional experience for architecture enthusiasts. Our site will launch soon with stunning designs, portfolios, and insights.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 animate-fade-in delay-400">
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </main>

      {/* Optional: Add a subtle animation or background elements */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}