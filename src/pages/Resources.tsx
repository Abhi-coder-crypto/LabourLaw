import React, { useState } from 'react';
import { Download, ChevronRight, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Blogs', 'Downloads', 'Resources'];

  const blogs = [
    { type: 'Blogs', category: 'New Labour Codes', title: 'Understanding the New Wage Code', desc: 'A comprehensive guide to how the new definitions of wages impact your salary structure and PF contributions.', date: 'Oct 15, 2024', img: '/src/assets/service-payroll.png' },
    { type: 'Blogs', category: 'Compliance', title: 'Navigating State-Specific Leaves', desc: 'Analyzing the variations in sick, casual, and earned leaves across different Indian states.', date: 'Oct 02, 2024', img: '/src/assets/service-hr.png' },
    { type: 'Blogs', category: 'Litigation', title: 'Preparing for Labour Inspections', desc: 'Key documents and registers you must have updated before an unexpected factory inspection.', date: 'Sep 28, 2024', img: '/src/assets/service-audits.png' },
    { type: 'Blogs', category: 'POSH', title: 'POSH Act Compliance Essentials', desc: 'Everything employers need to know about the Prevention of Sexual Harassment act and ICC constitution.', date: 'Sep 10, 2024', img: '/src/assets/service-hr.png' },
    { type: 'Blogs', category: 'ESI & PF', title: 'Role of ESIC in Healthcare Benefits', desc: 'How the Employees State Insurance Corporation provides medical coverage and cash benefits.', date: 'Mar 28, 2025', img: '/src/assets/service-statutory.png' },
    { type: 'Blogs', category: 'Payroll', title: 'Simplify Payroll Processing', desc: 'Best practices for streamlining monthly payroll with accurate tax deductions and statutory filings.', date: 'Apr 15, 2025', img: '/src/assets/service-payroll.png' },
  ];

  const downloads = [
    { type: 'Downloads', title: 'PF Calculation Template 2024', desc: 'Excel spreadsheet for accurate PF deductions based on the latest guidelines.', size: '45 KB (XLSX)' },
    { type: 'Downloads', title: 'Sample Employment Contract', desc: 'Standardized template updated for New Labour Code compliance.', size: '120 KB (DOCX)' },
    { type: 'Resources', title: 'Minimum Wage Chart - Q3 2024', desc: 'Comprehensive list of state-wise minimum wages for skilled and unskilled labour.', size: '2 MB (PDF)' },
    { type: 'Downloads', title: 'Approval of Factory Plan & Factory License', desc: 'Step-by-step process document for factory plan approval and license grant.', size: '350 KB (PDF)' },
    { type: 'Downloads', title: 'Grant / Amendment of Registration under CLRA', desc: 'Template and guide for Contract Labour Registration Certificate.', size: '180 KB (PDF)' },
    { type: 'Resources', title: 'ESI & PF Registration Checklist', desc: 'Comprehensive checklist for ESI and PF registration process in India.', size: '95 KB (PDF)' },
  ];

  const items = [...blogs, ...downloads];
  const filteredItems = filter === 'All' ? items : items.filter(item => item.type === filter);

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img src="/src/assets/service-audits.png" alt="Resources" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/50 to-navy-900/20" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-16" style={{ minHeight: '380px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">Blogs</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">Insights and Updates</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Explore the latest insights, updates, and expert guidance on Labour & Industrial Law Compliance to stay informed and ahead.</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">Blogs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heading */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 text-center">
          <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">Blogs ——</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Stay informed with expert insights and updates</h2>
        </div>
      </section>

      {/* Filter + Grid */}
      <div className="bg-mint-50 py-16">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${filter === f ? 'bg-teal-500 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400 hover:text-teal-600'}`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-white rounded-xl shadow-sm border border-mint-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                {item.type !== 'Downloads' && item.type !== 'Resources' ? (
                  <>
                    <div className="relative overflow-hidden">
                      <img src={(item as any).img} alt={item.title} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">{(item as any).category}</div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-xs text-teal-500 font-semibold mb-2">{(item as any).date}</p>
                      <h3 className="text-lg font-display font-bold text-navy-900 mb-3 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm mb-5 flex-grow leading-relaxed">{item.desc}</p>
                      <Link to="/resources" className="text-teal-600 font-bold text-sm flex items-center gap-1.5 hover:text-navy-900 transition-colors mt-auto">
                        Read Article <ChevronRight size={14} />
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="p-7 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                      <Download size={20} />
                    </div>
                    <span className="text-xs font-bold text-teal-500 uppercase tracking-wider mb-3">{item.type}</span>
                    <h3 className="text-base font-bold text-navy-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">{(item as any).size}</span>
                      <button className="flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-navy-900 transition-colors">
                        <Download size={14} /> Download
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
