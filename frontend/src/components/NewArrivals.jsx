import React from 'react';
import { Heart, ShoppingBag, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const NewArrivals = () => {
  const products = [
    { id: 1, name: "black cargo  pants", price: "799.00", img: "https://nolabels.in/cdn/shop/files/32_806d5eaf-a997-4b05-b5bd-28ad4a3312bd.jpg?v=1758525483&width=1080" },
    { id: 2, name: "BROWN VARSITY SHACKET", price: "1,199.00", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600" },
    { id: 3, name: "Biege half sleeve linen shirt for men", price: "899.00", img: "https://vestirio.com/cdn/shop/files/016_08d7fef7-0e85-4299-8ac1-ef98df1bba22.webp?v=1714383259&width=1080" },
    { id: 4, name: " Oversized fit T-Shirt", price: "1,009.00", img: "https://www.urbanmonkey.com/cdn/shop/files/um-heavyweight-core-choco-moose-um24a-rev-bf2-xs-1896549.jpg?v=1756807309" }
  ];

  return (
    <section className="bg-white py-10 px-6 font-sans text-black">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-8 border-b border-black/5 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter uppercase leading-none">New <span className="text-gray-600">Arrivals</span></h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-800 mt-2">Refresh your wardrobe with our latest collection</p>
        </div>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Shop New Arrivals
        </a>
      </div>

      {/* Product Slider/Grid Wrapper */}
      <div className="max-w-7xl mx-auto relative group">
        
        {/* Slider Controls */}
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-black p-3 opacity-0 group-hover:opacity-100 transition-all shadow-xl">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-black p-3 opacity-0 group-hover:opacity-100 transition-all shadow-xl">
          <ChevronRight size={20} />
        </button>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Image Container */}
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden relative border border-black/5">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover  transition-all duration-700  group-hover:scale-105" 
                />
                
                {/* Top Actions */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-[8px] font-bold px-3 py-1.5 uppercase tracking-widest">New Arrival</span>
                </div>
                <button className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors">
                 <a href="/user/wishlist"> <Heart size={18} strokeWidth={1.5} /> </a>
                </button>
              </div>

              {/* Info Container (No Extra Padding) */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-tight truncate max-w[150px]">{item.name}</h3>
                    <p className="text-lg font-bold">₹{item.price}</p>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  <div className="flex gap-2">
                    <button className="p-2.5 bg-gray-50 text-gray-400 hover:text-black border border-transparent hover:border-black transition-all">
                      <Eye size={16} />
                    </button>
                    <button className="p-2.5 bg-black text-white hover:bg-gray-800 transition-all">
                     <a href="/user/cart"> <ShoppingBag size={16} /></a>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Minimal Slider Pagination Indicator */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-8 h-[2px] bg-black"></div>
        <div className="w-8 h-[2px] bg-gray-100 hover:bg-black transition-all cursor-pointer"></div>
        <div className="w-8 h-[2px] bg-gray-100 hover:bg-black transition-all cursor-pointer"></div>
      </div>
    </section>
  );
};

export default NewArrivals;