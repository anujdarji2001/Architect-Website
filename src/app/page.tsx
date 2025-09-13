// import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// export default function ComingSoon() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #1e3a8a, #312e81)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         textAlign: "center",
//         padding: "1rem",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <main style={{ maxWidth: "700px" }}>
//         <h1
//           style={{
//             fontSize: "3rem",
//             fontWeight: "bold",
//             marginBottom: "1.5rem",
//             animation: "fade-in 1s ease-out forwards",
//           }}
//         >
//           Coming Soon
//         </h1>
//         <p
//           style={{
//             fontSize: "1.25rem",
//             marginBottom: "2rem",
//             animation: "fade-in 1s ease-out forwards",
//             animationDelay: "0.2s",
//           }}
//         >
//           We&apos;re crafting an exceptional experience for architecture
//           enthusiasts. Our site will launch soon with stunning designs,
//           portfolios, and insights.
//         </p>

//         {/* Social links */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "1.5rem",
//             animation: "fade-in 1s ease-out forwards",
//             animationDelay: "0.4s",
//           }}
//         >
//           <a
//             href="https://twitter.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaTwitter size={32} />
//           </a>
//           <a
//             href="https://instagram.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaInstagram size={32} />
//           </a>
//           <a
//             href="https://linkedin.com/company/yourcompany"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaLinkedin size={32} />
//           </a>
//         </div>
//       </main>

//       {/* Keyframes & hover styles */}
//       <style>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .social-icon {
//           transition: transform 0.2s ease;
//         }
//         .social-icon:hover {
//           transform: scale(1.1);
//         }
//       `}</style>
//     </div>
//   );
// }

// app/page.tsx (Next.js 13+ with App Router)

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.png" // place your logo in public/logo.png
          alt="Company Logo"
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Title & Message */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Coming Soon
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        We are crafting something amazing for you. Stay tuned!
      </p>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white shadow p-3 hover:bg-gray-200 transition"
        >
          <FaFacebookF size={20} className="text-gray-700" />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white shadow p-3 hover:bg-gray-200 transition"
        >
          <FaInstagram size={20} className="text-gray-700" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white shadow p-3 hover:bg-gray-200 transition"
        >
          <FaLinkedinIn size={20} className="text-gray-700" />
        </a>
      </div>
    </main>
  );
}

