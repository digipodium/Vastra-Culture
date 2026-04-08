'use client';

import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-white font-sans tracking-tight border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* MAIN CONSOLIDATED SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* 1. BRAND IDENTITY (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-xl font-bold tracking-[0.5em] uppercase">LUXURY</h2>
            <p className="text-gray-500 text-[10px] leading-relaxed uppercase tracking-[0.2em] max-w-xs">
              Redefining elegance through premium digital experiences. 
              Built on heritage, designed for the future.
            </p>
            <div className="flex gap-6 text-gray-500 pt-2">
              <Instagram size={16} className="hover:text-white cursor-pointer transition-colors" />
              <Facebook size={16} className="hover:text-white cursor-pointer transition-colors" />
              <Twitter size={16} className="hover:text-white cursor-pointer transition-colors" />
              <Youtube size={16} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* 2. NAVIGATION LINKS (6 Columns) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {['Contact Us', 'Shipping', 'Returns', 'FAQ'].map((link) => (
                  <li key={link} className="text-[11px] text-gray-500 hover:text-white cursor-pointer transition-colors uppercase tracking-[0.2em]">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">The Brand</h4>
              <ul className="space-y-3">
                {['Our Story', 'Sustainability', 'Legal', 'Privacy'].map((link) => (
                  <li key={link} className="text-[11px] text-gray-500 hover:text-white cursor-pointer transition-colors uppercase tracking-[0.2em]">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. SCROLL TO TOP (2 Columns) */}
          <div className="md:col-span-2 flex md:justify-end items-start h-full">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] text-gray-500 hover:text-white transition-colors uppercase tracking-[0.4em] font-bold"
            >
              <span className="hidden lg:block">Top</span>
              <div className="p-3 border border-white/10 group-hover:border-white transition-all duration-300 rounded-full">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT LINE */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="flex text-[9px] text-gray-600 font-bold item-center justify-center  uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} LUXURY RETAIL GROUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <span className="text-[8px] text-gray-700 uppercase tracking-widest cursor-default">Designed for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;