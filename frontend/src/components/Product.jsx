'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Star, ShoppingBag, ArrowRight, ImageIcon } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublished = async () => {
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

  return (
    <section>
      {/* our products section */}
      <div className="max-w-7xl mx-auto">
        <div>
          <span className="text-black font-bold uppercase flex text-center justify-center 
            tracking-[0.2em] text-2xl m-2 pt-6">Products</span>
          <h2 className="text-sm md:text-lg font-black text-indigo-500 uppercase tracking-tighter mt-2 ml-12 pt-4">
            Trending Now
          </h2>

          {/* Dynamic products from admin-approved & published items */}
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-3 border-indigo-200 border-t-indigo-500 rounded-full animate-spin" />
            </div>
          ) : products.length > 0 ? (
            <div className="w-full flex flex-wrap justify-evenly pt-4">
              {products.slice(0, 8).map((product) => (
                <div key={product._id} className="w-46 pt-8 flex flex-col items-center mb-12 group cursor-pointer">
                  <div className="w-44 h-46 rounded-sm overflow-hidden bg-gray-100 relative">
                    {product.images && product.images.length > 0 ? (
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                    {product.discount > 0 && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="absolute top-2 right-2 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5">
                        <Star size={8} /> Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-500 mt-2 text-center line-clamp-1">{product.name}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-bold">
                      ₹{product.adminPrice || product.price}
                    </p>
                    {product.discount > 0 && product.adminPrice && (
                      <>
                        <p className="text-sm text-gray-400 line-through">
                          ₹{Math.round(product.adminPrice + (product.adminPrice * product.discount) / 100)}
                        </p>
                        <p className="text-xs text-green-600 font-semibold">
                          ({product.discount}% off)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <ShoppingBag size={40} className="text-gray-300 mb-3" />
              <p className="text-gray-400 text-sm">No products available yet</p>
            </div>
          )}

          {/* New Collections section */}
          <div className='bg-gray-300'>
            <div>
              <h2 className='text-xl md-text-3xl flex flex-col text-center  font-black text-black uppercase tracking-[0.2em]  mt-2 ml-12
              pt-4' 
              >New Collections</h2>
            </div>
            <div className='w-full flex flex-wrap justify-evenly pt-4'>
              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-60 h-60 rounded-sm' src="New_arrivals1.jpg" alt="t-shirt" />
                <p className='text-lg font-bold text-black pt-2'>Sneakers</p>
              </div>

              <div className='w-44  pt-8 flex flex-col items-center mb-12 '>
                <img className='w-60 h-60 rounded-sm' src="New_arrivals2.jpg" alt="t-shirt" />
                <p className='text-lg font-bold text-black pt-2'> Watches</p>
              </div>

              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-60 h-60 rounded-sm' src="New_arrivals3.jpg" alt="t-shirt" />
                <p className='text-lg font-bold text-black pt-2'>jewellerys</p>
              </div>
            </div> 
            
          </div>
        </div>       
      </div>
    </section>
  );
};

export default ProductSection;