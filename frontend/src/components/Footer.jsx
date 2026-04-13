import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import PrivacyPolicy from '@/app/(main)/privacy/page';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. TOP SECTION: BRAND, SOCIALS & NEWSLETTER */}
        <div className="grid lg:grid-cols-[1fr_400px] border-b border-white/10">
          <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter uppercase mb-4">Vastra <span className="">Culture.</span></h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] leading-relaxed max-w-sm">
                The premium dropshipping ecosystem connecting verified Indian manufacturers with the global market.
              </p>
            </div>
            
            {/* Social Icons Integrated into Top Section */}
            
            <div className="flex gap-16 pb-1">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">be the first to know about exclusive drops</h4>
            <div className="relative border border-white/20 px-2 py-2 flex items-center group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full outline-none text-xs tracking-widest uppercase placeholder:text-gray-700"
              />
              <button className="text-gray-500 group-hover:text-white transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. MIDDLE SECTION: NAVIGATION LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10">
          {[
            { 
              title: "Collection", 
              links: ["New Arrivals", "Best Sellers", "Archive", "Accessories"] 
            },
            { 
              title: "Company", 
              links: ["Our Story", "Sustainability", "Suppliers", "Careers"] 
            },
            { 
              title: "Assistance", 
              links: ["Track Order", "Returns", "Size Guide", "Contact"] 
            },
            { 
              title: "Legal", 
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Logistics"] 
            }
          ].map((column, idx) => (
            <div key={column.title} className={`p-10 border-white/10 ${idx !== 3 ? 'border-r' : ''}`}>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em]  mb-8">{column.title}</h5>
              <ul className="space-y-4">
                {column.links.map(link => (
                  <li key={link}>
                    <a href="/(main)/privacy" className="text-[11px] font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. BOTTOM SECTION: TRUST & COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center p-10 gap-8">
          {/* Logistics Badge */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.5em] mb-2">Logistics Partner</span>
            <div className="px-6 py-2 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-gray-400">
              Vastra Logistics India
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-medium leading-loose">
              &copy; 2026 Vastra Culture Private Ltd. <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;