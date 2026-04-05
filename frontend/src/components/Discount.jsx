import React from 'react'

const Discount = () => {
  return (
    <div>
        <section className="bg-black py-10 md:py-10 px-6 lg:px-12 overflow-hidden border-y border-gray-800">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-10">
    
    {/* LEFT SIDE: Discount Text (Stylized for Impact) */}
    <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
      
      {/* "New Drop" Status Tag */}
      <div className="flex items-center gap-2 bg-indigo-600/10 border border-indigo-600/20 px-4 py-2 rounded-full mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Limited Drop</span>
      </div>

      {/* Main Stylized Headline */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none  mb-4">
        CULTURE <br /> <span className="text-indigo-400">DROP</span>
      </h2>

      {/* Discount Sub-Header */}
      <div className="flex items-end gap-3 mb-8">
        <p className="text-xl md:text-3xl font-bold text-gray-400 tracking-tight">
          Up to
        </p>
        <p className="text-xl md:text-4xl font-black text-white tracking-tighter -mb-1">
          40% <span className="text-gray-600">OFF</span>
        </p>
      </div>

      {/* Description copy */}
      <p className="max-w-sm text-sm text-gray-400 mb-12 leading-relaxed">
        Unlock premium streetwear essentials at exclusive prices. Use code <strong className="text-white">VASTRA40</strong> at checkout. valid on select items only.
      </p>

      {/* Action Button */}
      <button className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-black-500 transition-all duration-300 bg-white text-black rounded-full hover:bg-indigo-400 shadow-xl hover:scale-105 transform">
        Shop the Drop
        <svg 
          className="w-5 h-5 ml-3 -mr-1 transition-all duration-200 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>

    {/* RIGHT SIDE: 3D Cool Image with Transitions */}
    <div className="w-full md:w-1/2 relative flex justify-center items-center screen-h-400 md:screen-h-600 mt-12 md:mt-0">
      
      {/* Gradient Blob Background (Decorative) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      {/* The "3D Cool Image" Container with Hover Transitions */}
      <div className="relative group perspective-1000 cursor-pointer">
        
        {/* The Image (Replace /3d_visual_4.png with your actual 3D rendering) */}
        <img src="discount_section1.jpg"alt="Vastra Culture 3D Collectible"
          className="w-full max-w-sm rounded-xl shadow-[0_0_80px_rgba(79,70,229,0.3)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-x-12 group-hover:rotate-y-12 group-hover:scale-110 object-contain"
        />

        {/* Floating Discount Tag on Hover */}
        <div className="absolute -top-10 -right-10 bg-indigo-600 p-4 rounded-full shadow-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-6">
          <p className="text-3xl font-black text-white tracking-tighter">40%</p>
          <p className="text-[10px] font-bold text-white uppercase tracking-widest -mt-1">Off</p>
        </div>
      </div>
    </div>

  </div>
</section>
    </div>
  )
}

export default Discount