"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .fade-in-delay-1 { animation-delay: 0.2s; opacity: 0; }
        .fade-in-delay-2 { animation-delay: 0.4s; opacity: 0; }
        .fade-in-delay-3 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          {/* Blueprint grid */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            opacity: 0.5,
          }} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="fade-in" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              color: '#1A1A1A',
              marginBottom: '1.5rem'
            }}>
              Get In Touch
            </h1>
            
            <p className="fade-in fade-in-delay-1 max-w-3xl mx-auto text-lg text-gray-600">
              Ready to bring your vision to life? We'd love to hear about your project 
              and discuss how we can help create something extraordinary together.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="fade-in">
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: '#1A1A1A',
                  marginBottom: '2rem'
                }}>
                  Let's Connect
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Studio</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>804, Colonnade 2, Near One World Capital</p>
                        <p>B/h. Rajpath Club, Vikramnagar, Bodakdev</p>
                        <p>Ahmedabad - 380054, Gujarat</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                      <div className="text-gray-600 space-y-1">
                        <p><strong>Contact:</strong> +91 9662002521</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                      <a 
                        href="mailto:mannmishdesignstudio@gmail.com"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                      >
                        mannmishdesignstudio@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="fade-in fade-in-delay-1">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: '#1A1A1A',
                    marginBottom: '2rem'
                  }}>
                    Send us a Message
                  </h3>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                      <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                          >
                            <option value="">Select a subject</option>
                            <option value="residential">Residential Project</option>
                            <option value="commercial">Commercial Project</option>
                            <option value="interior">Interior Design</option>
                            <option value="consultation">Consultation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200"
                          placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium flex items-center justify-center"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 lg:py-20" style={{
          background: 'linear-gradient(135deg, #F7F5F3 0%, #F0EBE6 30%, #E8DDD6 70%, #DFD2C7 100%)',
        }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: '#1A1A1A',
                marginBottom: '1rem'
              }}>
                Find Us
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Visit our studio in the heart of Ahmedabad. We're conveniently located 
                near major landmarks and easily accessible by public transport.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.123456789!2d72.56789012345678!3d23.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA3MsKwMzQnMDQuNCIx!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mannmish Design Studio Location"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Mannmish Design Studio</h3>
                    <p className="text-gray-600 text-sm">
                      804, Colonnade 2, Near One World Capital<br />
                      B/h. Rajpath Club, Vikramnagar, Bodakdev<br />
                      Ahmedabad - 380054, Gujarat
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=23.12345678901234,72.56789012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
