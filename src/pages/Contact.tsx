import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <img src="/src/assets/hero-office.png" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-navy-900/20" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-20" style={{ minHeight: '420px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">Get In Touch</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">Ready to put your worries to rest?</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Don't get lost in the abyss of compliance uncertainty. Make a move to resolve your labour law problems with us!</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">Contact Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How can we help */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">How can we help?</h2>
          <p className="text-gray-500 text-base">We're here to assist our clients, employees and communities accomplish their goals. Tell us what you're looking for.</p>
        </div>
      </section>

      {/* Form + Info */}
      <div className="py-16 bg-mint-50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-mint-100">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Leave a note</h3>
              <p className="text-gray-400 text-sm mb-8">We have tons of answers to your questions. Feel free to get in touch with us.</p>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-teal-600 mb-1.5">Name *</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all bg-white text-sm" placeholder="Enter Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-600 mb-1.5">Email *</label>
                    <input type="email" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all bg-white text-sm" placeholder="Enter Email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-teal-600 mb-1.5">Phone *</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all bg-white text-sm" placeholder="Enter Phone" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-teal-600 mb-1.5">Company</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all bg-white text-sm" placeholder="Enter Company Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-600 mb-1.5">Service Interest</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all bg-white text-sm appearance-none">
                    <option value="">Select a service...</option>
                    <option>Labour Law Compliance</option>
                    <option>Payroll & Salary Structuring</option>
                    <option>Statutory Compliance & Filings</option>
                    <option>Audits & Governance</option>
                    <option>Contract Staffing</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-600 mb-1.5">Message</label>
                  <textarea rows={5} className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 outline-none transition-all bg-white text-sm" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-navy-900 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-teal-600 transition-colors shadow-md">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-navy-900 text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold mb-8 relative z-10">Get in touch</h3>
                <p className="text-white/60 text-sm mb-8 relative z-10">We'd love to hear from you</p>
                <ul className="space-y-7 relative z-10">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Address</p>
                      <p className="text-white/60 text-sm leading-relaxed">15th Floor, Nariman Point,<br />Mumbai, Maharashtra 400021<br />India</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Contact</p>
                      <p className="text-white/60 text-sm">+91 98765 43210<br />022 4567 8900</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Email</p>
                      <p className="text-white/60 text-sm">contact@labourcodes.in<br />support@labourcodes.in</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 text-teal-400">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Working Hours</p>
                      <p className="text-white/60 text-sm">Monday – Friday: 9:30 AM – 6:30 PM<br />Saturday & Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <div className="bg-gray-200 h-60 rounded-2xl overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map Location" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 shadow">[ Google Map Embed ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
