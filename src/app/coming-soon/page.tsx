"use client";

import Image from 'next/image';
import Head from 'next/head';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Mannmish Design Studio - Coming Soon</title>
        <meta name="description" content="Mannmish Design Studio is coming soon. Architecture, Interior, Construction." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
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
        fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, sans-serif',
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
            width={200}
            height={100}
            className='rounded-2xl'
            priority
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.08))',
              marginBottom: '0px'
            }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 300,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#666666',
            marginBottom: '30px'
          }} className="fade-in fade-in-delay-1">
            Architecture • Interior • Construction
          </div>
          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '3.5rem',
            fontWeight: 300,
            margin: '0 0 10px',
            letterSpacing: '-0.02em',
            lineHeight: '0.9',
            color: '#1A1A1A'
          }} className="fade-in fade-in-delay-1">
            Coming Soon
          </h1>
        </div> 
        <div style={{ position: 'relative', zIndex: 10 , marginBottom: '10px'}}>
          <p style={{
            fontSize: '1.2rem',
            fontWeight: 300,
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto 40px',
            color: '#4A4A4A',
            fontFamily: 'Montserrat, sans-serif',
              fontStyle: 'italic'
          }} className="fade-in fade-in-delay-1">
            Where vision meets craftsmanship. We create spaces that tell stories,
            blending contemporary design with timeless elegance.
          </p>
          
        </div>
        
          <div className="text-center mb-1 fade-in fade-in-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-medium text-slate-800 mb-3 text-lg">Manank Patel</h3>
              <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">B.E. Civil</p>
              <p className="text-slate-700 font-medium">+91 99048 25197</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="font-medium text-slate-800 mb-3 text-lg">Michelle Chokshi</h3>
              <p className="text-sm text-slate-500 mb-2 uppercase tracking-wide">B.Arch (COA), M.Plan (ITPI)</p>
              <p className="text-slate-700 font-medium">+91 97245 74042</p>
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
            marginBottom: '20px'
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
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.7rem',
              letterSpacing: '0.05em',
              fontWeight: 300,
              margin: 0,
              color: '#1A1A1A'
            }}>Get In Touch</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
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
            <a href="mailto:mannmishdesignstudio@gmail.com" target="_blank" rel="noopener noreferrer" style={{
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
              <FaEnvelope size={28} />
            </a>
            
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '20px', color: '#999999', fontStyle: 'italic' }}>
            © 2025 Mannmish Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;