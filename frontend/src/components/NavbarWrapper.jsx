'use client';
import React, { useState, useEffect } from 'react';

const NavbarWrapper = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to detect scroll for a dynamic "premium" feel
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-black/5 py-2 shadow-sm' 
          : 'bg-white border-transparent py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        {/* Your Navbar content will be rendered here */}
        {children}
      </div>
    </header>
  );
};

export default NavbarWrapper;