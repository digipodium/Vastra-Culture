'use client';
import React, { useState } from 'react';
import { User, Truck, ShieldCheck, Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';

// --- Validation Schema ---
const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid Email'),
  password: Yup.string().required('Password is required'),
});

const AuthPage = () => {
  const [role, setRole] = useState('user'); // 'user', 'supplier', 'admin'
  const [showPassword, setShowPassword] = useState(false);

  const roleConfig = {
    user: { title: "Customer Access", icon: <User size={16} />, desc: "Shop the latest drops.", endpoint: "/user/authenticate" },
    supplier: { title: "Supplier Portal", icon: <Truck size={16} />, desc: "Manage your inventory.", endpoint: "/supplier/authenticate" },
    admin: { title: "Admin Console", icon: <ShieldCheck size={16} />, desc: "System oversight.", endpoint: "/admin/authenticate" }
  };

  // --- Formik Logic ---
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');

      try {
        const response = await axios.post(`${baseUrl}/api/auth/login`, {
          email: values.email,
          password: values.password,
        });
        toast.success(`${role.toUpperCase()} Login Successful`);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.user?.role || role);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect based on role
        const userRole = response.data.user?.role || role;
        if (userRole === 'admin') {
          window.location.href = '/admin-dashboard';
        } else if (userRole === 'supplier' || userRole === 'seller') {
          window.location.href = '/supplier-dashboard';
        } else {
          window.location.href = '/';
        }
      } catch (err) {
        const status = err.response?.status;
        const message = err.response?.data?.message;

        if (status === 401) {
          toast.error(message || "Invalid email or password.");
        } else if (status === 400) {
          toast.error(message || "Please fill in all fields.");
        } else if (!err.response) {
          toast.error("Cannot connect to server. Please check if backend is running.");
        } else {
          toast.error(message || "Login failed. Please try again.");
        }
      }
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-8 font-sans">
      <div className="w-full max-w-[420px]">
        
        {/* Brand Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tighter uppercase mb-1 text-black">Vastra Culture</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Authentic • Aesthetic • Essential</p>
        </div>

        {/* Role Selector: Minimalist Toggle */}
        <div className="flex border border-black/10 mb-8 p-1 bg-gray-50/50 rounded-lg">
          {['user', 'supplier', 'admin'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-md ${
                role === r ? 'bg-black text-white shadow-lg' : 'text-gray-400 hover:text-black'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="border border-black/5 p-8 md:p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-3xl">
          <div className="mb-8 border-l-2 border-black pl-4">
            <h2 className="text-sm font-black uppercase tracking-tight flex items-center gap-2 text-black">
              {roleConfig[role].icon} {roleConfig[role].title}
            </h2>
            <p className="text-[11px] font-medium text-gray-400 mt-1">{roleConfig[role].desc}</p>
          </div>

          {/* Social Login (Only for Users) */}
          {role === 'user' && (
            <>
              <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-3 text-[10px] font-bold uppercase tracking-widest border border-gray-100 rounded-xl bg-white text-gray-700 hover:bg-gray-50 transition-all mb-6">
                <svg className="w-4 h-auto" viewBox="0 0 46 47" fill="none"><path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" /><path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" /><path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" /><path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" /></svg>
                Google Login
              </button>
              <div className="py-3 flex items-center text-[9px] text-gray-300 uppercase before:flex-1 before:border-t before:border-gray-100 before:me-4 after:flex-1 after:border-t after:border-gray-100 after:ms-4 mb-6 font-bold tracking-[0.3em]">Or</div>
            </>
          )}

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-widest text-black flex items-center gap-2">
                <Mail size={10} /> Email Address
              </label>
              <input 
                name="email"
                type="email" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full border-b ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-black/10'} py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-200`}
                placeholder="name@vastra.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1 relative">
              <label className="text-[9px] font-bold uppercase tracking-widest text-black flex items-center gap-2">
                <Lock size={10} /> Password
              </label>
              <input 
                name="password"
                type={showPassword ? "text" : "password"} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`w-full border-b ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-black/10'} py-2 text-sm focus:border-black outline-none transition-colors bg-transparent pr-8 placeholder:text-gray-200`}
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

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  onChange={formik.handleChange}
                  className="size-3.5 border-gray-300 rounded text-black focus:ring-0" 
                />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">Remember</span>
              </label>
              <a href="#" className="text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors underline decoration-black/10">Forgot?</a>
            </div>

            {/* Action Button */}
            <button 
              type="submit"
              className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.4em] mt-8 hover:bg-gray-800 transition-all active:scale-[0.95] flex items-center justify-center gap-2"
            >
              Authorize {role} <ArrowRight size={14} />
            </button>
          </form>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 text-center">
           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
             New to the culture? <a href="/signup" className="text-black underline decoration-black/20 hover:decoration-black">Join Us</a>
           </p>
        </div>

        {/* Security Notice */}
        <p className="mt-12 text-center text-[8px] uppercase tracking-[0.4em] text-gray-300">
          Secured by Vastra Architecture © 2026
        </p>
      </div>
    </div>
  );
};

export default AuthPage;