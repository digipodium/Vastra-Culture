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
            src="hero_section_freepik.jpg"
            alt="Vastra Culture Hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay - Adjusted opacity to make left-aligned text pop */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container - Changed to items-start for left alignment */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="text-[10px] md:text-3xl font-bold uppercase tracking-[0.2em] text-black mb-2 py-6">
              Luxury Hits Different
            </h1>
          </div>

          {/* Description */}
          {/* <p className="max-w-xl text-sm md:text-lg text-gray-200 mb-10 leading-relaxed font-medium">
            Experience the next generation of Gen-Z fashion. High-quality streetwear delivered with real-time updates.
          </p> */}

          {/* The Responsive Button - Left Aligned on Desktop */}
          <button className="group relative inline-flex item-center justify-center px-4 py-2  text-base md:text-lg font-bold text-black transition-all duration-300 bg-white hover:bg-gray-400
          rounded-xl shadow-2xl hover:scale-105 transform">
            Explore Now
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