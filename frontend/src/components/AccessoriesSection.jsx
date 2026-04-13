import React from 'react';
import { Heart, ShoppingBag, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const AccessoriesSection = () => {
  const products = [
    { 
      id: 1, 
      name: "ARCHIVE ACETATE SUNGLASSES", 
      price: "2499.00", 
      // MOODY | ARCHITECTURAL SHADOWS
      img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      name: "LEATHER CARDHOLDER", 
      price: "1899.00", 
      // CONTRAST | MARBLE & LEATHER
      img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      name: "SILVER CUBAN LINK CHAIN", 
      price: "5479.00", 
      // METALLIC | BRUSHED STEEL TEXTURE
      img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      name: "Trendy Bracelet For Men's", 
      price: "2849.00", 
      // TECHNICAL | MODERN & CLEAN
      img: "https://tohfajewellery.in/cdn/shop/files/ESKU301901191.jpg?crop=center&height=940&v=1744866973&width=940" 
    }
  ];

  return (
    <section className="bg-white py-8 px-6 font-sans text-black">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-8 border-b border-black/5 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter uppercase leading-none">
            Essentials <span className="text-gray-600">& Objects</span>
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-800 mt-2">
            The final detail. Precision-made objects.
          </p>
        </div>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Explore All
        </a>
      </div>

      {/* Product Grid Wrapper */}
      <div className="max-w-7xl mx-auto relative group">
        
        {/* Slider Controls */}
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-black p-3 opacity-0 group-hover:opacity-100 transition-all shadow-xl rounded-none">
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-black p-3 opacity-0 group-hover:opacity-100 transition-all shadow-xl rounded-none">
          <ChevronRight size={20} strokeWidth={1.5} />
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
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                />
                
                <button className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors">
                  <a href="/user/wishlist"> <Heart size={18} strokeWidth={1.5} /> </a>
                </button>
                
                {/* Add to Cart Overlay */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 py-2 text-center text-[10px] font-bold uppercase tracking-tighter text-gray-800 border-t border-black/5">
                  <a href="/user/cart">Add to Cart</a> 
                </div>
              </div>

              {/* Info Container */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-tight truncate max-w-[150px]">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold">₹{item.price}</p>
                  </div>
                  
                  {/* Quick Action Buttons */}
                  <div className="flex gap-2">
                    <button className="p-2.5 bg-gray-50 text-gray-400 hover:text-black border border-transparent hover:border-black transition-all">
                      <Eye size={16} />
                    </button>
                    
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-8 h-[2px] bg-black"></div>
        <div className="w-8 h-[2px] bg-gray-100 hover:bg-black transition-all cursor-pointer"></div>
        <div className="w-8 h-[2px] bg-gray-100 hover:bg-black transition-all cursor-pointer"></div>
      </div>
    </section>
  );
};

export default AccessoriesSection;