import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.jpg"
                alt="Mannmish Design Studio"
                width={40}
                height={20}
                className="rounded"
              />
              <h3 className="text-xl font-semibold">Mannmish Design Studio</h3>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Where vision meets craftsmanship. We create spaces that tell stories,
              blending contemporary design with timeless elegance.
            </p>
            <div className="text-xs text-gray-400 uppercase tracking-wide mb-6">
              Architecture • Interior • Construction
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/mannmishdesignstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="mailto:mannmishdesignstudio@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Architectural Design</li>
              <li className="text-gray-300 text-sm">Interior Design</li>
              <li className="text-gray-300 text-sm">Construction Management</li>
              <li className="text-gray-300 text-sm">Project Planning</li>
              <li className="text-gray-300 text-sm">Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-gray-400 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <div>804, Colonnade 2, Near One World Capital</div>
                  <div>B/h. Rajpath Club, Vikramnagar, Bodakdev</div>
                  <div>Ahmedabad-380054, Gujarat</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400 flex-shrink-0" size={16} />
                <a 
                  href="mailto:mannmishdesignstudio@gmail.com" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  mannmishdesignstudio@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-400 flex-shrink-0" size={16} />
                <a 
                  href="tel:+919662002521" 
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  +91 9662002521
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaClock className="text-gray-400 flex-shrink-0" size={16} />
                <div className="text-gray-300 text-sm">
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Mannmish Design Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}