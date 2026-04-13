'use client';

import Link from 'next/link';
import React, { useState } from 'react' // Added useState for sidebar toggle
import { ShoppingCart, User, Search, UserRound, Heart, Menu, X, ChevronRight, Globe } from 'lucide-react';
import NavbarWrapper from '@/components/NavbarWrapper';
import Sidebar from '@/components/Slidebar';

const Navbar = () => {
  // Added state for sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className=" bg-white lg:pb-12 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8"></div>

        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 px-6 lg:px-12">
          <div className="max-w-360 mx-auto flex items-center justify-between h-20">

            {/* LEFT SIDE: Project Name */}
            <div className="shrink-0 ">
              <h1 className="text-xl md:text-2xl  font-black tracking-tighter pr-20 text-right text-black uppercase ">
                Vastra <span className="text-indigo-600">Culture</span>
              </h1>
            </div>

            {/* RIGHT SIDE: Utility Options */}
            <div className="hidden md:block w-full max-w-4xl  mx-auto px-24 py-8">
              <div className="border border-gray-600 flex items-stretch h-10 w-full overflow-hidden rounded-full shadow-sm">
                <div className="relative grow flex items-center px-4 group">
                  <input type="text"
                    placeholder="Search products"
                    className='outline-none'
                  />
                  <Search className="absolute right-2 w-5 h-5 text-gray-500  mr-2 " />
                </div>
              </div>
            </div>

            <div className='flex  md:flex'>
              <div className="flex items-center justify-end space-x-6 md:space-x-10">
                <nav className="md:flex hidden  items-center space-x-8">
                  <a href="/" className="flex items-center text-black text-[11px] font-bold uppercase hover:text-gray-500 transition-colors space-x-2">
                    Home
                  </a>
                  <a href="/products" className="flex items-center text-black text-[11px] font-bold uppercase hover:text-gray-500 transition-colors space-x-2">
                    products
                  </a>
                  <a href="/contact" className="text-[11px] font-bold uppercase tracking-widest text-black hover:opacity-60 transition-opacity">
                    contact
                  </a>
                  <a href="/user/wishlist" className="hover:opacity-60 transition-opacity">
                    <Heart />
                  </a>
                  <a href="/user/cart" className="hover:opacity-60 transition-opacity">
                    <ShoppingCart />
                  </a>
                  <Link href="/login" className="hover:opacity-60 transition-opacity">
                    <UserRound />
                  </Link>
                </nav>
              </div>

              {/* Added onClick to trigger sidebar */}
              <div className='md:hidden'>
                <button onClick={() => setIsSidebarOpen(true)}>
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* --- SIDEBAR SECTION (Integrated without changing Navbar logic) --- */}
      
      {/* Overlay Background */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-500 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Panel */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-[110] transition-transform duration-500 ease-in-out border-r border-black shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full font-sans text-black">
          
          {/* Close Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Menu</span>
            <button onClick={() => setIsSidebarOpen(false)}>
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

            {/* 2. SEARCH INPUT (Clean & Simple) */}
          <div className="px-8 mb-10">
                      <div className="relative border-b border-black pb-2">
                        <input 
                          type="text" 
                          placeholder="SEARCH COLLECTION..." 
                          className="w-full bg-transparent outline-none text-[11px] font-bold tracking-widest uppercase placeholder:text-gray-300"
                        />
                        <Search size={14} className="absolute right-0 top-0 text-gray-400" />
                      </div>
                    </div>

          {/* Sidebar Navigation Links */}
          <nav className="flex-1 px-8 py-10 space-y-8">
            {[
              
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Wishlist", href: "/user/wishlist" },
              { name: "Cart", href: "/user/cart" },
              { name: "Contact", href: "/contact" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="flex items-center justify-between group"
              >
                <span className="text-sm font-bold uppercase tracking-tighter">{item.name}</span>
                <ChevronRight size={14} className="text-gray-300" />
              </a>
            ))}
          </nav>

           Sidebar Footer 
          <div className="p-8 border-t border-black bg-gray-50/50">
            <div className="space-y-4">
              <Link href="/login" className="flex items-center gap-4" onClick={() => setIsSidebarOpen(false)}>
                <UserRound size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Account</span>
              </Link>
            </div>
          </div> 
        </div>
      </aside> 


    <Sidebar/>
   

    </div>
  )
}

export default Navbar;