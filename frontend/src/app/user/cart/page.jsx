'use client';
import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Essential Oversized Tee",
      price: 1299,
      size: "M",
      color: "Phantom Black",
      qty: 1,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Relaxed Fit Graphic Pullover",
      price: 2499,
      size: "L",
      color: "Stone Grey",
      qty: 1,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop"
    }
  ]);

  // --- Logic for quantity change ---
  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 2000 || cartItems.length === 0 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-100 pb-6 mb-8 md:mb-12 gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">Bag</h1>
            <span className="text-gray-400 font-medium">({cartItems.length} Items)</span>
          </div>
          <a href="/products" className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">
            Continue Shopping
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 md:gap-16">
          
          {/* LEFT: Cart Items List */}
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 md:gap-6 pb-8 border-b border-gray-50 group">
                {/* Item Image */}
                <div className="w-24 h-32 md:w-32 md:h-40 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>

                {/* Item Details */}
                <div className="flex flex-col justify-between w-full py-1">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-xs md:text-sm font-bold uppercase tracking-tight mb-1">{item.name}</h3>
                      <p className="text-[10px] md:text-xs text-gray-400">{item.color} • Size {item.size}</p>
                    </div>
                    <p className="font-bold text-sm md:text-base">₹{(item.price * item.qty).toLocaleString()}</p>
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    {/* Quantity Controller */}
                    <div className="flex items-center border border-gray-200 rounded-lg px-1 py-0.5 md:px-2 md:py-1">
                      <button 
                        onClick={() => updateQty(item.id, -1)}
                        className="p-1 hover:text-indigo-600 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 md:px-4 text-[10px] md:text-xs font-bold">{item.qty}</span>
                      <button 
                        onClick={() => updateQty(item.id, 1)}
                        className="p-1 hover:text-indigo-600 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={12} />
                      <span className="hidden xs:block">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="py-20 text-center flex flex-col items-center">
                <ShoppingBag size={48} className="text-gray-100 mb-4" />
                <p className="text-gray-400 italic text-sm">Your bag is currently empty.</p>
                <a href="/products" className="mt-6 px-6 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Explore Shop</a>
              </div>
            )}
          </div>

          {/* RIGHT: Order Summary */}
          <aside>
            <div className="lg:sticky lg:top-8 bg-gray-50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">
              <h2 className="text-base md:text-lg font-bold mb-6 uppercase tracking-tight">Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs md:text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {shipping === 0 ? <span className="text-green-600 uppercase text-[10px] font-bold">Free</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-sm md:text-base">Total</span>
                  <span className="text-lg md:text-xl font-bold">₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  disabled={cartItems.length === 0}
                  className="w-full bg-gray-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none"
                >
                  Checkout Now
                </button>
                <div className="flex items-center justify-center gap-2 pt-4 opacity-40">
                  <ShieldCheck size={12} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Secure Checkout</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="PROMO CODE"
                    className="bg-white border border-transparent focus:border-gray-200 rounded-lg px-4 py-3 text-[10px] w-full outline-none"
                  />
                  <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-[10px] font-bold hover:bg-gray-100 transition-all uppercase">Apply</button>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 px-4 flex items-start gap-3 text-gray-400">
              <Truck size={16} className="shrink-0" />
              <p className="text-[9px] leading-relaxed uppercase tracking-wide">
                Orders above ₹2,000 qualify for <span className="text-gray-900 font-bold">Free Shipping</span>.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CartPage;