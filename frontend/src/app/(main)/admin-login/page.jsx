'use client';
import React, { useState } from 'react';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex items-center justify-center p-6 font-sans">
      {/* Background decoration for a premium feel */}
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600" />
      
      <div className="w-full max-w-[420px]">
        {/* Logo/Brand Area */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tighter text-gray-900 uppercase">
            Vastra <span className="text-indigo-600">Culture</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-light">
            Administrative Control Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10">
          <div className="mb-8">
            <h1 className="text-xl font-semibold text-gray-900">Welcome Back</h1>
            <p className="text-xs text-gray-500 mt-1">Enter your credentials to access the dashboard</p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-2">
                Admin Email
              </label>
              <input 
                type="email" 
                placeholder="admin@vastraculture.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all duration-200 outline-none text-sm"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800">
                  Password
                </label>
                <a href="#" className="text-[11px] font-semibold text-indigo-600 hover:underline">
                  Forgot?
                </a>
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-600 focus:ring-0 transition-all duration-200 outline-none text-sm"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[38px] text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Hide</span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Show</span>
                )}
              </button>
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-200"
            >
             <a href="admin/dashboard">Sign In to Dashboard</a>
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
              Secure Encrypted Session
            </span>
          </div>
        </div>

        {/* Footer Links */}
        <p className="text-center mt-8 text-gray-400 text-xs">
          Not an admin? <a href="" className="text-gray-900 font-semibold hover:underline">Return to Store</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;