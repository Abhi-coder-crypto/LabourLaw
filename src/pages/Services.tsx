import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { slug: 'labour-law-compliance', title: 'Labour Law Compliance', img: '/src/assets/service-labour.png', desc: 'End-to-end compliance with all applicable central and state labour legislation, shielding your business from penal consequences.' },
  { slug: 'payroll-structuring', title: 'Payroll & Salary Structuring', img: '/src/assets/service-payroll.png', desc: 'Precise payroll processing and salary structure auditing optimized for the New Labour Codes.' },
  { slug: 'statutory-filings', title: 'Statutory Compliance & Filings', img: '/src/assets/service-statutory.png', desc: 'Flawless management of PF, ESIC, PT, LWF, TDS, alongside regular returns and meticulous statutory filings.' },
  { slug: 'contract-staffing', title: 'People Outsourcing & Staffing', img: '/src/assets/service-staffing.png', desc: 'Flexible, compliant workforce solutions via outsourcing, managing everything from onboarding to exit.' },
  { slug: 'audits-governance', title: 'Audits & Governance', img: '/src/assets/service-audits.png', desc: 'Rigorous labour audits, factory audits, and establishment compliance reviews to identify and seal gaps.' },
  { slug: 'registrations-licensing', title: 'Registrations & Licensing', img: '/src/assets/service-licensing.png', desc: 'Procurement of Shop & Establishment, Factory License, Contract Labour License and timely renewals.' },
  { slug: 'hr-policy-advisory', title: 'HR Policy & Advisory', img: '/src/assets/service-hr.png', desc: 'Drafting robust HR handbooks, standing orders, POSH policies, and airtight employment contracts.' },
  { slug: 'litigation-support', title: 'Legal Representation', img: '/src/assets/service-legal.png', desc: 'Expert labour court representation, conciliation proceedings, and robust litigation support.' },
  { slug: 'training-workshops', title: 'Training & Workshops', img: '/src/assets/service-training.png', desc: 'In-depth labour law training sessions designed to upskill internal HR teams and management.' },
];

const Services = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img src="/src/assets/service-labour.png" alt="Our Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/50 to-navy-900/20" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-16" style={{ minHeight: '380px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">Comprehensive Compliance Solutions for Indian Businesses</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Tailored to meet the exacting and evolving regulatory demands across all industries.</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">Services</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">Our Expertise</span>
            <h2 className="text-3xl font-display font-bold text-navy-900">9 Specialized Practice Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-mint-100">
                <div className="h-52 relative overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-6 flex-grow leading-relaxed text-sm">{service.desc}</p>
                  <Link to={`/services/${service.slug}`} className="group flex items-center justify-between mt-auto border-t border-gray-100 pt-5">
                    <span className="text-teal-600 font-bold text-sm group-hover:text-navy-900 transition-colors">Explore Details</span>
                    <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-navy-900 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-4 block">Get Started</span>
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-5">Need a custom compliance structure?</h2>
          <p className="text-gray-500 mb-10 text-base">We understand that every business has unique operational needs. Contact us for a bespoke audit and advisory package.</p>
          <Link to="/contact" className="inline-block bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-600 transition-colors shadow-lg text-sm">
            Request Custom Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
