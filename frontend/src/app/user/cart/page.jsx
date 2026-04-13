'use client';
import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  // Mock data for the cart
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

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="flex items-baseline justify-between border-b border-gray-100 pb-8 mb-12">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tighter uppercase">Shopping Bag</h1>
            <span className="text-gray-400 font-medium">({cartItems.length} Items)</span>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">
           <a href="/products"> Continue Shopping</a>
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16">
          
          {/* LEFT: Cart Items List */}
          <div className="space-y-10">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 pb-10 border-b border-gray-50 group">
                {/* Item Image */}
                <div className="w-32 h-40 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>

                {/* Item Details */}
                <div className="flex flex-col justify-between w-full py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-tight mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-400 mb-4">{item.color} • Size {item.size}</p>
                    </div>
                    <p className="font-bold">₹{item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Quantity Controller */}
                    <div className="flex items-center border border-gray-200 rounded-lg px-2 py-1">
                      <button className="p-1 hover:text-indigo-600 transition-colors"><Minus size={14} /></button>
                      <span className="px-4 text-xs font-bold">{item.qty}</span>
                      <button className="p-1 hover:text-indigo-600 transition-colors"><Plus size={14} /></button>
                    </div>
                    
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-red-500 transition-colors">
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State Logic can go here */}
            {cartItems.length === 0 && (
              <div className="py-20 text-center flex flex-col items-center">
                <ShoppingBag size={48} className="text-gray-100 mb-4" />
                <p className="text-gray-400 italic">Your bag is currently empty.</p>
              </div>
            )}
          </div>

          {/* RIGHT: Order Summary (Sticky) */}
          <aside className="relative">
            <div className="sticky top-12 bg-gray-50 rounded-[2rem] p-8">
              <h2 className="text-lg font-bold mb-8 uppercase tracking-tight">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Estimated Shipping</span>
                  <span className="text-gray-900 font-medium">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 pb-4">
                  <span>Tax</span>
                  <span className="text-gray-900 font-medium">Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="text-xl font-bold">₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-[0.98]">
                  Checkout Now
                </button>
                <div className="flex items-center justify-center gap-2 pt-4 opacity-40">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure SSL Encryption</span>
                </div>
              </div>

              {/* Promo Code Toggle */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-3">Promotional Code</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter Code"
                    className="bg-white border border-transparent focus:border-gray-200 rounded-xl px-4 py-3 text-xs w-full outline-none transition-all"
                  />
                  <button className="bg-white border border-gray-200 px-4 py-3 rounded-xl text-xs font-bold hover:bg-gray-100 transition-all uppercase tracking-tight">Apply</button>
                </div>
              </div>
            </div>

            {/* Delivery Trust Badge */}
            <div className="mt-8 px-8 flex items-start gap-4 text-gray-400">
              <Truck size={18} />
              <p className="text-[10px] leading-relaxed uppercase tracking-wide">
                Free shipping on orders over ₹2,000. Delivered by <span className="text-gray-900 font-bold">Vastra Logistics</span>.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default CartPage;