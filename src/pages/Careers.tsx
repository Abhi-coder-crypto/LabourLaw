import { useState } from 'react';
import { MapPin, Briefcase, Clock, ChevronRight, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [activeTab, setActiveTab] = useState<'internal' | 'client'>('internal');

  const internalJobs = [
    { title: "Senior Labour Law Consultant", loc: "Mumbai", type: "Full-time", dept: "Legal Advisory", exp: "5–8 years" },
    { title: "Payroll Compliance Manager", loc: "Delhi NCR", type: "Full-time", dept: "Operations", exp: "4–6 years" },
    { title: "Statutory Audit Specialist", loc: "Bangalore", type: "Full-time", dept: "Audits", exp: "3–5 years" },
    { title: "HR Business Partner", loc: "Pune", type: "Full-time", dept: "Internal HR", exp: "4–7 years" },
  ];

  const clientJobs = [
    { title: "Plant HR Head", loc: "Ahmedabad", type: "Full-time", dept: "Manufacturing", exp: "8–12 years" },
    { title: "Compliance Executive", loc: "Chennai", type: "Contract", dept: "IT Services", exp: "2–4 years" },
    { title: "IR Manager (Industrial Relations)", loc: "Gurgaon", type: "Full-time", dept: "Automotive", exp: "6–10 years" },
    { title: "Welfare Officer", loc: "Hyderabad", type: "Full-time", dept: "Textiles", exp: "3–5 years" },
    { title: "Recruitment Specialist", loc: "Mumbai", type: "Contract", dept: "Retail", exp: "2–4 years" },
  ];

  const perks = [
    { icon: TrendingUp, title: "Career Growth", desc: "Clear progression paths with structured learning and mentorship from India's top labour law practitioners." },
    { icon: Award, title: "Expert Recognition", desc: "Work on landmark compliance cases. Your expertise becomes our collective strength." },
    { icon: Users, title: "Collaborative Culture", desc: "A tight-knit team of legal minds, payroll specialists, and HR professionals who learn from each other." },
  ];

  const JobCard = ({ job, isInternal }: { job: any; isInternal: boolean }) => (
    <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
      <div className="flex-1">
        <h3 className="text-base font-bold text-navy-900 mb-3">{job.title}</h3>
        <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-400">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-teal-500" /> {job.loc}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} className="text-teal-500" /> {job.type}</span>
          <span className="flex items-center gap-1.5"><Briefcase size={13} className="text-teal-500" /> {job.dept}</span>
          <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-0.5 rounded-full text-xs">{job.exp} exp</span>
        </div>
      </div>
      <Link to="/contact"
        className={`shrink-0 px-7 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 whitespace-nowrap hover:scale-[1.02] shadow-sm ${
          isInternal
            ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-teal-500/20'
            : 'bg-navy-900 text-white hover:bg-navy-800'
        }`}>
        Apply Now <ChevronRight size={15} />
      </Link>
    </div>
  );

  return (
    <div className="w-full">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <img src="/assets/service-hr.png" alt="Careers at Labour Codes"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/65 to-navy-900/25" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center py-20" style={{ minHeight: '420px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl max-w-md">
            <p className="text-teal-500 font-bold text-[11px] uppercase tracking-[0.18em] mb-3">Join Our Team</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">
              Find your place at the table
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Channel your passion for labour and industrial law into a meaningful career at India's premier compliance advisory firm.
            </p>
            <nav className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded-lg hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-300">›</span>
              <span className="text-teal-600">Careers</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ── Why Work With Us ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-teal-500 font-bold text-[11px] uppercase tracking-[0.18em] mb-3">Why Labour Codes</p>
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">Build a Career That Matters</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Every role here creates real impact — keeping Indian businesses compliant and workers protected.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#f8fafb] border border-gray-100 rounded-2xl p-7 text-center">
                <div className="w-12 h-12 mx-auto bg-teal-50 text-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <perk.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-3">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job Listings ──────────────────────────────────── */}
      <section className="py-20 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('internal')}
              className={`pb-4 px-2 font-bold text-sm border-b-2 transition-all -mb-px ${
                activeTab === 'internal'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}>
              Opportunities at Labour Codes ({internalJobs.length})
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`pb-4 px-2 font-bold text-sm border-b-2 transition-all -mb-px ${
                activeTab === 'client'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}>
              Client Job Postings ({clientJobs.length})
            </button>
          </motion.div>

          {activeTab === 'internal' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">Opportunities at Labour Codes</h2>
                <p className="text-gray-500 text-sm">Build your career at one of India's most respected HR compliance advisory firms.</p>
              </div>
              <div className="space-y-4">
                {internalJobs.map((job, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}>
                    <JobCard job={job} isInternal={true} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'client' && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">Client Job Postings</h2>
                <p className="text-gray-500 text-sm">Exclusive HR & compliance roles sourced directly from our corporate client network across India.</p>
              </div>
              <div className="space-y-4">
                {clientJobs.map((job, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}>
                    <JobCard job={job} isInternal={false} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mt-12 bg-navy-900 text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-display font-bold mb-2">Don't see a role that fits?</h3>
              <p className="text-white/55 text-sm">Send us your resume. We're always open to exceptional talent in labour law and HR compliance.</p>
            </div>
            <Link to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-teal-600 transition-colors shadow-lg whitespace-nowrap">
              Send Your Resume <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
