import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <img src="/assets/hero-office.png" alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/65 to-navy-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center py-20" style={{ minHeight: '420px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-md">
            <p className="text-teal-500 font-bold text-[11px] uppercase tracking-[0.18em] mb-3">Get In Touch</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">
              Ready to put your worries to rest?
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Don't get lost in the abyss of compliance uncertainty. Reach out to us — our experts are ready to analyze your situation and build a clear roadmap.
            </p>
            <nav className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded-lg hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-300">›</span>
              <span className="text-teal-600">Contact Us</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ── How Can We Help ───────────────────────────────── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-2xl font-display font-bold text-navy-900 mb-2">How can we help?</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-gray-500 text-[15px]">We're here to help our clients, employees and communities accomplish their goals. Tell us what you're looking for.</motion.p>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. One of our compliance experts will get back to you within 1 business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                    className="mt-7 text-teal-600 font-bold text-sm hover:text-navy-900 transition-colors flex items-center gap-1.5">
                    Send another message <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-navy-900 mb-1.5">Leave a note</h3>
                  <p className="text-gray-400 text-sm mb-8">We have answers to all your compliance questions. Feel free to get in touch.</p>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-teal-600 mb-1.5">Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required
                          type="text" placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400/30 focus:border-teal-500 outline-none transition-all bg-white text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-teal-600 mb-1.5">Email *</label>
                        <input name="email" value={form.email} onChange={handleChange} required
                          type="email" placeholder="your@email.com"
                          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400/30 focus:border-teal-500 outline-none transition-all bg-white text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-teal-600 mb-1.5">Phone *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} required
                          type="tel" placeholder="+91 98765 43210"
                          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400/30 focus:border-teal-500 outline-none transition-all bg-white text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-teal-600 mb-1.5">Company</label>
                        <input name="company" value={form.company} onChange={handleChange}
                          type="text" placeholder="Your company name"
                          className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400/30 focus:border-teal-500 outline-none transition-all bg-white text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-teal-600 mb-1.5">Service Interest</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400/30 focus:border-teal-500 outline-none transition-all bg-white text-sm appearance-none text-gray-700">
                        <option value="">Select a service...</option>
                        <option>Labour Law Compliance</option>
                        <option>Payroll &amp; Salary Structuring</option>
                        <option>Statutory Compliance &amp; Filings</option>
                        <option>Audits &amp; Governance</option>
                        <option>Contract Staffing</option>
                        <option>Registrations &amp; Licensing</option>
                        <option>HR Policy &amp; Advisory</option>
                        <option>Legal Representation</option>
                        <option>Training &amp; Workshops</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-teal-600 mb-1.5">Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={5} placeholder="Describe your compliance challenge or query in detail..."
                        className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400/30 focus:border-teal-500 outline-none transition-all bg-white text-sm resize-none"></textarea>
                    </div>
                    <button type="submit"
                      className="w-full bg-navy-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-teal-600 transition-colors shadow-md flex items-center justify-center gap-2">
                      Send Message <ArrowRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-navy-900 text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <h3 className="text-xl font-bold mb-1 relative z-10">Get in touch</h3>
                <p className="text-white/50 text-sm mb-8 relative z-10">Our team is available Monday–Friday, 9:30 AM to 6:30 PM IST.</p>
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0 text-teal-400">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Address</p>
                      <p className="text-white/55 text-sm leading-relaxed">15th Floor, Nariman Point,<br />Mumbai, Maharashtra 400021<br />India</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0 text-teal-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Contact</p>
                      <a href="tel:+919876543210" className="block text-white/55 text-sm hover:text-teal-400 transition-colors">+91 98765 43210</a>
                      <a href="tel:02245678900" className="block text-white/55 text-sm hover:text-teal-400 transition-colors">022 4567 8900</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0 text-teal-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Email</p>
                      <a href="mailto:contact@labourcodes.in" className="block text-white/55 text-sm hover:text-teal-400 transition-colors">contact@labourcodes.in</a>
                      <a href="mailto:support@labourcodes.in" className="block text-white/55 text-sm hover:text-teal-400 transition-colors">support@labourcodes.in</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0 text-teal-400">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-bold mb-1 text-sm">Working Hours</p>
                      <p className="text-white/55 text-sm">Monday – Friday: 9:30 AM – 6:30 PM<br />Saturday &amp; Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-100 h-56 rounded-2xl overflow-hidden relative border border-gray-200">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                  alt="Mumbai Nariman Point" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg flex items-center gap-2.5">
                    <MapPin size={16} className="text-teal-500" />
                    <span className="text-sm font-semibold text-navy-900">Nariman Point, Mumbai</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Contact Strips ──────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Phone, label: 'Call Us Directly', value: '+91 98765 43210', href: 'tel:+919876543210', cta: 'Call Now' },
              { icon: Mail, label: 'Email Our Team', value: 'contact@labourcodes.in', href: 'mailto:contact@labourcodes.in', cta: 'Send Email' },
              { icon: MapPin, label: 'Visit Our Office', value: 'Nariman Point, Mumbai', href: '#', cta: 'Get Directions' },
            ].map((item, i) => (
              <motion.a
                key={i} href={item.href}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-[#f8fafb] hover:border-teal-200 hover:shadow-sm transition-all group">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-500 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors shadow-sm">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold mb-0.5">{item.label}</p>
                  <p className="font-bold text-navy-900 text-sm">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
