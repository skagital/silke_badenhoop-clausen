import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-warm-grey text-soft-black selection:bg-earth-brown selection:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-warm-grey/90 backdrop-blur-sm border-b border-soft-black/5 transition-all duration-300">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-light tracking-widest uppercase hover:text-earth-brown transition-colors" onClick={closeMenu}>
            SBC Architektur
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 text-sm tracking-wide font-medium">
            <Link to="/" className="hover:text-earth-brown transition-colors">PROJEKTE</Link>
            <span className="cursor-not-allowed opacity-50" title="Coming Soon">LEISTUNGEN</span>
            <span className="cursor-not-allowed opacity-50" title="Coming Soon">PROFIL</span>
            <span className="cursor-pointer hover:text-earth-brown transition-colors" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>KONTAKT</span>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-soft-black focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-warm-grey border-b border-soft-black/5 px-6 py-8 flex flex-col space-y-6 text-lg animate-fade-in">
            <Link to="/" className="hover:text-earth-brown" onClick={closeMenu}>PROJEKTE</Link>
            <span className="opacity-50">LEISTUNGEN</span>
            <span className="opacity-50">PROFIL</span>
            <span className="cursor-pointer hover:text-earth-brown" onClick={() => { closeMenu(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>KONTAKT</span>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-warm-grey border-t border-soft-black/10 mt-24 md:mt-48">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            
            {/* Column 1: Address */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-earth-brown mb-6">Büro</h4>
              <p className="leading-relaxed font-light">
                SBC Architektur<br />
                Silke Badenhoop-Clausen<br />
                Hafenstraße 12<br />
                20354 Hamburg
              </p>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-earth-brown mb-6">Kontakt</h4>
              <p className="leading-relaxed font-light">
                <a href="mailto:hallo@sbc-architektur.de" className="hover:text-earth-brown transition-colors block mb-2">
                  hallo@sbc-architektur.de
                </a>
                <a href="tel:+494012345678" className="hover:text-earth-brown transition-colors">
                  +49 (0) 40 123 456 78
                </a>
              </p>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-earth-brown mb-6">Rechtliches</h4>
              <ul className="space-y-2 font-light text-sm">
                <li><a href="#" className="hover:text-earth-brown transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-earth-brown transition-colors">Datenschutz</a></li>
              </ul>
            </div>

          </div>
          
          <div className="mt-24 pt-8 border-t border-soft-black/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; {new Date().getFullYear()} SBC Architektur. Alle Rechte vorbehalten.</p>
            <p className="mt-2 md:mt-0">Nordic Warmth Design</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;