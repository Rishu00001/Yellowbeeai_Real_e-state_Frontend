import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;
    
    // Process form submission logic or API call here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#f7f8f9] min-h-screen pb-16">
      {/* Hero Banner Header */}
      <div 
        className="relative bg-cover bg-center h-64 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 27, 43, 0.75), rgba(18, 27, 43, 0.75)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">Contact Us</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-300 mt-2">
          <a href="/" className="hover:text-white transition">Home</a>
          <span>/</span>
          <span className="text-[#ff385c]">Contact Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* Our Location Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#1e2b40] mb-6 tracking-wide uppercase">
            Our Location
          </h2>
          <div className="relative w-full h-[380px] rounded-lg overflow-hidden bg-slate-100 border border-gray-200">
            <iframe
              title="FindHouse Location Map"
              className="w-full h-full border-0"
              src="https://maps.google.com/maps?q=New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form and Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1e2b40] mb-6 tracking-wide uppercase">
              Contact Us
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 text-sm">
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff385c]/20 focus:border-[#ff385c] text-sm transition resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#ff385c] hover:bg-[#e02e4d] text-white font-medium px-8 py-3 rounded-md transition shadow-sm text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact Details Card */}
          <div 
            className="relative rounded-lg p-8 text-white flex flex-col justify-between overflow-hidden shadow-md bg-cover bg-center min-h-[380px]"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 38, 59, 0.88), rgba(26, 38, 59, 0.88)), url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80')`
            }}
          >
            <div>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-4">
                Contact Details
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-8">
                Please find below contact details and contact us today!
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">95 South Park Ave, USA</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-gray-200">+456 875 369 208</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-gray-200">support@findhouses.com</span>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-gray-200">8:00 am - 9:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
