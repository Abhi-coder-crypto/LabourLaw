
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { slug: 'labour-law-compliance', title: 'Labour Law Compliance', img: '/assets/service-labour.png', desc: 'End-to-end compliance with all applicable central and state labour legislation, shielding your business from penal consequences.' },
  { slug: 'payroll-structuring', title: 'Payroll & Salary Structuring', img: '/assets/service-payroll.png', desc: 'Precise payroll processing and salary structure auditing optimized for the New Labour Code definitions of wages.' },
  { slug: 'statutory-filings', title: 'Statutory Compliance & Filings', img: '/assets/service-statutory.png', desc: 'Flawless management of PF, ESIC, PT, LWF, TDS, alongside regular returns and meticulous statutory filings.' },
  { slug: 'contract-staffing', title: 'People Outsourcing & Staffing', img: '/assets/service-staffing.png', desc: 'Flexible, compliant workforce solutions via outsourcing, managing everything from onboarding to full & final exit.' },
  { slug: 'audits-governance', title: 'Audits & Governance', img: '/assets/service-audits.png', desc: 'Rigorous labour audits, factory audits, and establishment compliance reviews to identify and seal regulatory gaps.' },
  { slug: 'registrations-licensing', title: 'Registrations & Licensing', img: '/assets/service-licensing.png', desc: 'Procurement of Shop & Establishment, Factory License, Contract Labour License with timely renewals.' },
  { slug: 'hr-policy-advisory', title: 'HR Policy & Advisory', img: '/assets/service-hr.png', desc: 'Drafting robust HR handbooks, standing orders, POSH policies, and legally airtight employment contracts.' },
  { slug: 'litigation-support', title: 'Legal Representation', img: '/assets/service-legal.png', desc: 'Expert labour court representation, conciliation proceedings, and robust litigation support across India.' },
  { slug: 'training-workshops', title: 'Training & Workshops', img: '/assets/service-training.png', desc: 'In-depth labour law training sessions designed to upskill internal HR teams and senior management.' },
];

const Services = () => {
  return (
    <div className="w-full">

      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <img src="/assets/service-labour.png" alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/60 to-navy-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center py-16" style={{ minHeight: '400px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-md">
            <p className="text-teal-500 font-bold text-[11px] uppercase tracking-[0.18em] mb-3">What We Offer</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">
              Comprehensive Compliance Solutions for Indian Businesses
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Tailored to meet the exacting and evolving regulatory demands across all industries and scales of business.
            </p>
            <nav className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded-lg hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-300">›</span>
              <span className="text-teal-600">Services</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-teal-500 font-bold text-[11px] uppercase tracking-[0.18em] mb-3">Our Expertise</p>
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">9 Specialized Practice Areas</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">Every service is designed to give your organization complete legal protection and operational efficiency.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <motion.div key={service.slug}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group">
                <div className="h-52 relative overflow-hidden">
                  <img src={service.img} alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowRight size={13} className="text-white" />
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-lg font-display font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-6 flex-grow leading-relaxed text-sm">{service.desc}</p>
                  <Link to={`/services/${service.slug}`}
                    className="flex items-center justify-between mt-auto border-t border-gray-100 pt-5 group/link">
                    <span className="text-teal-600 font-bold text-sm group-hover/link:text-navy-900 transition-colors">Explore Details</span>
                    <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover/link:bg-navy-900 group-hover/link:text-white transition-all">
                      <ChevronRight size={15} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-teal-400 font-bold text-[11px] uppercase tracking-[0.18em] mb-4">Get Started</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.07 }}
            className="text-3xl font-display font-bold mb-5">Need a custom compliance structure?</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.14 }}
            className="text-white/55 mb-10 text-[15px] leading-relaxed">We understand every business has unique operational needs. Contact us for a bespoke audit and advisory package tailored to your industry.</motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
            <Link to="/contact"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-600 transition-colors shadow-xl text-sm">
              Request Custom Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
