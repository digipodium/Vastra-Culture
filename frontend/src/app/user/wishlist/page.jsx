'use client';
import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const WishlistPage = () => {
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

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <header className="px-6 md:px-10 py-8 md:py-12 border-b border-black/5 flex flex-col items-start">
        <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase">My Wishlist</h1>
        <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-gray-400 mt-1">
          {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
        </p>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 md:gap-x-6 gap-y-10 md:gap-y-12">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 md:p-1.5 bg-white/90 rounded-full shadow-sm hover:bg-black hover:text-white transition-all z-10"
                >
                  <X size={12} />
                </button>

                {!item.inStock && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] flex items-center justify-center">
                    <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1 md:px-3 md:py-1.5">Sold Out</span>
                  </div>
                )}
              </div>

              <div className="mt-3 md:mt-4 space-y-2">
                <div>
                  <h3 className="text-[9px] md:text-[10px] font-bold uppercase tracking-tight truncate pr-4">{item.name}</h3>
                  <p className="text-[10px] md:text-xs font-light text-gray-400">{item.price}</p>
                </div>
                
                {item.inStock ? (
                  <button className="w-full flex items-center justify-center gap-2 py-2 border border-black/5 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-black hover:border-black transition-all active:bg-gray-50">
                    <ShoppingCart size={10} />
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <div className="w-full py-2 border border-transparent text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-300 text-center cursor-not-allowed">
                    Notify Me
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {wishlistItems.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300">Your wishlist is empty</p>
            <a href="/products" className="inline-block mt-6 px-8 py-3 bg-black text-white text-[9px] font-bold uppercase tracking-widest">Shop Collection</a>
          </div>
        )}

        <footer className="mt-20 md:mt-32 pt-10 border-t border-black/5 flex flex-col items-center">
          <p className="text-[8px] font-bold uppercase tracking-widest text-gray-200 mb-6">Secured Vastra Vault</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span>Shipping India</span>
            <span className="hidden xs:inline">•</span>
            <span>Tax Inclusive</span>
            <span className="hidden xs:inline">•</span>
            <span>Vastra Verified</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WishlistPage;