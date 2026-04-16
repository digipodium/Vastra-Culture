'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, User, Mail, Lock, ShieldCheck } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';

// --- Validation Schema ---
const signupSchema = Yup.object().shape({
  name: Yup.string().required('Naam nhi hai kya?').min(3, 'Too short!'),
  email: Yup.string().required('Email nhi hai kya?').email('Invalid Email'),
  password: Yup.string().required('Password is required')
    .matches(/[A-Z]/, 'Uppercase letter is required')
    .matches(/[a-z]/, 'Lowercase letter is required')
    .matches(/[0-9]/, 'Number is required')
    .matches(/[_.@#/]/, 'Special character is required')
    .min(8, 'Minimum 8 characters'),
  confirmPassword: Yup.string().required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  // --- Formik Logic ---
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');

      try {
        const response = await axios.post(`${baseUrl}/api/auth/register`, {
          name: values.name,
          email: values.email,
          password: values.password,
        });
        toast.success('Account created successfully! Welcome to Vastra Culture!');
        
        // Redirect to home page after short delay
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } catch (err) {
        const message = err.response?.data?.message;
        if (err.response?.status === 400 && message?.includes('already exists')) {
          toast.error('This email is already registered. Please login instead.');
        } else if (!err.response) {
          toast.error('Cannot connect to server. Please check if backend is running.');
        } else {
          toast.error(message || 'Registration failed. Please try again.');
        }
      }
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12 font-sans">
      <div className="w-full max-w-[420px]">
        
        {/* Form Container: Vastra Culture UI */}
        <div className="border border-black/10 p-8 md:p-10 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
          
          {/* Header */}
          <div className="mb-10 border-l-2 border-black pl-5 py-1">
            <h1 className="text-2xl font-black tracking-tighter uppercase leading-none text-black">
              User Sign Up
            </h1>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-2">
              The Blueprint of Vastra Culture
            </p>
          </div>

          <form className="space-y-5" onSubmit={signupForm.handleSubmit}>
            
            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black flex items-center gap-1.5">
                <User size={10} /> Full Name
              </label>
              <input 
                name="name"
                type="text" 
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.name}
                className={`w-full border-b ${signupForm.errors.name && signupForm.touched.name ? 'border-red-500' : 'border-black/10'} py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300`}
                placeholder="Name"
              />
              {signupForm.errors.name && signupForm.touched.name && (
                <p className="text-[10px] text-red-500 font-medium italic">{signupForm.errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black flex items-center gap-1.5">
                <Mail size={10} /> Email
              </label>
              <input 
                name="email"
                type="email" 
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.email}
                className={`w-full border-b ${signupForm.errors.email && signupForm.touched.email ? 'border-red-500' : 'border-black/10'} py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300`}
                placeholder="name@email.com"
              />
              {signupForm.errors.email && signupForm.touched.email && (
                <p className="text-[10px] text-red-500 font-medium italic">{signupForm.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1 relative">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black flex items-center gap-1.5">
                <Lock size={10} /> Password
              </label>
              <input 
                name="password"
                type={showPassword ? "text" : "password"} 
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.password}
                className={`w-full border-b ${signupForm.errors.password && signupForm.touched.password ? 'border-red-500' : 'border-black/10'} py-2 text-sm focus:border-black outline-none transition-colors bg-transparent pr-8 placeholder:text-gray-300`}
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-2 text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
              {signupForm.errors.password && signupForm.touched.password && (
                <p className="text-[10px] text-red-500 font-medium italic leading-tight mt-1">{signupForm.errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-black flex items-center gap-1.5">
                <ShieldCheck size={10} /> Confirm Password
              </label>
              <input 
                name="confirmPassword"
                type={showPassword ? "text" : "password"} 
                onChange={signupForm.handleChange}
                onBlur={signupForm.handleBlur}
                value={signupForm.values.confirmPassword}
                className={`w-full border-b ${signupForm.errors.confirmPassword && signupForm.touched.confirmPassword ? 'border-red-500' : 'border-black/10'} py-2 text-sm focus:border-black outline-none transition-colors bg-transparent placeholder:text-gray-300`}
                placeholder="••••••••"
              />
              {signupForm.errors.confirmPassword && signupForm.touched.confirmPassword && (
                <p className="text-[10px] text-red-500 font-medium italic">{signupForm.errors.confirmPassword}</p>
              )}
            </div>

            {/* Action Button */}
            <button 
              type="submit"
              className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.4em] mt-8 hover:bg-gray-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
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
        <p className="mt-8 text-center text-[8px] uppercase tracking-[0.4em] text-gray-400">
          Vastra Culture System &copy; 2026
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;