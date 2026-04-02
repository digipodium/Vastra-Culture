import Collab from '@/components/Collab';
import Discount from '@/components/Discount';
import ProductSection from '@/components/Product';
import Testimonial from '@/components/Testimonial';
import React from 'react';

const Hero = () => {
  return (
    <div>

     <section className="text-grey-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Update Your Style 
        <br className="hidden lg:inline-block" />
        With Me!
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Explore Now
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="c:\Users\prabh\OneDrive\ドキュメント\college project\home page image.png"
      />
    </div>
  </div>
</section>

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Products
      </h2>
    </div>
    {/* text - end */}
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="absolute left-0 bottom-2 flex gap-2">
            <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
              -50%
            </span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              New
            </span>
          </div>
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg  font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Fancy Outfit
            </a>
            <span className=" text-gray-500 ">by Vastra Culture</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Nick Karvounis"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Cool Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Nice Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Vladimir Fedotov"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Lavish Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
      
        </div>
      </div>
      {/* product - end */}
    </div>
  </div>
</div>

{/* New Product */}

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        New Product 
      </h2>
    
    </div>
    {/* text - end */}
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="absolute left-0 bottom-2 flex gap-2">
            <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
              -50%
            </span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              New
            </span>
          </div>
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Fancy Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
            <span className="text-sm text-red-500 line-through">$39.99</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Nick Karvounis"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Cool Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$29.99</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Nice Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$35.00</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Vladimir Fedotov"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Lavish Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$49.99</span>
          </div>
        </div>
      </div>
      {/* product - end */}
    </div>
  </div>
</div>

{/*Exclusive Product */}

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Exclusive Products
      </h2>
      
    </div>
    {/* text - end */}
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="absolute left-0 bottom-2 flex gap-2">
            <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
              -50%
            </span>
            <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
              New
            </span>
          </div>
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Fancy Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
            <span className="text-sm text-red-500 line-through">$39.99</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Nick Karvounis"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Cool Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$29.99</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Austin Wade"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Nice Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$35.00</span>
          </div>
        </div>
      </div>
      {/* product - end */}
      {/* product - start */}
      <div>
        <a
          href="#"
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Photo by Vladimir Fedotov"
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex items-start justify-between gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              Lavish Outfit
            </a>
            <span className="text-gray-500">by Vastra Culture</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-gray-600 lg:text-lg">$49.99</span>
          </div>
        </div>
      </div>
      {/* product - end */}
    </div>
  </div>
</div>

{/* Testimonial */}

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
      Our Collaboration
    </h2>
    <div className="grid gap-4 md:grid-cols-2 md:gap-8">
      {/* quote - start */}
      <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
        <div className="max-w-md text-center text-white lg:text-lg">
          “This is a section of some simple filler text, also known as
          placeholder text.”
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
          </div>
          <div>
            <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
              LOUIS VUITTON
            </div>
          </div>
        </div>
      </div>
      {/* quote - end */}
      {/* quote - start */}
      <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6">
        <div className="max-w-md text-center text-white lg:text-lg">
          “This is a section of some simple filler text, also known as
          placeholder text.”
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
          </div>
          <div>
            <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
              Allen Solly
            </div>
          </div>
        </div>
      </div>
      {/* quote - end */}
    </div>
  </div>
</div>





    </div>
  );
}
