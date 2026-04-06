
import React from 'react'

const ProductSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-2xl font-black text-black uppercase tracking-tighter">
              Our <span className="text-indigo-600">Inventory</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[8px] mt-2">
              Quality Checked & Locally Sourced
            </p>
          </div>

          {/* Category Filter Pills (Optional but looks professional) */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Streetwear', 'Essentials', 'Accessories'].map((cat) => (
              <button key={cat} className="whitespace-nowrap px-6 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Product Item Wrapper - Repeat this for each product */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <img
                  src={'product_cart1.avif'} // Placeholder
                  alt="Vastra Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* "Quality Check" Badge - Specific to your project */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                  <span className="text-[9px] font-black text-indigo-600 uppercase tracking-tighter">Verified</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col grow text-left">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm  text-black  flex flex-col items-center justify-center px-1 uppercase tracking-tight group-hover:text-indigo-500 transition-colors">
                    Sneaker {item}
                  </h3>
                </div>

                <p className="text-sm font-bold px-2 text-gray-900">₹{1299 + (item * 100)}</p>


                {/* <p className="text-xs text-gray-500 font-medium mb-6 uppercase tracking-widest">
              Limited Edition Series
            </p> */}

                {/* Add to Cart Button */}
                <button className="mt-auto w-full py-4  text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
};
export default ProductSection;