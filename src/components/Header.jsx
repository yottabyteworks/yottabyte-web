import React, { useState } from 'react';
import Logo from './Logo.jsx';

export default function Header({ currentPath, navigate, onOpenDiagnostic }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about-leadership', label: 'About Us' },
    { id: 'technical-insights', label: 'Blog' },
    { id: 'admin-portal', label: 'Admin Portal' },
  ];

  const handleNavClick = (id) => {
    navigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container/60">
      <div className="h-20 w-full px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between gap-space-md">
        {/* Brand Identity: Animated Video Logo on Header Tile */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center cursor-pointer group flex-shrink-0"
          aria-label="YottabyteWorks Home"
        >
          <Logo variant="header" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-surface-container-low/60 p-1.5 rounded-xl border border-surface-container">
          {navItems.map((item) => {
            const isActive = currentPath === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 font-body-md text-body-md rounded-lg transition-all ${
                  isActive
                    ? 'bg-surface-container text-primary font-title-md shadow-xs font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Cleanly Aligned Book Consultation Button */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md shadow-[0_2px_10px_rgba(0,97,148,0.25)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all font-semibold"
          >
            Book Consultation
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container px-6 py-4 shadow-xl flex flex-col gap-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-body-md transition-colors ${
                currentPath === item.id
                  ? 'bg-surface-container text-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md font-semibold shadow-sm"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
