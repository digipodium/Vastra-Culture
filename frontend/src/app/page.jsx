'use client';
import Collab from '@/components/collab';
import Discount from '@/components/Discount';
import ProductSection from '@/components/NewArrivals';
import Testimonial from '@/components/Testimonial';
import NewArrivals from '@/components/NewArrivals';
import MensSection from '@/components/MensSection';
import WomensSection from '@/components/WomensSection';
import AccessoriesSection from '@/components/AccessoriesSection';

import React from 'react';




const Hero = () => {
  return (
    <div>
      <section className="relative w-full md:h-screen overflow-hidden flex items-center justify-center">
  {/* 1. The Background Image */}
  <img 
    src="hero_section_car.png" 
    alt="hero section" 
    className="absolute h-full object-cover"
  />

  {/* 2. The Dark Overlay (Optional: Makes text easier to read) */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* 3. The Centered Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
    
    {/* Heading */}
    <h1 className="text-[14px] md:text-2xl lg:text-4xl font-bold uppercase tracking-[0.2em] -mr-[0.2em] text-white mb-6 drop-shadow-2xl pt-40">
      Luxury Hits Different
    </h1>

    {/* The Button */}
    <div className='pt-10'>
    <button className="flex items-center justify-center px-8 py-3  text-base md:text-sm font-bold text-black transition-all duration-300 bg-white hover:bg-gray-200 rounded-xl shadow-2xl hover:scale-105 transform ">
      Explore Now
    </button>
    </div>
  </div>
</section>

    
   <NewArrivals/>
   
    <section className="relative w-full  md:h-screen overflow-hidden flex items-center justify-center">
  {/* 1. The Background Image */}
  <img 
    src="hero_section_freepik.jpg" 
    alt="hero section" 
    className="absolute h-full object-cover"
  />

  
</section>

 <MensSection/>
 <WomensSection/>
 <hr />
 <Collab/>
 <hr />
 <AccessoriesSection/>
 <hr />
 <Testimonial/>
    </div>
  );
}
export default Hero;