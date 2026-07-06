import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Clientele', path: '/clientele' },
    { name: 'Resources', path: '/resources' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Top Teal Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-2">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-xs font-bold">f</a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-xs font-bold">in</a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-xs font-bold">tw</a>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-sm">
            <a href="mailto:contact@labourcodes.in" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail size={13} /> contact@labourcodes.in
            </a>
            <span className="text-white/40">|</span>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone size={13} /> +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 h-20 flex justify-between items-center">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-1.5 h-14 bg-gradient-to-b from-teal-500 to-teal-700 rounded-full"></div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-2xl text-navy-900 leading-none">Labour Codes</span>
              </div>
              <span className="text-[10px] text-gray-400 font-semibold tracking-[0.15em] uppercase mt-1">Labour Laws | Compliance | Staffing</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm transition-colors border-b-2 pb-1 ${
                  location.pathname === link.path
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-700 hover:text-teal-600 hover:border-teal-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-navy-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors shadow-sm ml-2">
              Let's Connect
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-navy-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-6 py-4 border-b border-gray-100 font-medium text-sm ${location.pathname === link.path ? 'text-teal-600 bg-mint-50' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-4">
              <Link to="/contact" className="block w-full text-center bg-navy-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Let's Connect
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-8 border-t-4 border-teal-500">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-teal-500 rounded-full"></div>
              <span className="font-display font-bold text-2xl text-white">Labour Codes</span>
            </div>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              India's premier professional services firm navigating the complexities of New Labour Codes, HR compliance, and staffing solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors text-xs font-bold">f</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors text-xs font-bold">in</a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors text-xs font-bold">tw</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-6 text-white uppercase tracking-wider">Recent Updates</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/resources" className="group block">
                  <p className="text-xs text-teal-400 mb-1">Oct 15, 2024</p>
                  <p className="text-white/70 group-hover:text-white text-sm font-medium transition-colors leading-snug">Understanding the New Wage Code Implications</p>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="group block">
                  <p className="text-xs text-teal-400 mb-1">Oct 02, 2024</p>
                  <p className="text-white/70 group-hover:text-white text-sm font-medium transition-colors leading-snug">Navigating State-Specific Leave Policies</p>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-6 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <span>15th Floor, Nariman Point, Mumbai, Maharashtra 400021</span>
              </li>
              <li className="flex gap-3 text-white/60 text-sm">
                <Phone size={16} className="text-teal-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-white/60 text-sm">
                <Mail size={16} className="text-teal-400 shrink-0" />
                <span>contact@labourcodes.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-6 text-white uppercase tracking-wider">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">Subscribe to receive critical compliance updates directly in your inbox.</p>
            <form className="flex flex-col gap-3">
              <input type="email" placeholder="Your Email Address" className="bg-white/10 border border-white/20 text-white rounded px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500 transition-colors placeholder:text-white/40" />
              <button type="button" className="bg-teal-500 text-white px-4 py-2.5 rounded text-sm font-bold hover:bg-teal-600 transition-colors">Subscribe Now</button>
            </form>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-8 border-t border-white/10 text-center md:text-left text-white/40 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Labour Codes Consulting. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="tel:+919876543210" className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-teal-600 hover:scale-110 transition-all">
          <Phone size={22} />
        </a>
        <a href="https://wa.me/919876543210" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
          <MessageCircle size={26} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
