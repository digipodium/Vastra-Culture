'use client';
import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const WishlistPage = () => {
  // Mock data for the wishlist
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Essential Oversized Tee",
      price: "₹1,299",
      img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      inStock: true
    },
    {
      id: 2,
      name: "Heavyweight Pullover",
      price: "₹2,499",
      img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
      inStock: false
    },
    {
      id: 3,
      name: "Streetwear Cargo",
      price: "₹3,199",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop",
      inStock: true
    },
    {
      id: 4,
      name: "Classic Denim",
      price: "₹4,199",
      img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
      inStock: true
    }
  ]);

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* HEADER: Right-aligned as requested */}
      <header className="px-10 py-12 border-b border-black/5 flex flex-col items-start">
        <h1 className="text-2xl font-bold tracking-tighter uppercase">My Wishlist</h1>
        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mt-1">
          {wishlistItems.length} items saved
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* GRID: Smaller images (grid-cols-4 or 5) for a cleaner look */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative">
              {/* Image Section: Aspect ratio kept 3/4 but size is reduced by grid columns */}
              <div className="aspect-[3/4] bg-gray-50 rounded-md overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Remove Action */}
                <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full shadow-sm hover:bg-black hover:text-white transition-all">
                  <X size={12} />
                </button>

                {/* Status Badge */}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="text-[8px] font-bold uppercase tracking-widest bg-black text-white px-3 py-1.5">Sold Out</span>
                  </div>
                )}
              </div>

              {/* Data Section */}
              <div className="mt-4 space-y-2">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-tight truncate">{item.name}</h3>
                  <p className="text-xs font-light text-gray-500">{item.price}</p>
                </div>
                
                {item.inStock && (
                  <button className="w-full flex items-center justify-center gap-2 py-2 border border-black/5 text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black hover:border-black transition-all">
                    <ShoppingBag size={12} />
                   <a href="/user/cart">Add to Bag</a> 
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER: Minimalist and Centered */}
        <div className="mt-24 pt-10 border-t border-black/5 flex flex-col items-center">
          <p className="text-[9px] font-bold uppercase tracking-widest text-gray-300 mb-4">Secure Shopping Bag</p>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span>Shipping India</span>
            <span>Tax Inclusive</span>
            <span>Vastra Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;