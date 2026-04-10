'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1 = enter email, 2 = new password
    const [email, setEmail] = useState('');
    const [resetToken, setResetToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Step 1: Verify email
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/user/forgot-password`, { email });
            setResetToken(res.data.resetToken);
            toast.success('Email verified! Set your new password.');
            setStep(2);
        } catch (err) {
            if (err.response?.status === 404) {
                toast.error('No account found with this email');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Reset password
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (newPassword.length < 8) {
            toast.error('Password must be at least 8 characters');
            return;
        }
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API_URL}/user/reset-password`, {
                resetToken,
                newPassword,
            });
            toast.success('Password updated successfully!');
            // Redirect to login after short delay
            setTimeout(() => {
                window.location.href = '/login';
            }, 1500);
        } catch (err) {
            if (err.response?.status === 403) {
                toast.error('Reset link expired. Please try again.');
                setStep(1);
                setResetToken('');
            } else {
                toast.error('Error resetting password. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <div className="max-w-lg w-full">
                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
                    {/* Top accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

                    <div className="p-6 sm:p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            {/* Lock icon */}
                            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                {step === 1 ? 'Forgot Password?' : 'Set New Password'}
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">
                                {step === 1
                                    ? "No worries! Enter your email and we'll help you reset it."
                                    : 'Choose a strong password for your account.'}
                            </p>
                        </div>

                        {/* Step indicator */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${
                                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                            }`}>
                                {step > 1 ? (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : '1'}
                            </div>
                            <div className={`w-16 h-0.5 transition-all duration-500 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${
                                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
                            }`}>
                                2
                            </div>
                        </div>

                        {/* Step 1: Email Verification */}
                        {step === 1 && (
                            <form onSubmit={handleEmailSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="forgot-email" className="block text-sm font-medium mb-2 text-gray-700">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                            </div>
                                            <input
                                                type="email"
                                                id="forgot-email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@example.com"
                                                className="py-3 pl-12 pr-4 block w-full bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Verifying...
                                            </>
                                        ) : (
                                            'Verify Email'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Step 2: New Password */}
                        {step === 2 && (
                            <form onSubmit={handlePasswordReset}>
                                <div className="space-y-4">
                                    {/* Verified email badge */}
                                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2.5">
                                        <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm text-green-700">Verified: <strong>{email}</strong></span>
                                    </div>

                                    <div>
                                        <label htmlFor="new-password" className="block text-sm font-medium mb-2 text-gray-700">
                                            New Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="password"
                                                id="new-password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder="Min. 8 characters"
                                                minLength={8}
                                                className="py-3 pl-12 pr-4 block w-full bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="confirm-password" className="block text-sm font-medium mb-2 text-gray-700">
                                            Confirm Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                </svg>
                                            </div>
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="Re-enter password"
                                                minLength={8}
                                                className={`py-3 pl-12 pr-4 block w-full bg-gray-50 border rounded-lg text-sm text-gray-800 placeholder:text-gray-400 focus:bg-white focus:ring-2 transition-all duration-200 ${
                                                    confirmPassword && confirmPassword !== newPassword
                                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                                        : confirmPassword && confirmPassword === newPassword
                                                        ? 'border-green-300 focus:border-green-500 focus:ring-green-500/20'
                                                        : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500/20'
                                                }`}
                                                required
                                            />
                                        </div>
                                        {confirmPassword && confirmPassword !== newPassword && (
                                            <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                                </svg>
                                                Passwords do not match
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Resetting...
                                            </>
                                        ) : (
                                            'Reset Password'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Divider */}
                        <div className="mt-6 pt-5 border-t border-gray-100">
                            <p className="text-center text-sm text-gray-500">
                                Remember your password?{' '}
                                <Link href="/login" className="text-blue-600 font-medium hover:underline focus:outline-hidden focus:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Security note */}
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    Your connection is secure. Reset link expires in 15 minutes.
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
