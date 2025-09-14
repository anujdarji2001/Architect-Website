"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import companyData from '../../data/company.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
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
            <h1 className="fade-in page-title">
              Get In Touch
            </h1>
            
            <p className="fade-in fade-in-delay-1 page-subtitle">
              Ready to bring your vision to life? We&apos;d love to hear about your project 
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
                <h2 className="typography-h2 mb-8">
                  Let&apos;s Connect
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="typography-h4 text-gray-900 mb-2">Visit Our Studio</h3>
                      <div className="typography-body space-y-1">
                        <p>{companyData.company.location.address}</p>
                        <p>{companyData.company.location.area}</p>
                        <p>{companyData.company.location.city} - {companyData.company.location.pincode}, {companyData.company.location.state}</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="typography-h4 text-gray-900 mb-2">Call Us</h3>
                      <div className="typography-body space-y-1">
                        <p><strong>Contact:</strong> {companyData.company.contact.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="typography-h4 text-gray-900 mb-2">Email Us</h3>
                      <a 
                        href={`mailto:${companyData.company.contact.email}`}
                        className="typography-link hover:text-gray-900 transition-colors duration-200"
                      >
                        {companyData.company.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="typography-h4 text-gray-900 mb-2">Business Hours</h3>
                      <div className="typography-body space-y-1">
                        <p>Monday - Friday: {companyData.company.businessHours.weekdays}</p>
                        <p>Saturday: {companyData.company.businessHours.saturday}</p>
                        <p>Sunday: {companyData.company.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="fade-in fade-in-delay-1">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="typography-h2 mb-8">
                    Send us a Message
                  </h3>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h4 className="typography-h4 text-gray-900 mb-2">Message Sent!</h4>
                      <p className="typography-body">Thank you for reaching out. We&apos;ve sent you a confirmation email and will get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm text-red-800">{error}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block typography-body-small font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block typography-body-small font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block typography-body-small font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block typography-body-small font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500"
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
                        <label htmlFor="message" className="block typography-body-small font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Tell us about your project, requirements, timeline, and any specific questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 typography-button flex items-center justify-center"
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
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
              <h2 className="typography-h2 mb-4">
                Find Us
              </h2>
              <p className="typography-body-large max-w-2xl mx-auto">
                Visit our studio in the heart of Ahmedabad. We&apos;re conveniently located 
                near major landmarks and easily accessible by public transport.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.769322916302!2d72.5006522760154!3d23.03224051596592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bca35f508ab%3A0xe7538a44f1998b53!2sColonade%202!5e0!3m2!1sen!2sin!4v1757835555263!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mannmish Design Studio Location - Colonade 2"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="typography-h4 text-gray-900 mb-1">Mannmish Design Studio</h3>
                    <p className="typography-body-small">
                      {companyData.company.location.address}<br />
                      {companyData.company.location.area}<br />
                      {companyData.company.location.city} - {companyData.company.location.pincode}, {companyData.company.location.state}
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=23.03224051596592,72.5006522760154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 typography-button"
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
