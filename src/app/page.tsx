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

// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
//       {/* Logo */}
//       <div className="mb-8">
//         <Image
//           src="/logo.png" // place your logo in public/logo.png
//           alt="Company Logo"
//           width={180}
//           height={180}
//           priority
//         />
//       </div>

//       {/* Title & Message */}
//       <h1 className="text-4xl font-bold mb-4 text-gray-800">
//         Coming Soon
//       </h1>
//       <p className="text-lg text-gray-600 mb-10">
//         We are crafting something amazing for you. Stay tuned!
//       </p>

//       {/* Social Links */}
//       <div className="flex gap-6">
//         <a
//           href="https://facebook.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="rounded-full bg-white shadow p-3 hover:bg-gray-200 transition"
//         >
//           <FaFacebookF size={20} className="text-gray-700" />
//         </a>
//         <a
//           href="https://instagram.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="rounded-full bg-white shadow p-3 hover:bg-gray-200 transition"
//         >
//           <FaInstagram size={20} className="text-gray-700" />
//         </a>
//         <a
//           href="https://linkedin.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="rounded-full bg-white shadow p-3 hover:bg-gray-200 transition"
//         >
//           <FaLinkedinIn size={20} className="text-gray-700" />
//         </a>
//       </div>
//     </main>
//   );
// }

import Image from 'next/image';
import Head from 'next/head';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Mannmish Design Studio - Coming Soon</title>
        <meta name="description" content="Mannmish Design Studio is coming soon. Architecture, Interior, Construction." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .fade-in-delay-1 { animation-delay: 0.5s; opacity: 0; }
        .fade-in-delay-2 { animation-delay: 1s; opacity: 0; }
        .fade-in-delay-3 { animation-delay: 1.5s; opacity: 0; }
      `}</style>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #F5F0EC, #E0D8D1)', // Subtle gradient based on beige tones
        color: '#0A2540',
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle architectural line element inspired by logo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, transparent 50%, rgba(10, 37, 64, 0.05) 50%)',
          backgroundSize: '20px 20px',
          opacity: 0.5,
        }} />
        <Image 
          src="/logo.png" // Place your logo image in the public folder as logo.png
          alt="Mannmish Design Studio Logo"
          width={400}
          height={200}
          priority
          className="fade-in"
          style={{ marginBottom: '30px' }}
        />
        <h1 style={{ fontSize: '4rem', fontWeight: 700, margin: '0 0 20px' }} className="fade-in fade-in-delay-1">
          Coming Soon
        </h1>
        <p style={{ fontSize: '1.8rem', maxWidth: '600px', margin: '0 auto 40px' }} className="fade-in fade-in-delay-1">
          Crafting spaces that inspire. Our new website is under construction, bringing you the latest in architecture, interior design, and construction innovation.
        </p>
        <div style={{ marginBottom: '40px' }} className="fade-in fade-in-delay-2">
          <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Get in Touch</p>
          <p>Email: <a href="mailto:mann.mishdesignstudio@gmail.com" style={{ color: '#0A2540', textDecoration: 'underline' }}>mann.mishdesignstudio@gmail.com</a></p>
          <p>Manan Patel: +91 99048 25197</p>
          <p>Michelle Chokshi: +91 97245 74042</p>
          <p>Address: 804, Colonade 2, Near One World Capital, B/h. Rajpath Club, Vibhramagar, Bodakdev, Ahmedabad - 380054</p>
        </div>
        <div className="fade-in fade-in-delay-3">
          <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px' }}>Follow Us</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            <a href="https://www.instagram.com/mannmishdesignstudio" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Image src="/instagram-icon.png" alt="Instagram" width={40} height={40} /> {/* Add icon images */}
            </a>
            <a href="https://www.facebook.com/mannmishdesignstudio" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Image src="/facebook-icon.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://www.linkedin.com/company/mannmishdesignstudio" target="_blank" rel="noopener noreferrer" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={40} height={40} />
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '15px', opacity: 0.8 }}>
            Note: Social media handles are assumed; update with actual links if different.
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
