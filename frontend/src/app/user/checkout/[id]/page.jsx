'use client';
import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard, Truck, ChevronLeft, CheckCircle2 } from 'lucide-react';

const CheckoutPage = () => {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-900 selection:bg-indigo-50">
      {/* Minimalist Checkout Header */}
      <header className="bg-white border-b border-gray-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
            <ChevronLeft size={16} />
            Back to Bag
          </button>
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase">Vastra <span className="text-indigo-600">Culture</span></h2>
          <div className="flex items-center gap-2 text-green-600">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
          
          {/* LEFT: Checkout Flow */}
          <div className="space-y-12">
            
            {/* Step 1: Shipping Address */}
            <section className={`${step !== 1 ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                <h2 className="text-xl font-bold uppercase tracking-tight">Shipping Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-indigo-600 outline-none transition-all text-sm" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-indigo-600 outline-none transition-all text-sm" placeholder="Doe" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Address</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-indigo-600 outline-none transition-all text-sm" placeholder="House No, Street, Locality" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">City</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-indigo-600 outline-none transition-all text-sm" placeholder="Lucknow" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Postal Code</label>
                  <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-indigo-600 outline-none transition-all text-sm" placeholder="226001" />
                </div>
              </div>

              {step === 1 && (
                <button 
                  onClick={() => setStep(2)}
                  className="mt-10 bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
                >
                  Continue to Payment
                </button>
              )}
            </section>

            {/* Step 2: Payment Method */}
            <section className={`${step !== 2 ? 'opacity-50' : ''} transition-opacity duration-500`}>
              <div className="flex items-center gap-4 mb-8">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400'}`}>2</span>
                <h2 className="text-xl font-bold uppercase tracking-tight">Payment Method</h2>
              </div>

              {step === 2 && (
                <div className="space-y-4">
                  <div className="p-6 border-2 border-indigo-600 bg-indigo-50/30 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CreditCard className="text-indigo-600" />
                      <div>
                        <p className="text-sm font-bold">Credit / Debit Card</p>
                        <p className="text-[11px] text-gray-500 uppercase tracking-wide">Visa, Mastercard, RuPay</p>
                      </div>
                    </div>
                    <CheckCircle2 className="text-indigo-600" size={20} />
                  </div>
                  
                  <div className="p-6 border border-gray-100 bg-white rounded-2xl flex items-center justify-between opacity-60 grayscale cursor-not-allowed">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gray-200 rounded-full" />
                      <p className="text-sm font-bold text-gray-400">UPI / Net Banking</p>
                    </div>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Cardholder Name</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none text-sm" placeholder="JOHN DOE" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Card Number</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none text-sm font-mono" placeholder="0000 0000 0000 0000" />
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* RIGHT: Order Summary */}
          <aside className="sticky top-12">
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 pb-4 border-b border-gray-50">Order Review</h3>
              
              <div className="space-y-4 mb-8">
                {/* Simplified Item Preview */}
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-16 bg-gray-50 rounded-lg overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=100" className="w-full h-full object-cover" alt="item" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase leading-tight">Essential Oversized Tee</p>
                    <p className="text-[10px] text-gray-400">Size M • Qty 1</p>
                  </div>
                  <p className="text-xs font-bold">₹1,299</p>
                </div>
              </div>

              <div className="space-y-3 text-sm pt-4 border-t border-gray-50 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900">₹1,299</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="font-bold uppercase tracking-widest text-xs">Total</span>
                  <span className="text-xl font-bold">₹1,299</span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98]">
                Place Order
              </button>

              <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-50 pt-8">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <Lock size={12} />
                  Payments are encrypted
                </div>
                <div className="flex gap-4 opacity-30 grayscale">
                   <div className="w-8 h-5 bg-gray-400 rounded-sm" />
                   <div className="w-8 h-5 bg-gray-400 rounded-sm" />
                   <div className="w-8 h-5 bg-gray-400 rounded-sm" />
                </div>
              </div>
            </div>
            
            {/* Delivery Note */}
            <div className="mt-8 px-6 flex items-start gap-4 text-gray-400">
              <Truck size={20} className="shrink-0" />
              <p className="text-[10px] leading-relaxed uppercase tracking-widest">
                Expected delivery within <span className="text-gray-900 font-bold">3-5 business days</span>. 
                Tracking will be sent to your email.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;