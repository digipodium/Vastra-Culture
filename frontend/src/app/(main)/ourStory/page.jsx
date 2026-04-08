import React from 'react'

const page = () => {
  return (
    <div>
        <section className="bg-white py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
    
    {/* Image Side */}
    <div className="w-full lg:w-1/2 relative">
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800" 
          alt="Vastra Culture Editorial" 
          className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -top-10 -left-10 text-[12rem] font-black text-gray-50 select-none -z-10">
        VC
      </div>
    </div>

    {/* Content Side */}
    <div className="w-full lg:w-1/2 space-y-8">
      <div className="inline-block px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-600">
          The Origin Story
        </span>
      </div>

      <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter leading-[0.9]">
        Redefining <br /> 
        <span className="text-indigo-600">Vastra Culture</span>
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed font-medium">
        Born at the intersection of street aesthetics and digital innovation, Vastra Culture isn't just a brand—it's a movement. We curate essentials for the next generation, ensuring every piece meets the highest standards through our rigorous quality checks.
      </p>

      {/* Brand Pillars / Stats */}
      <div className="grid grid-cols-2 gap-8 pt-4">
        <div>
          <h4 className="text-2xl font-black text-black">100%</h4>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Verified Quality</p>
        </div>
        <div>
          <h4 className="text-2xl font-black text-black">Hyper</h4>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Local Delivery</p>
        </div>
      </div>

      <div className="pt-6">
        <button className="px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-indigo-600 transition-all duration-300 flex items-center group">
          Our Full Story
          <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default page