'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-white px-6 py-12 font-sans">
      <div className="w-full max-w-[420px]">
        
        {/* Form Container: Bordered & Premium */}
        <div className="border border-black/10 p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white shadow-gray-300">
          
          {/* Header */}
          <div className="mb-10 border-l-2 border-black pl-5 py-1">
            <h1 className="text-2xl font-black tracking-tighter uppercase leading-none text-black">
             user  Sign Up
            </h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-2">
              The Blueprint of Vastra Culture
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Full Name</label>
              <input 
                type="text" 
                className="w-full border-b border-black/10 py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-400"
                placeholder="Name"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Email</label>
              <input 
                type="email" 
                className="w-full border-b border-black/10 py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-400"
                placeholder="name@email.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1 relative">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full border-b border-black/10 py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-400"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2 text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black">Confirm Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full border-b border-black/10 py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-400"
                placeholder="••••••••"
              />
            </div>

            {/* Action Button */}
            <button className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.4em] mt-8 hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Create Account <ArrowRight size={14} />
            </button>

            {/* Alternative Login */}
            <div className="pt-6 text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                Already registered? 
                <a href="/login" className="ml-2 text-black underline decoration-black/20 hover:decoration-black transition-all">Login</a>
              </p>
            </div>
          </form>
        </div>

        {/* Support Detail */}
        <p className="mt-8 text-center text-[8px] uppercase tracking-[0.4em] text-gray-600">
          Support: help@vastraculture.com
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;