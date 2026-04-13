import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Better quality and aesthetic than the big fast-fashion brands. Truly premium fabric.",
      author: "Tamchi Nyakum",
      title: "Fashion Enthusiast"
    },
    {
      id: 2,
      quote: "The delivery update system is a game changer. Finally, a brand that respects my time.",
      author: "Rahul Verma",
      title: "Verified Buyer"
    },
    {
      id: 3,
      quote: "Minimalist drip that actually hits different. Vastra Culture is the new standard.",
      author: "Sneha Kapoor",
      title: "Stylist"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans border-y border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Quote Icon - Subtle and Professional */}
        <div className="flex justify-center mb-8">
          <Quote size={32} strokeWidth={1} className="text-gray-600" />
        </div>

        {/* Testimonial Content with Smooth Height Transition */}
        <div className="min-h-[160px] flex flex-col justify-center">
          <h2 className="text-xl md:text-3xl font-medium tracking-tight text-black leading-relaxed mb-6">
            "{testimonials[activeSlide].quote}"
          </h2>
          
          <div className="flex flex-col items-center">
            <span className="w-8 h-[1px] bg-black mb-4"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-black">
              {testimonials[activeSlide].author}
            </p>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-700 mt-1">
              {testimonials[activeSlide].title}
            </p>
          </div>
        </div>

        {/* Luxury Dash Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-[2px] transition-all duration-500 ease-in-out ${
                activeSlide === index ? "w-12 bg-black" : "w-6 bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;