import React from 'react';
import { Heart, ShoppingBag, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const WomensSection = () => {
  const products = [
    { 
      id: 1, 
      name: "Women Olive Printed Oversized  T-Shirt", 
      price: "799.00", 
      img: "https://pictures.kartmax.in/live/sites/aPfvUDpPwMn1ZadNKhP7/product-images/TTTS001811_1.JPG" 
    },
    { 
      id: 2, 
      name: "VINTAGE STREETWEAR FIT", 
      price: "899.00", 
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      name: "plain oversized hoddie", 
      price: "799.00", 
      img: "https://www.noughtsandkisses.co.uk/cdn/shop/files/20250916_N_K_AW_ECOM_CS9499.jpg?v=1758205027&width=1920" 
    },
    { 
      id: 4, 
      name: " OVERSIZED SHIRT", 
      price: "999.00", 
      img: "https://stylequotient.co.in/cdn/shop/files/SS25SQHASTI_GRWH-1_1200x1200.jpg?v=1737434343" 
    }
  ];

  return (
    <section className="bg-white py-8 px-6 font-sans text-black">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-8 border-b border-black/5 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter uppercase leading-none">Women's <span className="text-gray-600">Shop</span></h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-800 mt-2">The ultimate flex is wearing something that feels good.</p>
        </div>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Shop Women
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
                
                <button className="absolute top-4 right-4 text-black hover:text-red-500 transition-colors">
                 <a href="/user/wishlist"> <Heart size={18} strokeWidth={1.5} /> </a>
                </button>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 py-2 text-center text-[10px] font-bold uppercase tracking-tighter text-gray-800">
                     <a href="/user/cart">Add to Cart</a> 
                    </div>
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

export default WomensSection;