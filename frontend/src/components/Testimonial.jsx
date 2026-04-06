import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <section className="bg-gray-300 py-20 px-6 lg:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-[0.2]">
        Voices of the <span className="text-indigo-600">Culture</span>
      </h2>
      <p className="mt-4 text-gray-500 font-medium uppercase tracking-widest text-xs">
        What our community is saying
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex gap-1 mb-4 text-indigo-600">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic leading-relaxed mb-6">
          "The quality of the oversized hoodies is unmatched. You can really tell they care about the supplier quality checks they mention."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
            AS
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Aman Sharma</h4>
            <p className="text-xs text-gray-500">Verified Buyer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex gap-1 mb-4 text-indigo-600">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic leading-relaxed mb-6">
          "Vastra Culture has the best streetwear drops. I love the royalty points system—it makes me want to keep coming back for every new release."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center font-bold text-pink-600">
            RK
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Rahul Kapoor</h4>
            <p className="text-xs text-gray-500">Fashion Blogger</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow lg:block md:hidden">
        <div className="flex gap-1 mb-4 text-indigo-600">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic leading-relaxed mb-6">
          "The delivery was incredibly fast for a hyperlocal service. It's rare to find such trendy clothes delivered within hours."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
            JD
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">John Doe</h4>
            <p className="text-xs text-gray-500">Early Adopter</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
    
  )
}

export default Testimonial;