export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  department: string;
  experience: string;
  category: 'internal' | 'client';
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  ctc: string;
  postedOn: string;
};

export const jobs: Job[] = [
  {
    slug: 'senior-labour-law-consultant',
    title: 'Senior Labour Law Consultant',
    location: 'Mumbai',
    type: 'Full-time',
    department: 'Legal Advisory',
    experience: '5–8 years',
    category: 'internal',
    ctc: '₹12–18 LPA',
    postedOn: 'July 05, 2025',
    about:
      'We are looking for a seasoned Senior Labour Law Consultant to lead end-to-end compliance mandates for our corporate clients across manufacturing, IT, and services sectors. You will be the primary legal advisor on all labour law matters, drafting opinions, representing clients, and proactively keeping them ahead of regulatory changes — especially the evolving New Labour Codes.',
    responsibilities: [
      'Lead labour law compliance audits for large corporates and multinationals across India',
      'Draft and review employment contracts, standing orders, HR policies, and POSH documentation',
      'Represent clients before Labour Courts, Industrial Tribunals, and Conciliation Officers',
      'Advise on New Labour Code implications — Wages, IR, OSH, and Social Security Codes',
      'Mentor junior consultants and conduct internal knowledge-sharing sessions',
      'Maintain deep expertise on state-specific amendments and notifications',
      'Prepare monthly compliance reports and risk assessments for client leadership teams',
    ],
    requirements: [
      'LLB / LLM from a recognized university with specialization in Labour / Industrial Law',
      '5–8 years of hands-on experience in labour law advisory or litigation',
      'Deep knowledge of Factories Act, CLRA, ESIC, EPF, Shops & Establishments Act',
      'Working knowledge of the New Labour Codes (all 4 Codes)',
      'Experience handling labour court proceedings independently',
      'Excellent written and verbal communication skills in English and Hindi',
    ],
    niceToHave: [
      'Exposure to multi-state compliance management',
      'Prior experience in a labour law firm or compliance consultancy',
      'Working knowledge of HRMS or payroll software',
    ],
  },
  {
    slug: 'payroll-compliance-manager',
    title: 'Payroll Compliance Manager',
    location: 'Delhi NCR',
    type: 'Full-time',
    department: 'Operations',
    experience: '4–6 years',
    category: 'internal',
    ctc: '₹8–14 LPA',
    postedOn: 'July 03, 2025',
    about:
      'We need a meticulous Payroll Compliance Manager to oversee end-to-end payroll processing and statutory compliance for our growing client portfolio. You will ensure every salary structure is Code-on-Wages compliant, every PF/ESIC filing is on time, and every F&F settlement is legally sound.',
    responsibilities: [
      'Manage monthly payroll processing for 500+ employees across multiple client accounts',
      'Design and audit salary structures compliant with the Code on Wages (50% basic wage rule)',
      'File monthly PF, ESIC, PT, and LWF contributions without lapses',
      'Compute and process Full & Final settlements including gratuity and leave encashment',
      'Liaise with PF/ESIC authorities on queries, inspections, and employee grievances',
      'Implement and integrate payroll software (Keka, GreytHR, Spine, etc.) for clients',
      'Generate monthly payroll MIS reports for client management teams',
    ],
    requirements: [
      "Bachelor's degree in Commerce, HR, or Law; MBA (HR) preferred",
      '4–6 years of payroll processing and statutory compliance experience',
      'Strong knowledge of EPF Act, ESI Act, Payment of Wages Act, and Code on Wages',
      'Proficiency with at least one HRMS / payroll platform',
      'Advanced Excel skills for payroll reconciliation and MIS reporting',
      'High attention to detail and ability to manage multiple client accounts simultaneously',
    ],
    niceToHave: [
      'Certification in payroll or HR compliance',
      'Experience with TDS on salary (Form 24Q) and Form 16 generation',
      'Prior experience managing payroll for manufacturing or contract workforce',
    ],
  },
  {
    slug: 'statutory-audit-specialist',
    title: 'Statutory Audit Specialist',
    location: 'Bangalore',
    type: 'Full-time',
    department: 'Audits',
    experience: '3–5 years',
    category: 'internal',
    ctc: '₹7–11 LPA',
    postedOn: 'June 28, 2025',
    about:
      "As a Statutory Audit Specialist, you will conduct thorough compliance audits across our clients' establishments — examining payroll records, statutory registers, contractor compliance, and factory documentation. Your findings directly protect clients from regulatory action and employee disputes.",
    responsibilities: [
      'Conduct on-site and desk-based labour law compliance audits for diverse client establishments',
      'Review statutory registers under Factories Act, CLRA, Shops Act, and all applicable legislation',
      'Prepare detailed audit reports with risk ratings and prioritized remediation action plans',
      'Audit contractor compliance — registers, muster rolls, wage statements, and licences',
      'Track and follow up on audit findings until all gaps are closed',
      'Stay current on new notifications, amendments, and enforcement trends',
      'Present audit findings to client HR heads and senior management',
    ],
    requirements: [
      'LLB or B.Com / MBA (HR) with strong labour law knowledge',
      '3–5 years of experience in labour law auditing or compliance advisory',
      'Familiarity with Factory Act, CLRA, EPF Act, ESI Act, Shops & Establishments Act',
      'Strong report-writing and analytical skills',
      'Ability to travel to client sites across Karnataka and nearby states',
    ],
    niceToHave: [
      'Prior experience at a Big 4 or labour law consultancy',
      'Knowledge of New Labour Codes (OSH Code, IR Code)',
      'Experience with POSH Act compliance audits',
    ],
  },
  {
    slug: 'hr-business-partner',
    title: 'HR Business Partner',
    location: 'Pune',
    type: 'Full-time',
    department: 'Internal HR',
    experience: '4–7 years',
    category: 'internal',
    ctc: '₹9–15 LPA',
    postedOn: 'June 25, 2025',
    about:
      "We are building our internal HR function and need an experienced HR Business Partner to work closely with our leadership team. You will manage the full employee lifecycle — from talent acquisition to engagement, performance, and compliance — ensuring our internal practices are as exemplary as the compliance standards we hold our clients to.",
    responsibilities: [
      'Partner with business heads to drive HR strategy, workforce planning, and talent acquisition',
      'Manage end-to-end recruitment for legal, payroll, audit, and operations roles',
      'Design and implement performance management, appraisal cycles, and career development programs',
      'Handle employee relations, grievance management, and disciplinary proceedings',
      'Maintain all internal HR documentation — contracts, policies, standing orders',
      'Drive employee engagement initiatives, satisfaction surveys, and retention programs',
      'Ensure internal compliance with all applicable labour laws and maintain statutory records',
    ],
    requirements: [
      'MBA (HR) from a reputed institution',
      '4–7 years of HR generalist / HRBP experience, preferably in a professional services firm',
      'Sound knowledge of labour law basics — EPF, ESIC, POSH, Shops Act',
      'Excellent interpersonal, negotiation, and conflict resolution skills',
      'Experience with HRMS tools and HR analytics',
    ],
    niceToHave: [
      'Prior experience in a legal, consulting, or compliance firm',
      'Certification in HR (SHRM, XLRI, etc.)',
      'Experience managing HR for a team of 50–200 employees',
    ],
  },
  {
    slug: 'plant-hr-head',
    title: 'Plant HR Head',
    location: 'Ahmedabad',
    type: 'Full-time',
    department: 'Manufacturing',
    experience: '8–12 years',
    category: 'client',
    ctc: '₹18–26 LPA',
    postedOn: 'July 07, 2025',
    about:
      'Our client, a leading Tier-1 automotive components manufacturer in Ahmedabad, is looking for a Plant HR Head to manage all HR and IR operations for a manufacturing unit of 800+ employees. This is a critical leadership role requiring strong industrial relations expertise and hands-on experience in union management.',
    responsibilities: [
      'Lead all HR and Industrial Relations functions for a large manufacturing plant',
      'Manage union negotiations, wage settlements, and long-term wage agreements',
      'Oversee statutory compliance — Factory Act, CLRA, EPF, ESIC, and all applicable Acts',
      'Drive talent acquisition, workforce planning, and contract labour management',
      'Handle disciplinary proceedings, grievance redressal, and employee welfare programs',
      'Coordinate with corporate HR and legal teams on policy implementation',
      'Liaise with Factory Inspectors, Labour Officers, and other statutory authorities',
    ],
    requirements: [
      'MBA (HR) / MSW / LLB with 8–12 years in plant / manufacturing HR',
      'Strong Industrial Relations background — union negotiations, charter of demands',
      'In-depth knowledge of Factories Act, CLRA, EPF, ESIC, and New Labour Codes',
      'Proven track record in managing blue-collar workforce of 500+',
      'Excellent stakeholder management and crisis resolution skills',
    ],
    niceToHave: [
      'Experience in automotive or auto-ancillary sector',
      'Bilingual proficiency in Hindi and Gujarati',
      'Post-graduate diploma in Industrial Relations',
    ],
  },
  {
    slug: 'compliance-executive',
    title: 'Compliance Executive',
    location: 'Chennai',
    type: 'Contract',
    department: 'IT Services',
    experience: '2–4 years',
    category: 'client',
    ctc: '₹4–7 LPA',
    postedOn: 'July 06, 2025',
    about:
      'A leading IT services company in Chennai is hiring a Compliance Executive to manage their day-to-day statutory filings and labour law compliance. This is a contract role (12 months, renewable) ideal for a detail-oriented compliance professional who thrives in a fast-paced technology environment.',
    responsibilities: [
      'Manage monthly PF, ESIC, PT, and LWF filings for 300+ employees',
      'Maintain statutory registers under applicable IT / ITES-specific labour laws',
      'Coordinate with vendors and contractors on compliance documentation',
      'Prepare compliance MIS reports for the HR head and finance team',
      'Support statutory audits and respond to government notices',
      'Track compliance calendar and ensure zero missed deadlines',
    ],
    requirements: [
      'B.Com / BBA / MBA (HR) with 2–4 years of statutory compliance experience',
      'Working knowledge of EPF, ESIC, Professional Tax, and Shops & Establishments Act',
      'Proficiency with government portals — EPFO Unified Portal, ESIC portal, TRACES',
      'Strong organizational skills and attention to detail',
    ],
    niceToHave: [
      'Prior experience in an IT / ITES company',
      'Knowledge of TDS filing (Form 24Q)',
      'Experience with payroll software (Keka, GreytHR)',
    ],
  },
  {
    slug: 'ir-manager',
    title: 'IR Manager (Industrial Relations)',
    location: 'Gurgaon',
    type: 'Full-time',
    department: 'Automotive',
    experience: '6–10 years',
    category: 'client',
    ctc: '₹14–20 LPA',
    postedOn: 'July 01, 2025',
    about:
      'A top-tier automotive OEM in Gurgaon is looking for a seasoned IR Manager to manage industrial relations for their NCR manufacturing operations. The ideal candidate will have deep experience in union management, collective bargaining, and dispute resolution in a large-scale manufacturing setup.',
    responsibilities: [
      'Manage all Industrial Relations activities — union negotiations, bipartite meetings, and settlements',
      'Handle domestic enquiries, disciplinary proceedings, and conciliation matters',
      'Represent the company before Labour Courts and Conciliation Officers',
      'Ensure compliance with Factories Act, Industrial Disputes Act, and New Labour Codes',
      'Develop and maintain positive employee relations through structured engagement programs',
      'Monitor shop-floor IR climate and proactively address potential flashpoints',
    ],
    requirements: [
      'LLB / MBA (HR) / MSW with specialization in Industrial Relations',
      '6–10 years of IR experience in a large manufacturing environment',
      'Proven experience in union negotiations and long-term wage settlement',
      'Deep knowledge of Industrial Disputes Act, Trade Unions Act, and New Labour Codes',
      'Strong communication and negotiation skills in Hindi and English',
    ],
    niceToHave: [
      'Prior experience in automotive or heavy manufacturing',
      'Experience handling multi-union environments',
    ],
  },
  {
    slug: 'welfare-officer',
    title: 'Welfare Officer',
    location: 'Hyderabad',
    type: 'Full-time',
    department: 'Textiles',
    experience: '3–5 years',
    category: 'client',
    ctc: '₹5–8 LPA',
    postedOn: 'June 30, 2025',
    about:
      'A large textile manufacturing company in Hyderabad is seeking a certified Welfare Officer under the Factories Act. You will be responsible for the health, safety, and welfare of factory workers, implementing welfare schemes, and ensuring full compliance with Factories Act welfare provisions.',
    responsibilities: [
      'Implement and monitor welfare programs for 600+ factory workers',
      'Ensure compliance with all welfare provisions under the Factories Act (canteen, creche, rest rooms, etc.)',
      'Investigate and redress employee welfare grievances',
      'Coordinate with the factory management on safety, health, and hygiene standards',
      'Prepare welfare reports for Factory Inspector visits and internal audits',
      'Conduct worker awareness programs on rights, benefits, and safety',
    ],
    requirements: [
      "Government-recognized Welfare Officer certification / Diploma in Labour Welfare",
      '3–5 years of experience as a Welfare Officer in a factory',
      'Knowledge of Factories Act, ESI Act, and state-specific factory rules',
      'Ability to communicate effectively in Telugu and Hindi',
    ],
    niceToHave: [
      'Prior experience in textile or garment manufacturing',
      'Knowledge of POSH Act and gender sensitivity programs',
    ],
  },
  {
    slug: 'recruitment-specialist',
    title: 'Recruitment Specialist',
    location: 'Mumbai',
    type: 'Contract',
    department: 'Retail',
    experience: '2–4 years',
    category: 'client',
    ctc: '₹4–6 LPA',
    postedOn: 'June 27, 2025',
    about:
      "A fast-growing organized retail chain is hiring a Recruitment Specialist to manage high-volume hiring for their store operations across Mumbai. This is a contract role (6 months, potential for extension) focused on sourcing, screening, and onboarding front-line retail staff at scale.",
    responsibilities: [
      'Manage end-to-end recruitment for front-line retail roles (store associates, supervisors, cashiers)',
      'Source candidates through job portals, walk-ins, referrals, and campus drives',
      'Screen, shortlist, and coordinate interviews with store managers',
      'Manage offer rollouts and pre-joining documentation',
      'Maintain recruitment MIS — requisitions, TAT, offer-to-joining ratio',
      'Coordinate background verification and new employee onboarding',
    ],
    requirements: [
      'MBA (HR) or equivalent with 2–4 years of high-volume recruitment experience',
      'Experience hiring front-line or blue-collar workforce at scale',
      'Familiarity with job portals — Naukri, Indeed, LinkedIn, Apna',
      'Strong communication and vendor management skills',
    ],
    niceToHave: [
      'Prior experience in retail or FMCG recruitment',
      'Experience with ATS (Applicant Tracking Systems)',
    ],
  },
];
