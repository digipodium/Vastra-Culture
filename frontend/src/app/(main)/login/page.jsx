'use client';
import React, { useState } from 'react';
import { User, Truck, ShieldCheck, Eye, EyeOff } from 'lucide-react';

const AuthPage = () => {
  const [role, setRole] = useState('user'); // 'user', 'supplier', 'admin'
  const [showPassword, setShowPassword] = useState(false);

  const roleConfig = {
    user: { title: "Customer Access", icon: <User size={16} />, desc: "Shop the latest drops." },
    supplier: { title: "Supplier Portal", icon: <Truck size={16} />, desc: "Manage your inventory." },
    admin: { title: "Admin Console", icon: <ShieldCheck size={16} />, desc: "System oversight." }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-8 font-sans">
      <div className="w-full max-w-[400px]">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tighter uppercase mb-1">Vastra Culture</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Authentic. Aesthetic. Essential.</p>
        </div>

        {/* Role Selector: Minimalist Toggle */}
        <div className="flex border border-black/10 mb-6 p-1 bg-gray-50/50">
          {['user', 'supplier', 'admin'].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                role === r ? 'bg-black text-white' : 'text-gray-400 hover:text-black'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="border border-black/5 p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-tight flex items-center gap-2">
              {roleConfig[role].icon} {roleConfig[role].title}
            </h2>
            <p className="text-[11px] text-gray-400 mt-1">{roleConfig[role].desc}</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
              <input 
                type="email" 
                className="w-full border-b border-black/10 py-2 text-sm focus:border-black outline-none transition-colors bg-transparent"
                placeholder="name@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1 relative">
              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full border-b border-black/10 py-2 text-sm focus:border-black outline-none transition-colors bg-transparent"
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2 text-gray-400 hover:text-black"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>

            {/* Action Button */}
            <button className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.3em] mt-8 hover:bg-gray-800 transition-all active:scale-[0.98]">
              Login to {role}
            </button>

            {/* Footer Links */}
            <div className="flex justify-between items-center mt-6 text-[9px] font-bold uppercase tracking-widest text-gray-400">
              <a href="/forgot-password" className="hover:text-black transition-colors">Forgot Password?</a>
              <a href="/signup" className="hover:text-black transition-colors underline decoration-black/20">Create Account</a>
            </div>
          </form>
        </div>

        {/* Security Notice */}
        <p className="mt-8 text-center text-[8px] uppercase tracking-[0.2em] text-gray-300">
          Secured by Vastra Architecture © 2026
        </p>
      </div>
    </div>
  );
};

export default AuthPage;