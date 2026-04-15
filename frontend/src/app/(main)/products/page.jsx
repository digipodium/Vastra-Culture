'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Star, ShoppingBag, ImageIcon, Filter } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // NEW: Category State
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories', 'Footwear'];

  useEffect(() => {
    const fetchPublished = async () => {
     console.log("Current API URL Variable:", process.env.NEXT_PUBLIC_API_URL);
      
      try {
        const res = await axios.get(`${API_URL}/product/getpublished`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublished();
  }, []);

  // NEW: Filter Logic (Matches your product.category field)
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* NEW: Myntra-style Category Tabs */}
        <div className="flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-10 py-4 mb-6">
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                  activeCategory === cat 
                  ? "border-b-2 border-black-500 text-black-500" 
                  : "text-gray-500 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="hidden md:flex items-center gap-2 text-gray-400 text-xs font-bold uppercase hover:text-black">
            <Filter size={14} /> Filter
          </button>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
              {/* Changed from flex-wrap to grid for a cleaner e-commerce alignment */}
              {filteredProducts.map((product) => (
                <div key={product._id} className="group cursor-pointer flex flex-col mb-8">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-100 relative">
                    {product.images && product.images.length > 0 ? (
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={product.images[0]}
                        alt={product.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon size={24} className="text-gray-300" />
                      </div>
                    )}
                    
                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                        {product.discount}% OFF
                      </span>
                    )}

                    {/* Featured Star */}
                    {product.isFeatured && (
                      <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-0.5">
                        <Star size={8} className="fill-amber-500" /> Featured
                      </span>
                    )}

                    {/* Hover "Quick View" typical of high-end sites */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 py-2 text-center text-[10px] font-bold uppercase tracking-tighter text-gray-800">
                      Add to Cart
                    </div>
                  </div>

                  <div className="mt-3 px-1">
                    <p className="text-sm font-bold text-gray-900 line-clamp-1">{product.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{product.category || 'Collection'}</p>
                    
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm font-bold text-gray-900">
                        ₹{product.adminPrice || product.price}
                      </p>
                      {product.discount > 0 && product.adminPrice && (
                        <>
                          <p className="text-xs text-gray-400 line-through">
                            ₹{Math.round(product.adminPrice + (product.adminPrice * product.discount) / 100)}
                          </p>
                          <p className="text-xs text-green-600 font-semibold">
                            ({product.discount}% off)
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <ShoppingBag size={48} className="text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium">No products found in {activeCategory}</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-2 text-indigo-500 text-sm font-bold underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>       
      </div>
    </section>
  );
};

export default ProductSection;