'use client';
import React from 'react';
import { Shovel as Box, Building2, User, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

const SupplierSignup = () => {
  return (
    <div className="min-h-screen bg-[#FBFBFC] flex items-center justify-center p-6 md:p-12 font-sans">
      
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
        
        {/* LEFT COLUMN: Brand & Benefits */}
        <div className="bg-[#1a1a1a] p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold tracking-tighter uppercase mb-16">
              Vastra <span className="text-indigo-400">Culture</span>
            </h2>
            
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Empower your factory <br /> with global reach.
            </h1>
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Automated Logistics</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Focus on production while our system handles the complex supply chain routes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Globe size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Verified Seller Network</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">Connect directly with premium sellers looking for your specific textile quality.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
              Trusted by 500+ Indian Manufacturers
            </p>
          </div>

          {/* Decorative background element */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" />
        </div>

        {/* RIGHT COLUMN: Signup Form */}
        <div className="p-8 md:p-16">
          <div className="mb-10">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Partner Application</h3>
            <p className="text-gray-400 text-sm mt-2">Join our verified network of quality suppliers.</p>
          </div>

          <form className="space-y-5">
            {/* Row 1: Company Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Company Information</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="text" 
                  placeholder="Registered Company Name"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm"
                />
              </div>
            </div>

            {/* Row 2: Personal Contact */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <input 
                  type="tel" 
                  placeholder="Contact Number"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm"
                />
              </div>
            </div>

            {/* Row 3: Product Category */}
            <div className="space-y-2">
              <select className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 transition-all outline-none text-sm text-gray-500 appearance-none cursor-pointer">
                <option value="">Primary Product Category</option>
                <option value="apparel">Apparel & Garments</option>
                <option value="textile">Textiles & Fabrics</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            {/* Row 4:   business email */}
             <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">business Email</label>
              <input 
                type="password" 
                placeholder="enter your business email"
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm"
              />
            </div>

            {/* Row 5: Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Security</label>
              <input 
                type="password" 
                placeholder="Create Password"
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-xl shadow-gray-100 active:scale-[0.98]"
              >
                Apply to Supply <ArrowRight size={16} />
              </button>
            </div>

            <p className="text-[11px] text-center text-gray-400 leading-relaxed px-4">
              By applying, you agree to our <span className="text-gray-900 font-semibold cursor-pointer">Supplier Agreement</span> and <span className="text-gray-900 font-semibold cursor-pointer">Quality Standards</span>.
            </p>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Already a partner? <a href="supplier-login" className="text-indigo-600 font-bold hover:underline">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierSignup;