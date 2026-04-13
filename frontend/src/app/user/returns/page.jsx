import React from 'react';
import { ArrowRight } from 'lucide-react';

const ReturnsPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-black">
      
      {/* 1. HEADER: No backgrounds, just clean type */}
      <header className="px-6 py-12 border-b border-black/5 text-center">
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-2">Returns & Exchanges</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">7-Day Hassle-Free Policy</p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* 2. PROCESS: Vertical stack to save space */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 border-b border-black/5 pb-16">
          {[
            { n: "01", t: "Request", d: "Select items from your order history." },
            { n: "02", t: "Pickup", d: "Our partner will collect from your door." },
            { n: "03", t: "Refund", d: "Processed within 48h of verification." }
          ].map((step) => (
            <div key={step.n} className="space-y-2">
              <span className="text-[10px] font-bold text-gray-300 tracking-widest">{step.n}</span>
              <h3 className="text-sm font-bold uppercase tracking-tight">{step.t}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>

        {/* 3. CORE CONTENT: Simple 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Policy Information */}
          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Shipping & Logistics</h4>
              <div className="space-y-4 text-xs leading-relaxed">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="font-bold uppercase tracking-tighter">Pickup Area</span>
                  <span>Pan-India (15k+ Pincodes)</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="font-bold uppercase tracking-tighter">Service Fee</span>
                  <span>Free for first return</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Refund Timelines</h4>
              <div className="space-y-4 text-xs leading-relaxed">
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="font-bold uppercase tracking-tighter">Store Credit</span>
                  <span>Instant</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-2">
                  <span className="font-bold uppercase tracking-tighter">Bank Transfer</span>
                  <span>2-4 Business Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Area & FAQ */}
          <div className="space-y-12">
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tighter">Start a Return</h3>
              <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-6">Have your order ID and phone number ready.</p>
              <button className="w-full border border-white/20 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all">
                Enter Order Portal <ArrowRight size={14} />
              </button>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Guidelines</h4>
              <div className="space-y-4 text-xs text-gray-500">
                <p>• Items must be unworn with all original tags attached.</p>
                <p>• Sale items are eligible for size exchange only.</p>
                <p>• Hygiene-sensitive items cannot be returned once opened.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4. FOOTER: Minimalist links */}
        <footer className="mt-24 pt-12 border-t border-black/5 flex flex-col items-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-6">Contact Support</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:underline">WhatsApp</a>
            <a href="#" className="hover:underline">Email</a>
            <a href="#" className="hover:underline">Phone</a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ReturnsPage;