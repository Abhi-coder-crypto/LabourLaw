import { useState } from 'react';
import { Download, ChevronRight, Calendar, Tag, BookOpen, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Blogs', 'Downloads', 'Resources'];

  const blogs = [
    { type: 'Blogs', category: 'New Labour Codes', title: 'Understanding the New Wage Code', desc: 'A comprehensive guide to how the new definitions of wages impact your salary structure, PF contributions, and total cost to company.', date: 'Oct 15, 2024', img: '/assets/service-payroll.png' },
    { type: 'Blogs', category: 'Compliance', title: 'Navigating State-Specific Leave Policies', desc: 'Analyzing the variations in sick, casual, and earned leaves across different Indian states and how to build a compliant leave policy.', date: 'Oct 02, 2024', img: '/assets/service-hr.png' },
    { type: 'Blogs', category: 'Labour Audit', title: 'Preparing for Labour Inspections', desc: 'Key statutory documents and registers you must maintain and keep updated before an unexpected factory inspection by authorities.', date: 'Sep 28, 2024', img: '/assets/service-audits.png' },
    { type: 'Blogs', category: 'POSH', title: 'POSH Act Compliance Essentials', desc: 'Everything employers need to know about the Prevention of Sexual Harassment act, ICC constitution requirements, and annual reporting obligations.', date: 'Sep 10, 2024', img: '/assets/service-hr.png' },
    { type: 'Blogs', category: 'ESI & PF', title: 'Role of ESIC in Healthcare Benefits', desc: 'How the Employees State Insurance Corporation provides comprehensive medical coverage and cash benefits to covered workers and their families.', date: 'Mar 28, 2025', img: '/assets/service-statutory.png' },
    { type: 'Blogs', category: 'Payroll', title: 'Simplify Payroll Processing', desc: 'Best practices for streamlining monthly payroll with accurate tax deductions, statutory filings, and zero errors in compliance computation.', date: 'Apr 15, 2025', img: '/assets/service-payroll.png' },
  ];

  const downloads = [
    { type: 'Downloads', title: 'PF Calculation Template 2024', desc: 'Excel spreadsheet for accurate PF deductions based on the latest EPF guidelines and wage code definitions.', size: '45 KB', format: 'XLSX' },
    { type: 'Downloads', title: 'Sample Employment Contract', desc: 'Standardized employment agreement template updated for full New Labour Code compliance and best practice inclusions.', size: '120 KB', format: 'DOCX' },
    { type: 'Resources', title: 'Minimum Wage Chart — Q3 2024', desc: 'Comprehensive list of state-wise minimum wages for skilled, semi-skilled, and unskilled labour across all Indian states.', size: '2 MB', format: 'PDF' },
    { type: 'Downloads', title: 'Approval of Factory Plan & Factory License', desc: 'Step-by-step process document for factory plan approval and factory license grant under the Factories Act.', size: '350 KB', format: 'PDF' },
    { type: 'Downloads', title: 'Grant / Amendment of Registration under CLRA', desc: 'Template and comprehensive guide for Contract Labour Registration Certificate under the CLRA Act.', size: '180 KB', format: 'PDF' },
    { type: 'Resources', title: 'ESI & PF Registration Checklist', desc: 'A comprehensive checklist covering every document and step in the ESI and PF registration process in India.', size: '95 KB', format: 'PDF' },
  ];

  const allItems = [...blogs, ...downloads];
  const filteredItems = filter === 'All' ? allItems : allItems.filter(item => item.type === filter);

  return (
    <div className="w-full">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <img src="/assets/service-audits.png" alt="Resources"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/60 to-navy-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center py-16" style={{ minHeight: '400px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-md">
            <p className="text-teal-500 font-bold text-[11px] uppercase tracking-[0.18em] mb-3">Knowledge Hub</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">
              Insights, Blogs & Downloads
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Explore the latest expert insights, regulatory updates, and practical compliance resources to keep your business protected.
            </p>
            <nav className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded-lg hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-300">›</span>
              <span className="text-teal-600">Resources</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            {[
              { icon: BookOpen, value: '6+', label: 'Expert Articles' },
              { icon: FileText, value: '6+', label: 'Downloads & Templates' },
              { icon: Tag, value: '8+', label: 'Compliance Topics' },
              { icon: Calendar, value: 'Monthly', label: 'Content Updates' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-4">
                <div className="text-2xl font-display font-bold text-teal-500 mb-1">{s.value}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters + Grid ────────────────────────────────── */}
      <section className="py-16 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  filter === f
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400 hover:text-teal-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div key={`${item.type}-${item.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">

                  {item.type === 'Blogs' ? (
                    <>
                      <div className="relative overflow-hidden h-48">
                        <img src={(item as any).img} alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 left-3 bg-teal-500 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                          {(item as any).category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-[11px] text-teal-500 font-semibold mb-2 uppercase tracking-wider flex items-center gap-1.5">
                          <Calendar size={11} /> {(item as any).date}
                        </p>
                        <h3 className="text-base font-display font-bold text-navy-900 mb-3 line-clamp-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm mb-5 flex-grow leading-relaxed">{item.desc}</p>
                        <Link to="/resources"
                          className="text-teal-600 font-bold text-sm flex items-center gap-1.5 hover:text-navy-900 transition-colors mt-auto">
                          Read Article <ChevronRight size={14} />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="p-7 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm">
                          <Download size={20} />
                        </div>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider ${
                          item.type === 'Resources' ? 'bg-navy-900/5 text-navy-900' : 'bg-teal-50 text-teal-600'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-navy-900 mb-2.5 line-clamp-2 leading-snug">{item.title}</h3>
                      <p className="text-gray-500 text-sm mb-5 flex-grow leading-relaxed">{item.desc}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400 font-medium">
                          {(item as any).size} · {(item as any).format}
                        </span>
                        <button className="flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-navy-900 transition-colors bg-teal-50 hover:bg-navy-50 px-4 py-1.5 rounded-full">
                          <Download size={13} /> Download
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────── */}
      <section className="py-16 bg-navy-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-teal-400 font-bold text-[11px] uppercase tracking-[0.18em] mb-4">Stay Updated</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.07 }}
            className="text-3xl font-display font-bold mb-5">Never miss a compliance update</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.14 }}
            className="text-white/55 mb-8 text-sm leading-relaxed">Subscribe to our newsletter for critical regulatory alerts, new circulars, and expert analysis delivered directly to your inbox.</motion.p>
          <motion.form
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 bg-white/10 border border-white/20 text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors placeholder:text-white/35"
            />
            <button type="submit"
              className="bg-teal-500 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-teal-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Resources;
