import Collab from '@/components/Collab';
import Discount from '@/components/Discount';
import ProductSection from '@/components/Product';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[80vh] lg:h-screen w-full flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_image_4.png"
            alt="Vastra Culture Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay - Adjusted opacity to make left-aligned text pop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        {/* Content Container - Changed to items-start for left alignment */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
              Vastra <span className="text-indigo-400">Culture</span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-xl text-sm md:text-lg text-gray-200 mb-10 leading-relaxed font-medium">
            Experience the next generation of Gen-Z fashion. High-quality streetwear delivered with real-time updates.
          </p>

          {/* The Responsive Button - Left Aligned on Desktop */}
          <button className="group relative inline-flex items-center justify-center px-4 py-2 text-base md:text-lg font-bold text-white transition-all duration-300 bg-gray-400 hover:bg-indigo-500 rounded-full shadow-2xl hover:scale-105 transform">
            Explore Now
            <svg
              className="w-5 h-5 ml-3 -mr-1 transition-all duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Bottom Gradient Fade - Blends into your white background sections */}
        <div className="absolute bottom-0 w-full h-32 md:h-48 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </section>

      <ProductSection />
      <Discount/>
      <Collab />
      <Testimonial />
    </>
  );
};

export default Hero;                     