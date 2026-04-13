'use client';
import React, { useState } from 'react';
import { Shovel as Box, Lock, Mail, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const SupplierLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6 font-sans">
      {/* Subtle brand watermark */}
      <div className="absolute top-10 left-10 opacity-20 hidden md:block">
        <h2 className="text-xl font-bold tracking-tighter uppercase">Vastra <span className="text-indigo-600">Culture</span></h2>
      </div>

      <div className="w-full max-w-[440px]">
        {/* Card Container */}
        <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
          
          {/* Top Decorative Banner */}
          <div className="h-2 bg-indigo-600 w-full" />
          
          <div className="p-8 md:p-12">
            <div className="mb-10 text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Box className="text-indigo-600" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Supplier Portal</h1>
              <p className="text-sm text-gray-400 mt-2 font-normal">Manage your inventory and track fulfillments.</p>
            </div>

            <form className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                  Business Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm placeholder:text-gray-300"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Password
                  </label>
                  <a href="#" className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 uppercase tracking-tighter">
                    Reset Access?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-sm placeholder:text-gray-300"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all transform active:scale-[0.99] shadow-lg shadow-gray-100 mt-4"
              >
               <a href="supplier/dashboard">Enter Portal</a> 
              </button>
            </form>

            {/* Support Section */}
            <div className="mt-10 pt-8 border-t border-gray-50 text-center">
              <p className="text-xs text-gray-400">
                New partner? <a href="supplier-signup" className="text-gray-900 font-bold hover:underline">Apply to Supply</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-400">
          <ShieldCheck size={14} className="text-green-500" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Vastra Verified Supplier Network</span>
        </div>
      </div>
    </div>
  );
};

export default SupplierLogin;