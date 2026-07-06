import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { value: '500+', label: 'Corporate Clients' },
    { value: '21+', label: 'Years Experience' },
    { value: '50+', label: 'Legal Experts' },
    { value: '15+', label: 'States Covered' },
  ];

  const testimonials = [
    { text: "Labour Codes transformed our chaotic compliance process into a streamlined, risk-free system. Their expertise in the New Wage Code is unmatched.", author: "Rajesh Sharma", role: "HR Director, TechNova" },
    { text: "Their proactive approach to statutory audits saved us from significant penalties. They don't just consult; they partner with you.", author: "Meera Reddy", role: "CEO, Manufacturing Corp" },
    { text: "The contract staffing solutions provided by LC allowed us to scale rapidly during our peak season without any compliance headaches.", author: "Vikram Singh", role: "VP Operations, Retail Giant" }
  ];

  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden py-28 md:py-36 lg:py-44">
        <div className="absolute inset-0">
          <img src="/src/assets/hero-office.png" alt="Corporate Office" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-teal-500/20 text-teal-400 font-bold tracking-widest uppercase text-xs mb-6 px-4 py-1.5 rounded-full border border-teal-500/40">India's Premier HR & Compliance Firm</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                Navigate the New Labour Codes with Confidence.
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
                Protect your business, optimize payroll, and ensure 100% statutory compliance with India's leading labour law consultants.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg flex items-center gap-2">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy-800 text-white py-14 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-teal-400">{stat.value}</div>
                <div className="text-white/50 font-semibold text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <span className="text-teal-500 font-bold tracking-widest uppercase text-xs mb-4 block">Why Labour Codes</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-6 leading-snug">Expertise that protects your business and empowers your workforce.</h2>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                  We don't just file paperwork; we architect robust compliance frameworks. With the landscape of Indian labour laws shifting dramatically, you need a partner who anticipates regulatory changes before they impact your bottom line.
                </p>
                <div className="space-y-5">
                  {[
                    { title: "Pan-India Presence", desc: "Expertise across state-specific regulations and central laws." },
                    { title: "Technology-Driven", desc: "Proprietary tools for real-time compliance tracking and audits." },
                    { title: "Proactive Risk Mitigation", desc: "Identifying vulnerabilities before they become liabilities." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-0.5 bg-teal-50 text-teal-500 w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-navy-900 mb-0.5">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="inline-flex items-center gap-2 mt-8 bg-navy-900 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors shadow-md">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <img src="/src/assets/service-hr.png" alt="HR Experts" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-7 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <Quote size={28} className="text-teal-400 mb-3 opacity-60" />
                  <p className="font-display text-base leading-snug">"Compliance is not a cost center; it's the foundation of sustainable growth."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-mint-50 border-y border-mint-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-teal-500 font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">Comprehensive Compliance Solutions</h2>
            <p className="text-gray-500 text-sm">Strategic guidance across the entire spectrum of Indian labour laws and human resource management.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Labour Law Compliance', img: '/src/assets/service-labour.png', slug: 'labour-law-compliance', desc: 'End-to-end compliance with all applicable central and state labour legislation.' },
              { title: 'Payroll & Salary Structuring', img: '/src/assets/service-payroll.png', slug: 'payroll-structuring', desc: 'Payroll processing and salary structure auditing optimized for New Labour Codes.' },
              { title: 'Statutory Filings', img: '/src/assets/service-statutory.png', slug: 'statutory-filings', desc: 'PF, ESIC, PT, LWF, TDS management, regular returns and statutory filings.' },
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-xl shadow-sm border border-mint-100 hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
                </div>
                <div className="p-7 flex-grow flex flex-col">
                  <h3 className="text-xl font-display font-bold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-5 flex-grow text-sm">{service.desc}</p>
                  <Link to={`/services/${service.slug}`} className="text-teal-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Read more <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors shadow-md">
              View All 9 Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-navy-900 to-navy-900"></div>
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-14">
            <span className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-4 block">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Trusted by Industry Leaders</h2>
            <p className="text-white/50 text-sm">Don't just take our word for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex text-teal-400 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-base font-display italic mb-7 leading-relaxed text-white/90">"{test.text}"</p>
                <div>
                  <p className="font-bold text-white text-sm">{test.author}</p>
                  <p className="text-xs text-white/50 mt-0.5">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele Strip */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 text-center">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-10">Serving 500+ Corporations Across India</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700">
            {['HDFC Bank', 'Tata Motors', 'Reliance', 'Wipro', 'Infosys', 'L&T'].map((client) => (
              <div key={client} className="text-xl md:text-2xl font-display font-black text-navy-900 tracking-tight">{client.toUpperCase()}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Insights */}
      <section className="py-20 bg-mint-50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-teal-500 font-bold tracking-widest uppercase text-xs mb-2 block">Blogs ——</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Stay informed with expert insights</h2>
            </div>
            <Link to="/resources" className="hidden md:flex items-center gap-2 text-navy-900 font-semibold text-sm hover:text-teal-600 transition-colors border-b border-navy-900 hover:border-teal-600 pb-0.5">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: 'New Labour Codes', title: 'Understanding the New Wage Code', desc: 'A comprehensive guide to how the new definitions of wages impact your salary structure.', img: '/src/assets/service-payroll.png', date: 'Oct 15, 2024' },
              { category: 'Compliance', title: 'Navigating State-Specific Leaves', desc: 'Analyzing the variations in sick, casual, and earned leaves across different Indian states.', img: '/src/assets/service-hr.png', date: 'Oct 02, 2024' },
              { category: 'Litigation', title: 'Preparing for Labour Inspections', desc: 'Key documents and registers you must have updated before an unexpected factory inspection.', img: '/src/assets/service-audits.png', date: 'Sep 28, 2024' }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-mint-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col group">
                <div className="relative overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{post.category}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-teal-500 font-semibold mb-2">{post.date}</p>
                  <h3 className="text-lg font-display font-bold text-navy-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 flex-grow leading-relaxed">{post.desc}</p>
                  <Link to="/resources" className="text-teal-600 font-bold text-sm flex items-center gap-1.5 hover:text-navy-900 transition-colors mt-auto">
                    Read Article <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-500 text-center">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5">Ready to secure your compliance?</h2>
          <p className="text-white/80 text-base mb-10">Schedule a detailed consultation with our legal experts to audit your current HR practices.</p>
          <Link to="/contact" className="inline-block bg-navy-900 text-white px-10 py-4 rounded-full font-bold hover:bg-navy-800 transition-colors shadow-xl text-sm">
            Schedule Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
