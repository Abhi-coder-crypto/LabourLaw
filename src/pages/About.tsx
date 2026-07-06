import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full">

      {/* Hero - Nitinium style: full-width photo + floating white card */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img src="/src/assets/service-staffing.png" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/50 to-navy-900/20" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-16" style={{ minHeight: '380px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">Who We Are</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">The Standard in Labour Law Compliance</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Over two decades of trusted expertise in Indian labour laws, HR governance, and compliance excellence.</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">About Us</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative shadow-xl">
                <img src="/src/assets/service-staffing.png" alt="Our Team" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-teal-500 text-white p-6">
                  <div className="text-4xl font-display font-bold mb-1">21+</div>
                  <div className="text-sm font-semibold uppercase tracking-wider">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-gray-700">
              <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-6 leading-snug">Founded on a Vision of Simplified Compliance</h2>
              <p className="text-base leading-relaxed mb-5">
                Founded in 2003, Labour Codes began with a singular vision: to bridge the gap between complex legal statutes and practical business operations. What started as a boutique advisory firm in Mumbai has grown into a pan-India compliance powerhouse.
              </p>
              <p className="leading-relaxed mb-5 text-gray-600">
                We recognized early that compliance is not merely about avoiding penalties — it's about creating an ethical, structured, and highly motivated workforce. Our evolution has mirrored the transformation of Indian labour laws, culminating in our unmatched expertise in the recent comprehensive Labour Codes.
              </p>
              <p className="leading-relaxed text-gray-600">
                Today, we manage compliance for over 500 organizations, ranging from dynamic startups to Fortune 500 conglomerates, processing millions of data points annually while maintaining a pristine record of legal adherence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-mint-50 border-y border-mint-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">Our Purpose</span>
            <h2 className="text-3xl font-display font-bold text-navy-900">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-xl shadow-sm border border-mint-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with foolproof compliance strategies, enabling them to focus on growth while we secure their legal and operational foundation. We strive to make compliance a seamless, automated, and invisible part of corporate success.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-xl shadow-sm border border-mint-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-navy-900/5 text-navy-900 rounded-full flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the undisputed authority and most trusted partner in India for comprehensive labour law management, setting the gold standard for HR governance and ethical workforce practices across all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-3 block">What Drives Us</span>
            <h2 className="text-3xl font-display font-bold mb-3">Our Core Values</h2>
            <p className="text-white/60 max-w-xl mx-auto">The principles that guide every audit, every piece of advice, and every action we take.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Absolute Integrity", desc: "We uphold the highest ethical standards. In compliance, there are no shortcuts, only rigorous adherence." },
              { icon: Award, title: "Unmatched Excellence", desc: "We deliver precision in every detail, backed by profound legal knowledge and continuous learning." },
              { icon: Users, title: "Client Partnership", desc: "We act as an extension of your team, deeply invested in your operational continuity and success." }
            ].map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 mx-auto border border-teal-500/40 rounded-full flex items-center justify-center text-teal-400 mb-6 bg-teal-500/10">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{value.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-4 block">Join Our Team</span>
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">Join Our Roster of Experts</h2>
          <p className="text-gray-500 mb-8 text-base">We are always looking for sharp legal minds and HR professionals who share our dedication to compliance excellence.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-md">
            View Career Opportunities <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
