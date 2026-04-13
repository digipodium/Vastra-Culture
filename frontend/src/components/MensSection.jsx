import React from 'react';
import { Heart, ShoppingBag, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const MensSection = () => {
  const products = [
    { id: 1, name: "Men Black Denim Oversized Shirt", price: "1247.00", img: "https://5.imimg.com/data5/ECOM/Default/2023/12/366057172/ZH/ZL/CZ/90086993/msshrt20315-1-7bffa0f8-3096-4baf-8093-91acf207b7b7-500x500.jpg" },
    { id: 2, name: "Men Graphic Print Black T-Shirt", price: "899.00", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/t-shirt/x/f/6/m-286576-the-souled-store-original-imahg89fyryq8eez.jpeg?q=90" },
    { id: 3, name: "Oversize Hoodie for Men", price: "1499.00", img: "https://m.media-amazon.com/images/I/915QkKTSKNL._AC_UY1100_.jpg" },
    { id: 4, name: "MONOSTRIPE OVERSIZED T-SHIRT", price: "749.00", img: "https://www.dimaxio.com/cdn/shop/files/BLACKBACK_64249c97-1a9b-426b-9c94-bad33dfa4fd3.png?v=1767636071&width=533" }
  ];

  return (
    <section className="bg-white py-8 px-6 font-sans text-black">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-8 border-b border-black/5 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter uppercase leading-none">Men's <span className="text-gray-600">Shop</span></h2>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-800 mt-2">The ultimate flex is wearing something that feels good.</p>
        </div>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          Shop Men
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

export default MensSection;