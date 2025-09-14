import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mannmish Design Studio</h3>
            <p className="text-gray-300 text-sm mb-4">
              Where vision meets craftsmanship. We create spaces that tell stories,
              blending contemporary design with timeless elegance.
            </p>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Architecture • Interior • Construction
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-gray-400 flex-shrink-0" size={14} />
                <div className="text-gray-300 text-sm">
                  <div>804, Colonnade 2, Near One World Capital</div>
                  <div>B/h. Rajpath Club, Vikramnagar, Bodakdev</div>
                  <div>Ahmedabad-380054</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400 flex-shrink-0" size={14} />
                <a 
                  href="mailto:mannmishdesignstudio@gmail.com" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  mannmishdesignstudio@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Team & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2 mb-4">
              <div className="text-sm">
                <div className="text-white font-medium">Manank Patel</div>
                <div className="text-gray-400 text-xs">B.E. Civil</div>
                <div className="text-gray-300 text-xs">+91 99048 25197</div>
              </div>
              <div className="text-sm">
                <div className="text-white font-medium">Michelle Chokshi</div>
                <div className="text-gray-400 text-xs">B.Arch (COA), M.Plan (ITPI)</div>
                <div className="text-gray-300 text-xs">+91 97245 74042</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mannmishdesignstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="mailto:mannmishdesignstudio@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Mannmish Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}