import React from 'react';
import { MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  const internalJobs = [
    { title: "Senior Labour Law Consultant", loc: "Mumbai", type: "Full-time", dept: "Legal Advisory" },
    { title: "Payroll Compliance Manager", loc: "Delhi NCR", type: "Full-time", dept: "Operations" },
    { title: "Statutory Audit Specialist", loc: "Bangalore", type: "Full-time", dept: "Audits" },
    { title: "HR Business Partner", loc: "Pune", type: "Full-time", dept: "Internal HR" }
  ];

  const clientJobs = [
    { title: "Plant HR Head", loc: "Ahmedabad", type: "Full-time", dept: "Manufacturing" },
    { title: "Compliance Executive", loc: "Chennai", type: "Contract", dept: "IT Services" },
    { title: "IR Manager (Industrial Relations)", loc: "Gurgaon", type: "Full-time", dept: "Automotive" },
    { title: "Welfare Officer", loc: "Hyderabad", type: "Full-time", dept: "Textiles" },
    { title: "Recruitment Specialist", loc: "Mumbai", type: "Contract", dept: "Retail" }
  ];

  const JobCard = ({ job, isInternal }: { job: any; isInternal: boolean }) => (
    <div className={`p-6 md:p-8 rounded-xl border transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${isInternal ? 'bg-white border-mint-100 shadow-sm hover:shadow-md' : 'bg-white border-mint-100 hover:border-teal-300 hover:shadow-md'}`}>
      <div>
        <h3 className="text-lg font-bold text-navy-900 mb-3">{job.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-teal-500" /> {job.loc}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} className="text-teal-500" /> {job.type}</span>
          <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-teal-500" /> {job.dept}</span>
        </div>
      </div>
      <button className={`shrink-0 px-7 py-3 rounded-full font-bold text-sm transition-colors flex items-center gap-2 ${isInternal ? 'bg-teal-500 text-white hover:bg-teal-600' : 'bg-navy-900 text-white hover:bg-navy-800'}`}>
        Apply Now <ChevronRight size={16} />
      </button>
    </div>
  );

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <img src="/src/assets/service-hr.png" alt="Careers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-navy-900/30" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-20" style={{ minHeight: '420px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-md">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">Dream Team</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">Find your place at the table</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Gear your passion for labour and industrial law into a successful career with India's premier compliance firm.</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">Careers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs */}
      <div className="py-20 bg-mint-50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">

          {/* Internal Jobs */}
          <section className="mb-20">
            <div className="mb-10">
              <span className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3 block">Join Our Team</span>
              <h2 className="text-3xl font-display font-bold text-navy-900">Opportunities at Labour Codes</h2>
              <p className="text-gray-500 mt-3 text-sm">Build your career at one of India's most respected HR compliance firms.</p>
            </div>
            <div className="space-y-4">
              {internalJobs.map((job, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <JobCard job={job} isInternal={true} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Client Jobs */}
          <section>
            <div className="mb-10">
              <span className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-3 block">Client Placements</span>
              <h2 className="text-3xl font-display font-bold text-navy-900">Client Job Postings</h2>
              <p className="text-gray-500 mt-3 text-sm">Exclusive roles sourced directly from our corporate client network.</p>
            </div>
            <div className="space-y-4">
              {clientJobs.map((job, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <JobCard job={job} isInternal={false} />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
