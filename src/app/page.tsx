import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a, #312e81)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      <main style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            animation: "fade-in 1s ease-out forwards",
          }}
        >
          Coming Soon
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "2rem",
            animation: "fade-in 1s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          We&apos;re crafting an exceptional experience for architecture
          enthusiasts. Our site will launch soon with stunning designs,
          portfolios, and insights.
        </p>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            animation: "fade-in 1s ease-out forwards",
            animationDelay: "0.4s",
          }}
        >
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </main>

      {/* Keyframes & hover styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .social-icon {
          transition: transform 0.2s ease;
        }
        .social-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
