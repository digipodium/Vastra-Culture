'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-sans text-black">
      <div className="w-full max-w-[400px] border border-black p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl text-center font-bold tracking-tighter uppercase mb-1">Account Login</h1>
          {/* <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Access the Vastra Culture Portal</p> */}
        </header>

        {/* Login Form */}
        <form className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                className="w-full border border-black px-3 py-2.5 text-sm outline-none focus:bg-gray-50 transition-colors placeholder:text-gray-500"
                placeholder="name@email.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold uppercase tracking-widest">Password</label>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full border border-black px-3 py-2.5 text-sm outline-none focus:bg-gray-50 transition-colors placeholder:text-gray-500"
                placeholder="••••••••"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-3 h-3 accent-black rounded-none border-black" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Remember Me</span>
            </label>
            <a href="forgot-password" className="text-[10px] font-bold uppercase tracking-widest  hover:text-gray-600">
              Forgot Password?
            </a>
          </div>

          <button className="w-full bg-black text-white py-3.5 mt-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all border border-black">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-100"></span>
          </div>
          <div className="relative flex justify-center text-[9px] uppercase bg-white px-3 text-gray-800  font-bold">
          or login with
          </div>
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-[#4285F4] py-3 text-[10px] font-bold uppercase tracking-widest text-[#4285F4] hover:bg-[#4285F4]/5 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
          
          <button className="w-full flex items-center justify-center gap-3 border border-[#1877F2] py-3 text-[10px] font-bold uppercase tracking-widest text-[#1877F2] hover:bg-[#1877F2]/5 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>

        <p className="mt-10 text-center text-[10px] uppercase tracking-widest text-gray-600 font-bold">
          you don't have account? <a href="signup" className="text-black hover:underline underline-offset-4"> Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;