'use client';
import React, { useState } from 'react';
import { Heart, Share2, Shield, Truck, RotateCcw } from 'lucide-react';

const ProductIDPage = ({ productId = "VC-7702" }) => {
  const [selectedSize, setSelectedSize] = useState('M');

  // Placeholder images for a professional look
  const images = {
    main: "black t-shirt image for product section.webp",
    detail1: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    detail2: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* Product ID Top Bar */}
      <div className="bg-gray-50 py-2 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
            Product Reference: <span className="text-gray-900">{productId}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_450px] gap-12">
          
          {/* Section 1: Product Visuals */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden group">
              <img 
                src={images.main} 
                alt="Main View" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Sub-images Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
                <img 
                  src={images.detail1} 
                  alt="Detail View 1" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden group">
                <img 
                  src={images.detail2} 
                  alt="Detail View 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Product Logic & Pricing */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold mb-2 uppercase tracking-tight">Essential Oversized Tee</h1>
              <p className="text-gray-500 text-sm mb-4">Vastra Culture Exclusive • Premium Cotton</p>
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold">₹1,299</span>
                <span className="text-sm text-gray-400 line-through">₹1,999</span>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Save 35%</span>
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* Selection Options */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase text-gray-400 mb-3 block tracking-wide">Size Selection</label>
                <div className="flex gap-2">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 w-16 text-sm border rounded transition-all ${
                        selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white font-medium shadow-lg shadow-gray-200' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Functional Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-gray-900 text-white h-14 rounded-lg font-medium text-sm hover:bg-black transition-all active:scale-[0.98]">
                  Add to Shopping Bag
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-colors">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Trust Badges & Logistics */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><Truck size={18} className="text-indigo-600" /></div>
                <div>
                  <p className="text-xs font-semibold">Standard Delivery</p>
                  <p className="text-[11px] text-gray-400">Free delivery on orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><RotateCcw size={18} className="text-indigo-600" /></div>
                <div>
                  <p className="text-xs font-semibold">7-Day Returns</p>
                  <p className="text-[11px] text-gray-400">Easy exchange and refund policy</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><Shield size={18} className="text-indigo-600" /></div>
                <div>
                  <p className="text-xs font-semibold">Quality Verified</p>
                  <p className="text-[11px] text-gray-400">Passed all supplier quality checks</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-10">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Specifications</h4>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <span className="text-gray-400 font-light">Material</span><span className="text-right font-medium">Organic Cotton</span>
                <span className="text-gray-400 font-light">Fit</span><span className="text-right font-medium">Drop Shoulder</span>
                <span className="text-gray-400 font-light">GSM</span><span className="text-right font-medium">220 (Mid-Weight)</span>
                <span className="text-gray-400 font-light">Color</span><span className="text-right font-medium">Phantom Black</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIDPage;