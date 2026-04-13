'use client';
import React, { useState } from 'react';
import { Heart, Share2, Shield, Truck, RotateCcw } from 'lucide-react';

const ProductIDPage = ({ productId = "VC-7702" }) => {
  const [selectedSize, setSelectedSize] = useState('M');

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
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
               <div className="w-full h-full flex items-center justify-center text-gray-400 font-light italic">
                 Main Product Visual
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg"></div>
              <div className="aspect-[4/5] bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          {/* Section 2: Product Logic & Pricing */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold mb-2">Essential Oversized Tee</h1>
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
                        ? 'border-gray-900 bg-gray-900 text-white font-medium' 
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
                <button className="flex-1 bg-gray-900 text-white h-14 rounded-lg font-medium text-sm hover:bg-black transition-colors">
                  Add to Shopping Bag
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
                <button className="w-14 h-14 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Trust Badges & Logistics */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="bg-gray-50 p-2 rounded-lg"><Truck size={18} className="text-gray-600" /></div>
                <div>
                  <p className="text-xs font-semibold">Standard Delivery</p>
                  <p className="text-[11px] text-gray-400">Free delivery on orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="bg-gray-50 p-2 rounded-lg"><RotateCcw size={18} className="text-gray-600" /></div>
                <div>
                  <p className="text-xs font-semibold">7-Day Returns</p>
                  <p className="text-[11px] text-gray-400">Easy exchange and refund policy</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                <div className="bg-gray-50 p-2 rounded-lg"><Shield size={18} className="text-gray-600" /></div>
                <div>
                  <p className="text-xs font-semibold">Quality Verified</p>
                  <p className="text-[11px] text-gray-400">Passed all supplier quality checks</p>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Specifications</h4>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <span className="text-gray-400">Material</span><span className="text-right">Organic Cotton</span>
                <span className="text-gray-400">Fit</span><span className="text-right">Drop Shoulder</span>
                <span className="text-gray-400">GSM</span><span className="text-right">220 (Mid-Weight)</span>
                <span className="text-gray-400">Color</span><span className="text-right">Phantom Black</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIDPage;