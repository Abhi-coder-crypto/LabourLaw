import { motion } from 'framer-motion';
import { Shield, Award, Users, ArrowRight, CheckCircle, MapPin, TrendingUp, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '@assets/7552418-hd_1080_1920_25fps_1783420764090.mp4';
import heroImage from '@assets/pexels-vlada-karpovich-7433855_1783420874088.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const About = () => {
  return (
    <div className="w-full">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-0 lg:min-h-[680px] lg:flex lg:items-center"
        style={{ backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)', backgroundSize: '28px 28px' }}>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-6 w-full">
          <div className="flex flex-col lg:grid lg:gap-8 items-center"
            style={{ gridTemplateColumns: '50fr 50fr' }}>

            {/* Left: text */}
            <motion.div
              initial="hidden" animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="w-full flex flex-col">
              <motion.p variants={fadeUp}
                className="font-bold text-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>
                Who We Are
              </motion.p>
              <motion.h1 variants={fadeUp}
                className="font-bold leading-[1.15] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#111111' }}>
                India's Most Trusted<br />
                <span style={{ color: '#a83a00' }}>Labour Law Partner</span>
              </motion.h1>
              <motion.p variants={fadeUp}
                className="text-base leading-relaxed mb-8 max-w-md"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#555555' }}>
                Two decades of expertise in labour law compliance, HR governance, statutory filings, and workforce management — serving 500+ organisations across India.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-nowrap gap-4 items-center">
                <Link to="/contact"
                  className="inline-flex items-center gap-2 text-white rounded-full transition-all shadow-lg hover:scale-[1.02] whitespace-nowrap px-7 py-3 font-semibold text-sm"
                  style={{ backgroundColor: '#a83a00', fontFamily: 'Poppins, sans-serif' }}>
                  Get in Touch <ArrowRight size={15} />
                </Link>
                <Link to="/services"
                  className="inline-flex items-center gap-2 rounded-full transition-all shadow-lg hover:scale-[1.02] whitespace-nowrap px-7 py-3 font-semibold text-sm border"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00', borderColor: '#a83a00' }}>
                  Our Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: collage */}
            <motion.div
              className="w-full mt-10 lg:mt-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="flex gap-3" style={{ height: '560px', paddingLeft: '2%' }}>
                <div className="flex flex-col" style={{ width: '58%' }}>
                  <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, delay: 0.3 }}
                    className="rounded-2xl overflow-hidden shadow-sm" style={{ flex: 1 }}>
                    <video src={heroVideo} autoPlay loop muted playsInline aria-hidden="true"
                      className="w-full h-full object-cover" style={{ display: 'block' }} />
                  </motion.div>
                </div>
                <div className="flex flex-col gap-3" style={{ width: '42%' }}>
                  <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.4 }}
                    className="rounded-2xl overflow-hidden shadow-sm" style={{ flex: '0 0 42%' }}>
                    <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.5 }}
                    className="rounded-2xl overflow-hidden shadow-sm" style={{ flex: 1 }}>
                    <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#a83a00' }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '21+',  label: 'Years of Expertise' },
              { number: '15+',  label: 'States Covered' },
              { number: '98%',  label: 'Client Retention' },
            ].map((stat, i) => (
              <motion.div key={i} className="text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <p className="font-bold text-3xl mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#fda102' }}>{stat.number}</p>
                <p className="text-xs uppercase tracking-widest text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-14 items-stretch">

            {/* Left: images */}
            <motion.div className="lg:w-5/12 shrink-0 flex flex-col"
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex gap-3 h-full" style={{ minHeight: '420px' }}>
                <div className="flex flex-col" style={{ width: '58%' }}>
                  <div className="rounded-2xl overflow-hidden shadow-md" style={{ flex: 1 }}>
                    <video src={heroVideo} autoPlay loop muted playsInline aria-hidden="true"
                      className="w-full h-full object-cover" style={{ display: 'block' }} />
                  </div>
                </div>
                <div className="flex flex-col gap-3" style={{ width: '42%' }}>
                  <div className="rounded-2xl overflow-hidden shadow-md" style={{ flex: '0 0 48%' }}>
                    <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md" style={{ flex: 1 }}>
                    <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: story text */}
            <motion.div className="flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="font-bold text-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>Our Story</p>
              <h2 className="font-bold leading-[1.2] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#111111' }}>
                Founded on a Vision of <span style={{ color: '#a83a00' }}>Simplified Compliance</span>
              </h2>
              <div className="space-y-4 mb-8"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#555555', fontSize: '0.93rem', lineHeight: 1.8 }}>
                <p>Founded in 2003, Maru Consultancy Services began with a singular vision: to bridge the gap between complex legal statutes and practical business operations. What started as a boutique advisory firm in Mumbai has grown into a pan-India compliance powerhouse.</p>
                <p>We recognized early that compliance is not merely about avoiding penalties — it's about creating an ethical, structured, and highly motivated workforce aligned with India's evolving labour law framework.</p>
                <p>Today, we manage compliance for over 500 organisations — from dynamic startups to large corporates — processing millions of data points annually while maintaining a pristine record of legal adherence.</p>
              </div>
              <div className="space-y-3 mb-8">
                {['Pan-India presence across 15+ states', 'Experts in New Labour Codes & statutory compliance', 'Tech-enabled compliance tracking & reporting'].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={17} style={{ color: '#fda102', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#333333' }}>{pt}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact"
                className="inline-flex items-center gap-2 rounded-full shadow-lg hover:scale-[1.02] transition-all w-fit px-7 py-3 font-semibold text-sm text-white"
                style={{ backgroundColor: '#a83a00', fontFamily: 'Poppins, sans-serif' }}>
                Start a Conversation <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#f9f5f2' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-bold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>Our Purpose</p>
            <h2 className="font-bold"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#111111' }}>
              Mission &amp; Vision
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                icon: <Shield size={28} />,
                label: 'Our Mission',
                text: 'To empower businesses with foolproof compliance strategies, enabling them to focus on growth while we secure their legal and operational foundation. We strive to make compliance a seamless, automated, and invisible part of corporate success.',
              },
              {
                icon: <TrendingUp size={28} />,
                label: 'Our Vision',
                text: 'To be the undisputed authority and most trusted partner in India for comprehensive labour law management, setting the gold standard for HR governance and ethical workforce practices across all industries and scales of business.',
              },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white"
                  style={{ backgroundColor: '#a83a00' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold mb-4 text-xl"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#111111' }}>{item.label}</h3>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#555555', lineHeight: 1.8, fontSize: '0.92rem' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#a83a00' }}>
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-bold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#fda102' }}>What Drives Us</p>
            <h2 className="font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}>
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon: <Shield size={28} />, title: 'Absolute Integrity', desc: 'We uphold the highest ethical standards in every engagement. In compliance, there are no shortcuts — only rigorous adherence to the letter and spirit of the law.' },
              { icon: <Award size={28} />, title: 'Unmatched Excellence', desc: 'We deliver precision in every detail, backed by profound legal knowledge, continuous learning, and a commitment to staying ahead of every regulatory change.' },
              { icon: <Handshake size={28} />, title: 'Client Partnership', desc: 'We act as a genuine extension of your team — deeply invested in your operational continuity, your growth, and your long-term success as a compliant enterprise.' },
            ].map((v, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center rounded-2xl p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)' }}>
                <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#fda102' }}>
                  <span style={{ color: '#ffffff' }}>{v.icon}</span>
                </div>
                <h4 className="font-bold text-white text-lg mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>{v.title}</h4>
                <p style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Milestones ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-bold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>Our Journey</p>
            <h2 className="font-bold"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#111111' }}>
              Key Milestones
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2003', event: 'Established as a boutique advisory firm in Mumbai with a focus on Factory Act compliance.' },
              { year: '2009', event: 'Expanded operations to Delhi NCR and Bangalore, becoming a true pan-India firm.' },
              { year: '2016', event: 'Launched proprietary compliance tracking tools to serve enterprise clients at scale.' },
              { year: '2023', event: 'Became a go-to authority on the New Labour Codes, serving 500+ organisations.' },
            ].map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-7 border-l-4"
                style={{ backgroundColor: '#f9f5f2', borderLeftColor: '#fda102' }}>
                <p className="font-bold text-2xl mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>{m.year}</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#555555', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {m.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ───────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#f9f5f2' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="font-bold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>The People Behind Our Work</p>
            <h2 className="font-bold"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#111111' }}>
              Our Leadership Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { name: 'Ramesh Maru',       role: 'Founder & Managing Director',   initial: 'R', spec: 'Labour Law & Statutory Compliance' },
              { name: 'Priya Sharma',      role: 'Head of HR Advisory',            initial: 'P', spec: 'HR Policy & Workforce Management' },
              { name: 'Ankit Verma',       role: 'Director — Payroll & Statutory', initial: 'A', spec: 'Payroll Processing & PF/ESIC' },
              { name: 'Sunita Patel',      role: 'Senior Legal Consultant',        initial: 'S', spec: 'Labour Litigation & Compliance Audits' },
            ].map((member, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                {/* Avatar area */}
                <div className="h-48 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #a83a00 0%, #7a2900 100%)' }}>
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white border-4 border-white/30"
                    style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: 'rgba(255,255,255,0.15)' }}>
                    {member.initial}
                  </div>
                </div>
                {/* Info */}
                <div className="p-6 text-center">
                  <h4 className="font-bold text-base mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#111111' }}>{member.name}</h4>
                  <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: '#a83a00', fontFamily: 'Poppins, sans-serif' }}>{member.role}</p>
                  <div className="h-px mb-3" style={{ backgroundColor: '#f0f0f0' }} />
                  <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: '#888888', lineHeight: 1.6 }}>{member.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Left */}
            <motion.div className="flex-1"
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="font-bold text-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#a83a00' }}>Why Choose Us</p>
              <h2 className="font-bold leading-[1.2] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#111111' }}>
                What Sets Maru Apart from<br /><span style={{ color: '#a83a00' }}>the Rest</span>
              </h2>
              <p className="mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#555555', fontSize: '0.93rem', lineHeight: 1.8 }}>
                We don't just file paperwork — we architect robust compliance frameworks. With India's labour law landscape shifting under the New Codes, you need a partner who anticipates regulatory changes before they impact your bottom line.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <MapPin size={18} />, title: 'Pan-India Reach', desc: 'State-specific expertise across all major industrial hubs from Kashmir to Kanyakumari.' },
                  { icon: <Shield size={18} />, title: 'Proactive Risk Management', desc: 'We identify vulnerabilities before they become liabilities — our audits are proactive, not reactive.' },
                  { icon: <Users size={18} />, title: 'Dedicated Client Teams', desc: 'Every client gets a dedicated consultant who knows their business inside and out.' },
                ].map((item, i) => (
                  <motion.div key={i} className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: '#fda102' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#111111' }}>{item.title}</h5>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', color: '#666666' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Right: image collage */}
            <motion.div className="lg:w-[46%] shrink-0"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="flex gap-3" style={{ height: '460px' }}>
                <div className="flex flex-col" style={{ width: '58%' }}>
                  <div className="rounded-2xl overflow-hidden shadow-md" style={{ flex: 1 }}>
                    <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-3" style={{ width: '42%' }}>
                  <div className="rounded-2xl overflow-hidden shadow-md" style={{ flex: '0 0 48%' }}>
                    <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md" style={{ flex: 1 }}>
                    <video src={heroVideo} autoPlay loop muted playsInline aria-hidden="true"
                      className="w-full h-full object-cover" style={{ display: 'block' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Join the Team CTA ─────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#a83a00' }}>
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="font-bold text-sm uppercase tracking-widest mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#fda102' }}>
            Join Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.07 }}
            className="font-bold text-white mb-5"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}>
            Join Our Roster of Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.14 }}
            className="mb-8 text-sm leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: 'rgba(255,255,255,0.8)' }}>
            We are always looking for sharp legal minds and HR professionals who share our dedication to compliance excellence and client success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
            <Link to="/careers"
              className="inline-flex items-center gap-2 rounded-full font-semibold px-8 py-3.5 text-sm transition-all hover:scale-[1.03] shadow-lg"
              style={{ backgroundColor: '#fda102', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
              View Career Opportunities <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
