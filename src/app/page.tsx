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

"use client";

import Image from 'next/image';
import Head from 'next/head';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Mannmish Design Studio - Coming Soon</title>
        <meta name="description" content="Mannmish Design Studio is coming soon. Architecture, Interior, Construction." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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
        background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        color: '#1A1A1A',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        textAlign: 'center',
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Architectural blueprint grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(26, 26, 26, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 26, 26, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
          opacity: 0.8,
        }} />
        {/* Architectural geometric elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          border: '1px solid rgba(26, 26, 26, 0.08)',
          borderRadius: '50%',
          opacity: 0.6,
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          left: '8%',
          width: '150px',
          height: '150px',
          border: '1px solid rgba(26, 26, 26, 0.06)',
          transform: 'rotate(45deg)',
          opacity: 0.5,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '12%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, transparent 49%, rgba(26, 26, 26, 0.02) 50%, transparent 51%)',
          transform: 'rotate(30deg)',
          opacity: 0.7,
        }} />
        <div className="fade-in" style={{ marginBottom: '50px' }}>
          <Image
            src="/logo.jpg"
            alt="Mannmish Design Studio Logo"
            width={300}
            height={150}
            priority
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.08))',
              marginBottom: '20px'
            }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#666666',
            marginBottom: '20px'
          }} className="fade-in fade-in-delay-1">
            Architecture • Interior • Construction
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '4.2rem',
            fontWeight: 300,
            margin: '0 0 30px',
            letterSpacing: '-0.02em',
            lineHeight: '0.9',
            color: '#1A1A1A'
          }} className="fade-in fade-in-delay-1">
            Coming Soon
          </h1>
        </div>
        <div style={{ position: 'relative', zIndex: 10 , marginBottom: '80px'}}>
          <p style={{
            fontSize: '1.3rem',
            fontWeight: 300,
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto 40px',
            color: '#4A4A4A',
            fontFamily: 'Crimson Text, serif',
              fontStyle: 'italic'
          }} className="fade-in fade-in-delay-1">
            Where vision meets craftsmanship. We create spaces that tell stories,
            blending contemporary design with timeless elegance.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '60px',
            flexWrap: 'wrap'
          }} className="fade-in fade-in-delay-2">
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#888888',
                marginBottom: '5px'
              }}>Architecture</div>
              <div style={{
                fontSize: '0.95rem',
                color: '#333333',
                fontFamily: 'Cormorant Garamond, serif'
              }}>Innovative Design</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#888888',
                marginBottom: '5px'
              }}>Interior</div>
              <div style={{
                fontSize: '0.95rem',
                color: '#333333',
                fontFamily: 'Cormorant Garamond, serif'
              }}>Curated Spaces</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#888888',
                marginBottom: '5px'
              }}>Construction</div>
              <div style={{
                fontSize: '0.95rem',
                color: '#333333',
                fontFamily: 'Cormorant Garamond, serif'
              }}>Precision Build</div>
            </div>
          </div>
        </div>
        {/*<div style={{ */}
        {/*  marginBottom: '60px',*/}
        {/*  background: 'rgba(255, 255, 255, 0.6)',*/}
        {/*  backdropFilter: 'blur(20px)',*/}
        {/*  border: '1px solid rgba(255, 255, 255, 0.3)',*/}
        {/*  padding: '50px',*/}
        {/*  borderRadius: '2px',*/}
        {/*  maxWidth: '750px',*/}
        {/*  margin: '0 auto 60px',*/}
        {/*  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',*/}
        {/*  position: 'relative',*/}
        {/*  zIndex: 10*/}
        {/*}} className="fade-in fade-in-delay-2">*/}
        {/*  <div style={{*/}
        {/*    textAlign: 'center',*/}
        {/*    marginBottom: '35px'*/}
        {/*  }}>*/}
        {/*    <div style={{*/}
        {/*      fontSize: '0.8rem',*/}
        {/*      fontWeight: 400,*/}
        {/*      letterSpacing: '0.25em',*/}
        {/*      textTransform: 'uppercase',*/}
        {/*      color: '#888888',*/}
        {/*      marginBottom: '10px'*/}
        {/*    }}>Studio Contact</div>*/}
        {/*    <h2 style={{ */}
        {/*      fontFamily: 'Cormorant Garamond, serif',*/}
        {/*      fontSize: '2rem', */}
        {/*      fontWeight: 300,*/}
        {/*      margin: 0,*/}
        {/*      color: '#1A1A1A'*/}
        {/*    }}>Get in Touch</h2>*/}
        {/*  </div>*/}
        {/*  <div style={{ textAlign: 'left', lineHeight: '1.8' }}>*/}
        {/*    <p style={{ marginBottom: '12px' }}>*/}
        {/*      <strong>Email:</strong> <a href="mailto:mann.mishdesignstudio@gmail.com" style={{ color: '#2C2C2C', textDecoration: 'none', borderBottom: '1px solid #2C2C2C' }}>mann.mishdesignstudio@gmail.com</a>*/}
        {/*    </p>*/}
        {/*    <p style={{ marginBottom: '12px' }}>*/}
        {/*      <strong>Manan Patel:</strong> <a href="tel:+919904825197" style={{ color: '#666666', textDecoration: 'none' }}>+91 99048 25197</a>*/}
        {/*    </p>*/}
        {/*    <p style={{ marginBottom: '12px' }}>*/}
        {/*      <strong>Michelle Chokshi:</strong> <a href="tel:+919724574042" style={{ color: '#666666', textDecoration: 'none' }}>+91 97245 74042</a>*/}
        {/*    </p>*/}
        {/*    <p style={{ color: '#666666', fontSize: '0.95rem', marginTop: '20px' }}>*/}
        {/*      <strong>Studio Address:</strong><br/>*/}
        {/*      804, Colonade 2, Near One World Capital,<br/>*/}
        {/*      B/h. Rajpath Club, Vibhramagar,<br/>*/}
        {/*      Bodakdev, Ahmedabad - 380054*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
          <div className="text-center mb-1 fade-in fade-in-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-medium text-slate-800 mb-3 text-lg">Manank Patel</h3>
              <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">B.E. Civil</p>
              <p className="text-slate-700 font-medium">99048 25197</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-medium text-slate-800 mb-3 text-lg">Michelle Chokshi</h3>
              <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">B.Arch (COA), M.Plan (ITPI)</p>
              <p className="text-slate-700 font-medium">97245 74042</p>
            </div>
          </div>

          <div className="text-center text-slate-600 mb-6 bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30 max-w-md mx-auto">
            <p className="mb-1 font-medium text-slate-700">Studio Address</p>
            <div className="w-8 h-px bg-blue-300 mx-auto mb-3 opacity-60"></div>
            <p className="mb-1 text-sm">804, Colonnade 2, Near One World Capital</p>
            <p className="mb-1 text-sm">B/h. Rajpath Club, Vikramnagar, Bodakdev</p>
            <p className="text-sm">Ahmedabad-380054</p>
          </div>
        </div>
        <div className="fade-in fade-in-delay-3">
          <div style={{
            textAlign: 'center',
            marginBottom: '35px'
          }}>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '10px'
            }}>Social Media</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2rem',
              fontWeight: 300,
              margin: 0,
              color: '#1A1A1A'
            }}>Follow Our Journey</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '30px' }}>
            <a href="https://www.instagram.com/mannmishdesignstudio" target="_blank" rel="noopener noreferrer" style={{
              transition: 'all 0.3s ease',
              color: '#1A1A1A',
              padding: '12px',
              borderRadius: '50%',
              background: 'rgba(26, 26, 26, 0.06)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.12)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.06)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <FaInstagram size={28} />
            </a>
            <a href="https://www.facebook.com/mannmishdesignstudio" target="_blank" rel="noopener noreferrer" style={{
              transition: 'all 0.3s ease',
              color: '#1A1A1A',
              padding: '12px',
              borderRadius: '50%',
              background: 'rgba(26, 26, 26, 0.06)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.12)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.06)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <FaFacebookF size={28} />
            </a>
            <a href="https://www.linkedin.com/company/mannmishdesignstudio" target="_blank" rel="noopener noreferrer" style={{
              transition: 'all 0.3s ease',
              color: '#1A1A1A',
              padding: '12px',
              borderRadius: '50%',
              background: 'rgba(26, 26, 26, 0.06)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.12)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.06)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <FaLinkedinIn size={28} />
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '20px', color: '#999999', fontStyle: 'italic' }}>
            Follow us for the latest projects and design insights
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
