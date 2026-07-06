import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Clientele = () => {
  const clients = [
    'BCG', 'HDFC Bank', 'Hilton', 'Croma', 'Datamatics',
    'NPCI', 'Kodak', 'Tata', 'Mahindra', 'Reliance',
    'Infosys', 'Wipro', 'ITC', 'L&T', 'Maruti Suzuki',
    'Aditya Birla', 'Godrej', 'Cipla', 'TVS', 'Hero'
  ];

  const testimonials = [
    { text: "Labour Codes transformed our chaotic compliance process into a streamlined, risk-free system. Their expertise in the New Wage Code is unmatched.", author: "Rajesh Sharma", role: "HR Director, TechNova" },
    { text: "Their proactive approach to statutory audits saved us from significant penalties. They don't just consult; they partner with you.", author: "Meera Reddy", role: "CEO, Manufacturing Corp" },
    { text: "The contract staffing solutions provided by LC allowed us to scale rapidly during our peak season without any compliance headaches.", author: "Vikram Singh", role: "VP Operations, Retail Giant" }
  ];

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img src="/src/assets/service-hr.png" alt="Our Clientele" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/50 to-navy-900/20" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-16" style={{ minHeight: '380px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">Trusted Partners</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">Our Esteemed Clientele</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Trusted by India's largest corporations to safeguard their compliance and manage their workforce regulations.</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">Clientele</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 text-white py-12">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
            {[
              { value: '500+', label: 'Corporate Clients' },
              { value: '21+', label: 'Years Experience' },
              { value: '15+', label: 'States Covered' },
              { value: '50+', label: 'Legal Experts' },
            ].map((s, i) => (
              <div key={i} className="px-4">
                <div className="text-3xl md:text-4xl font-display font-bold text-teal-400 mb-1">{s.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">Our Portfolio</span>
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">Companies We've Served</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">From nimble startups to Fortune 500 conglomerates — our expertise spans every scale and sector.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {clients.map((client, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                key={i}
                className="bg-white border border-mint-100 aspect-[3/2] rounded-xl flex items-center justify-center p-5 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <span className="font-display font-black text-xl md:text-2xl text-navy-900/30 group-hover:text-teal-600 transition-colors tracking-tight text-center">
                  {client.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">What They Say</span>
            <h2 className="text-3xl font-display font-bold text-navy-900">Client Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-mint-50 border border-mint-100 rounded-xl p-8 hover:shadow-md transition-shadow">
                <p className="text-navy-900 font-display italic text-base leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-navy-900 text-sm">{t.author}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl font-display font-bold mb-5">Join industry leaders who trust Labour Codes.</h2>
          <p className="text-white/80 mb-8">Let's discuss how we can support your compliance and HR requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-navy-800 transition-colors shadow-xl">
            Discuss Your Requirements <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Clientele;
