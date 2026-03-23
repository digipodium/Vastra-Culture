import Link from 'next/link';
import React from 'react'
import { ShoppingCart, User } from 'lucide-react';
import { Search } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      
        <div className=" bg-white lg:pb-12 ">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8"></div>


  <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20">

         {/* LEFT SIDE: Project Name */}
        <div className="flex-shrink-0 ">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter pr-20 text-right text-black uppercase ">
            Vastra <span className="text-indigo-600">Culture</span>
          </h1>
        </div>

        {/* RIGHT SIDE: Utility Options */}

        {/* Search Icon */}

    
        <div className="hidden md:block w-full max-w-4xl  mx-auto px-24 py-8">
      <div className="flex items-stretch h-10 w-full overflow-hidden rounded-full shadow-sm">

        {/* Input Container  (search button icon)*/}
        <div className="relative flex-grow flex items-center px-4 group">
          <Search className="w-5 h-5 text-gray-500  mr-2 " />

          <input  type="text"
            placeholder="Search products"
            className='outline-none text-center'
            />
            
        </div>

        {/* Search Button */}
        <button className="bg-black hover:bg-gray-600 text-white px-10 flex items-center justify-center transition-colors duration-200">
          <span className="text-[11px] font-bold uppercase tracking-wide">Search</span>
        </button>
      </div>
    </div>
          
        <div className='flex  md:flex'>
        <div className="flex items-center justify-end space-x-6 md:space-x-10">
          

          {/* Nav Links */}
          <nav className="md:flex hidden  items-center space-x-8">  
            
            <a href="/" className="flex items-center text-black text-[11px] font-bold uppercase hover:text-gray-500 transition-colors space-x-2">
              Home
            </a>
            <a href="/" className="flex items-center text-black text-[11px] font-bold uppercase hover:text-gray-500 transition-colors space-x-2">
              products
            </a>
            <a href="/products" className="text-[11px] font-bold uppercase tracking-widest text-black hover:opacity-60 transition-opacity">
              contact
            </a>
            <a href="/wishlist" className="hover:opacity-60 transition-opacity">
              <Heart />
            </a>
            <a href="/addcart" className="hover:opacity-60 transition-opacity">
              <ShoppingCart />
            </a>

             {/* Account */}

          <Link href="/login" className="hover:opacity-60 transition-opacity">
               <UserRound />
          </Link>
            
          </nav>
          
        </div>
        <div className='md:hidden'>
        <a href="#">
          <Menu />
          </a>
      </div>
        </div>

      </div>
    </header>

    </div>
    </div>
  )
}

export default Navbar   