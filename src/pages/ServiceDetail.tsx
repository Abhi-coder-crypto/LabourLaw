import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Phone, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceDetails: Record<string, {
  headline: string;
  subhead: string;
  intro: string;
  body: string;
  deliverables: string[];
  related: string[];
  img: string;
}> = {
  'labour-law-compliance': {
    headline: 'Streamlining Compliance has never been easier.',
    subhead: 'Labour Law Compliance Services',
    intro: 'End-to-end compliance management for all applicable central and state labour legislation across India.',
    body: 'Navigating the complex web of Indian labour laws requires precision and proactive management. Our Labour Law Compliance service provides end-to-end protection, ensuring your organization remains fully compliant while optimizing operational efficiency.\n\nWith the impending enforcement of the New Labour Codes, the regulatory landscape is shifting. We audit your current practices, identify gaps, and implement frameworks that withstand the highest level of scrutiny from statutory bodies.',
    deliverables: ['Comprehensive Compliance Audits', 'Statutory Register Maintenance', 'Risk Assessment & Mitigation', 'Liaison with Government Authorities', 'Regular Regulatory Updates', 'Documentation Standardization'],
    related: ['Statutory Compliance & Filings', 'Audits & Governance', 'HR Policy & Advisory'],
    img: '/src/assets/service-labour.png',
  },
  'payroll-structuring': {
    headline: 'Precise Payroll Processing, optimized for New Labour Codes.',
    subhead: 'Payroll & Salary Structuring Services',
    intro: 'Accurate payroll management and salary structure auditing aligned with the New Labour Code definitions.',
    body: 'The New Labour Codes have redefined the concept of "wages," directly impacting PF contributions, gratuity calculations, and employee benefits. Non-compliance in payroll structuring can result in significant financial penalties.\n\nOur experts design salary structures that are fully compliant, tax-efficient, and aligned with the new definitions of wages — protecting both the employer and employee.',
    deliverables: ['Salary Structure Redesign', 'PF & ESIC Computation', 'Full & Final Settlement', 'Payroll Software Integration', 'Tax Optimization', 'Monthly Payroll Processing'],
    related: ['Statutory Compliance & Filings', 'Labour Law Compliance', 'Audits & Governance'],
    img: '/src/assets/service-payroll.png',
  },
  'statutory-filings': {
    headline: 'Flawless Statutory Filings, on time, every time.',
    subhead: 'Statutory Compliance & Filings Services',
    intro: 'Complete management of PF, ESIC, PT, LWF, TDS filings and timely regulatory returns.',
    body: 'Statutory compliance involves a complex calendar of filings, payments, and returns across multiple government portals. A missed deadline can attract hefty penalties and interest.\n\nOur dedicated statutory team manages the full compliance calendar for your organization — ensuring zero delays, zero errors, and complete peace of mind.',
    deliverables: ['PF Monthly Returns', 'ESIC Monthly Contribution', 'Professional Tax Payments', 'LWF Contributions', 'TDS Filings', 'Annual Statutory Returns'],
    related: ['Labour Law Compliance', 'Payroll & Salary Structuring', 'Registrations & Licensing'],
    img: '/src/assets/service-statutory.png',
  },
  'contract-staffing': {
    headline: 'Flexible, Compliant Workforce Solutions at Scale.',
    subhead: 'People Outsourcing & Staffing Services',
    intro: 'End-to-end management of outsourced workforce — from onboarding to exit, fully compliant.',
    body: 'Contract and temporary staffing comes with a specific set of compliance requirements under the CLRA Act and New Labour Codes. Improper management exposes companies to significant legal liability.\n\nWe manage the entire lifecycle of your contractual workforce — recruitment, onboarding, payroll, compliance filings, and exit — giving you the flexibility to scale without risk.',
    deliverables: ['Contract Labour License (CLRA)', 'Worker Onboarding & Registration', 'Payroll for Contract Staff', 'Monthly Compliance Filings', 'Exit & F&F Management', 'Principal Employer Compliance'],
    related: ['Labour Law Compliance', 'Statutory Compliance & Filings', 'Registrations & Licensing'],
    img: '/src/assets/service-staffing.png',
  },
  'audits-governance': {
    headline: 'Rigorous Audits to Seal Every Compliance Gap.',
    subhead: 'Audits & Governance Services',
    intro: 'Labour audits, factory audits, and establishment reviews to identify and eliminate compliance risks.',
    body: 'A compliance audit is not just a paperwork exercise — it is a strategic risk management tool. Our auditors go beyond surface-level checks to identify deep-rooted vulnerabilities.\n\nWe conduct comprehensive audits across all applicable legislation and provide actionable remediation plans, ensuring your establishment is inspection-ready at all times.',
    deliverables: ['Labour Law Compliance Audit', 'Factory Act Audit', 'Payroll Audit', 'Contract Labour Audit', 'Remediation Planning', 'Post-Audit Monitoring'],
    related: ['Labour Law Compliance', 'Registrations & Licensing', 'HR Policy & Advisory'],
    img: '/src/assets/service-audits.png',
  },
  'registrations-licensing': {
    headline: 'All Your Statutory Registrations, Handled End-to-End.',
    subhead: 'Registrations & Licensing Services',
    intro: 'Procurement and timely renewal of Shop & Establishment, Factory License, and Contract Labour License.',
    body: 'Operating without the required licenses and registrations is a significant legal risk. From new business setup to ongoing renewals, we manage all statutory registrations across India.\n\nOur experts handle the entire process — from documentation and application to follow-up with authorities — ensuring timely approval and zero lapses.',
    deliverables: ['Shop & Establishment Registration', 'Factory License & Renewal', 'Contract Labour License (CLRA)', 'PF & ESIC Registration', 'Professional Tax Registration', 'MSME / Udyam Registration'],
    related: ['Labour Law Compliance', 'Statutory Compliance & Filings', 'Audits & Governance'],
    img: '/src/assets/service-licensing.png',
  },
  'hr-policy-advisory': {
    headline: 'Robust HR Policies that Protect Your Organization.',
    subhead: 'HR Policy & Advisory Services',
    intro: 'Drafting HR handbooks, standing orders, POSH policies, and legally compliant employment contracts.',
    body: 'In the era of new labour codes, HR policies are not just internal documents — they are legal instruments. Outdated or non-compliant policies create significant liability.\n\nOur HR advisory team drafts, audits, and updates all your HR documentation to ensure they are legally watertight, compliant with the latest codes, and aligned with best practices.',
    deliverables: ['HR Policy Manual', 'Standing Orders (Certified)', 'POSH Policy & ICC Setup', 'Employment Contracts', 'Offer Letter Templates', 'Non-Disclosure & Non-Compete Agreements'],
    related: ['Labour Law Compliance', 'Training & Workshops', 'Legal Representation'],
    img: '/src/assets/service-hr.png',
  },
  'litigation-support': {
    headline: 'Expert Legal Representation in Labour Disputes.',
    subhead: 'Legal Representation Services',
    intro: 'Labour court representation, conciliation proceedings, and robust litigation support across India.',
    body: 'Labour disputes — whether from individual employees or trade unions — can be costly and time-consuming. Expert legal representation at the right time can significantly alter outcomes.\n\nOur panel of experienced labour law advocates represents employers before Labour Courts, Industrial Tribunals, High Courts, and in conciliation proceedings, providing the strongest possible defense.',
    deliverables: ['Labour Court Representation', 'Industrial Tribunal Cases', 'Conciliation Proceedings', 'Inquiry Officer Services', 'Legal Opinions', 'Domestic Enquiry Management'],
    related: ['Audits & Governance', 'HR Policy & Advisory', 'Labour Law Compliance'],
    img: '/src/assets/service-legal.png',
  },
  'training-workshops': {
    headline: 'Empowering Your HR Team with Expert Knowledge.',
    subhead: 'Training & Workshops Services',
    intro: 'In-depth labour law training programs designed to upskill your internal HR teams and management.',
    body: 'Compliance is only as strong as the people implementing it. Our training programs equip your HR and management teams with the knowledge they need to handle day-to-day compliance confidently.\n\nFrom the fundamentals of New Labour Codes to specialized programs on POSH, standing orders, and payroll compliance — our experts deliver practical, case-study-driven training.',
    deliverables: ['New Labour Codes Overview', 'POSH Act Training', 'Payroll Compliance Workshop', 'HR Documentation Workshop', 'Factory Act Training', 'Custom In-house Programs'],
    related: ['HR Policy & Advisory', 'Labour Law Compliance', 'Audits & Governance'],
    img: '/src/assets/service-training.png',
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const detail = serviceDetails[slug || ''];
  const title = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Service';

  return (
    <div className="w-full">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '380px' }}>
        <img src={detail?.img || '/src/assets/service-labour.png'} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-navy-900/20" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex items-center py-16" style={{ minHeight: '380px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl p-8 md:p-10 shadow-2xl max-w-sm md:max-w-lg">
            <p className="text-teal-500 font-bold text-xs uppercase tracking-widest mb-3">{detail?.subhead || 'Our Services'}</p>
            <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4 leading-snug">{detail?.headline || title}</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{detail?.intro}</p>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Link to="/" className="bg-navy-900 text-white px-3 py-1.5 rounded hover:bg-teal-600 transition-colors">Home</Link>
              <span className="text-gray-400">›</span>
              <Link to="/services" className="text-gray-500 hover:text-teal-600 transition-colors">Services</Link>
              <span className="text-gray-400">›</span>
              <span className="text-teal-600">{title}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 py-4">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-navy-900 transition-colors">
            <ArrowLeft size={14} /> Back to All Services
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-mint-50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-12">

          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-mint-100 mb-8">

              {/* Image + Intro */}
              <div className="flex flex-col md:flex-row gap-8 mb-10">
                <div className="md:w-2/5 shrink-0">
                  <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
                    <img src={detail?.img || '/src/assets/service-labour.png'} alt={title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:w-3/5">
                  {detail?.body?.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4 text-sm">{para}</p>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <h3 className="text-xl font-display font-bold text-navy-900 mb-5">Key Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {(detail?.deliverables || ['Comprehensive Compliance Audits', 'Statutory Register Maintenance', 'Risk Assessment & Mitigation', 'Liaison with Government Authorities', 'Regular Regulatory Updates', 'Documentation Standardization']).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-mint-50 p-4 rounded-lg border border-mint-100">
                    <CheckCircle className="text-teal-500 shrink-0 mt-0.5" size={18} />
                    <span className="font-semibold text-navy-900 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Related Services */}
              {detail?.related && (
                <>
                  <h3 className="text-lg font-bold text-teal-600 mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {detail.related.map((r, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                        <CheckCircle size={16} className="text-teal-500 shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-xl border border-mint-100 shadow-sm sticky top-32">
              <h3 className="text-lg font-display font-bold text-navy-900 mb-4">Ready to secure your compliance?</h3>
              <p className="text-gray-500 text-sm mb-7 leading-relaxed">Speak directly with our legal experts to discuss how this service applies to your specific industry.</p>
              <div className="space-y-3">
                <Link to="/contact" className="w-full bg-navy-900 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
                  <FileText size={16} /> Request Proposal
                </Link>
                <a href="tel:+919876543210" className="w-full bg-white text-navy-900 border-2 border-navy-900 py-3.5 rounded-lg font-bold text-sm hover:bg-navy-50 transition-colors flex items-center justify-center gap-2">
                  <Phone size={16} /> Call Now
                </a>
              </div>

              {/* Other Services */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-navy-900 mb-4 text-sm uppercase tracking-wider">Other Services</h4>
                <ul className="space-y-2">
                  {['Labour Law Compliance', 'Payroll & Salary Structuring', 'Statutory Filings', 'Audits & Governance', 'Registrations & Licensing'].map((s, i) => (
                    <li key={i}>
                      <Link to={`/services/${s.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition-colors py-1">
                        <ChevronRight size={13} className="text-teal-400" /> {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
