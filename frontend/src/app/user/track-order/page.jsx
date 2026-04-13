'use client';
import React, { useState } from 'react';
import { Search, Package, MapPin, CheckCircle2 } from 'lucide-react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');

  // Sample Tracking Data
  const trackingSteps = [
    { status: "Order Placed", date: "10 April, 10:30 AM", completed: true },
    { status: "Shipped from Supplier", date: "11 April, 09:00 AM", completed: true },
    { status: "Out for Delivery", date: "Expected Today", completed: false },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* HEADER */}
      <header className="px-6 py-12 border-b border-black/5 text-center">
        <h1 className="text-3xl font-bold tracking-tighter uppercase mb-2">Track Your Order</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Real-time Logistics Update</p>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* SEARCH BOX: Minimalist and centered */}
        <div className="mb-16">
          <div className="relative max-w-lg mx-auto">
            <input 
              type="text" 
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="ENTER ORDER ID (E.G. VC-7702)"
              className="w-full border border-black/10 px-6 py-4 rounded-lg text-xs tracking-widest outline-none focus:border-black transition-all uppercase"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
              <Search size={18} />
            </button>
          </div>
          <p className="text-center text-[9px] text-gray-400 mt-4 uppercase tracking-[0.2em]">
            Check your WhatsApp or Email for the Order ID
          </p>
        </div>

        {/* TRACKING DETAILS: Two Column Grid */}
        <div className="grid md:grid-cols-[1fr_300px] gap-12 border-t border-black/5 pt-12">
          
          {/* Timeline Section */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Shipment Progress</h4>
            
            <div className="relative space-y-12">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-black/5" />
              
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                    step.completed ? 'bg-black text-white' : 'bg-white border border-black/10 text-gray-200'
                  }`}>
                    {step.completed ? <CheckCircle2 size={14} /> : <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold uppercase tracking-tight ${step.completed ? 'text-black' : 'text-gray-300'}`}>
                      {step.status}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Info Sidebar */}
          <div className="space-y-8">
            <div className="p-6 border border-black/5 rounded-xl">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Delivery To</h4>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gray-300 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold">John Doe</p>
                  <p className="text-gray-500">Hazratganj, Lucknow</p>
                  <p className="text-gray-500">Uttar Pradesh, 226001</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-black/5 rounded-xl">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Package Info</h4>
              <div className="flex items-center gap-3">
                <Package size={16} className="text-gray-300" />
                <div className="text-xs">
                  <p className="font-bold uppercase tracking-tighter">VC-7702</p>
                  <p className="text-gray-500 italic">Essential Oversized Tee</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all">
              Update Address
            </button>
            <p className="text-[9px] text-gray-400 leading-relaxed text-center italic">
              *Address can only be updated if the order status is "Order Placed"
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-24 pt-8 border-t border-black/5 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
            Partnered with Vastra Logistics
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TrackOrder;