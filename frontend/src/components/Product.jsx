import link from 'next/link';
import React from 'react'
  
const ProductSection = () => {
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

            <div className='w-full flex flex-wrap justify-evenly pt-4'>
              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-44 h-46 rounded-sm' src="product1.jpg" alt="t-shirt" />
                <p className='text-sm font-bold text-gray-500'>Moto Oversized T-shirt</p>
                <p className='text-xl font-bold '>899</p>
              </div>

              <div className='w-44  pt-8 flex flex-col items-center mb-12 '>
                <img className='w-44 h-46 rounded-sm' src="product2.jpg" alt="t-shirt" />
                <p className='text-sm font-bold text-gray-500'>Urban Oversized T-shirt</p>
                <p className='text-xl font-bold '>799</p>
              </div>

              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-36 h-46 rounded-sm' src="product3.jpg" alt="t-shirt" />
                <p className='text-sm font-bold text-gray-500'>Unisex Oversized T-shirt</p>
                <p className='text-xl font-bold '>499</p>
              </div>

              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-34 h-46 rounded-sm' src="product4.jpg" alt="t-shirt" />
                <p className='text-sm font-bold text-gray-500'>Oversized T-shirt</p>
                <p className='text-xl font-bold '>599</p>
              </div>
            </div> 

            {/* our New Arrivals section */}
            <div className='bg-gray-300'>
            <div>
              <h2 className='text-xl md-text-3xl flex flex-col text-center  font-black text-black uppercase tracking-[0.2em]  mt-2 ml-12
              pt-4 ' 
              >New Collections</h2>
            </div>
            <div className='w-full flex flex-wrap justify-evenly pt-4'>
              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-60 h-60 rounded-sm' src="New_arrivals1.jpg" alt="t-shirt" />
                <p className='text-lg font-bold text-black pt-2'>Sneakers</p>
                {/* <p className='text-xl font-bold '>899</p> */}
              </div>

              <div className='w-44  pt-8 flex flex-col items-center mb-12 '>
                <img className='w-60 h-60 rounded-sm' src="New_arrivals2.jpg" alt="t-shirt" />
                <p className='text-lg font-bold text-black pt-2'> Watches</p>
                {/* <p className='text-xl font-bold '>799</p> */}
              </div>

              <div className='w-46 pt-8 flex flex-col items-center mb-12 '>
                <img className='w-60 h-60 rounded-sm' src="New_arrivals3.jpg" alt="t-shirt" />
                <p className='text-lg font-bold text-black pt-2'>jewellerys</p>
                {/* <p className='text-xl font-bold '>499</p> */}
              </div>
            </div> 
            
            </div>
          </div>       
      </div>
    </section>

  )
};
export default ProductSection;