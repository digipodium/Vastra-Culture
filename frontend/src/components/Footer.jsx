import link from 'next/link';
import React from 'react'

const footer = () => {
  return (
    <div>

      <footer className="bg-gray-100 border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 1. Follow Us Section */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-black font-black uppercase tracking-widest text-sm mb-6">Follow Us</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-6 text-gray-800 text-xs leading-relaxed ">
              Stay updated with the latest drops and culture shifts.
            </p>
          </div>

          {/* 2. Help Section */}
          <div>
            <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-6">Help</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* 3. Services Section */}
          <div>
            <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">hyperlocal service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Student Discount</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Vastra Membership</a></li>
            </ul>
          </div>

          {/* 4. Contact Us Section */}
          <div>
            <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-2"><e-mail className="w-4 h-4" /> hello@vastra.com</li>
              <li className="flex items-center gap-2"><phone className="w-4 h-4" /> +91 XXXXXXXXXX </li>
              <li className="flex items-center gap-2"><address className="w-4 h-4" /> Lucknow, India</li>
            </ul>
          </div>

          {/* 5. About Section */}
          <div>
            <h3 className="text-black font-bold uppercase tracking-widest text-xs mb-6">About</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-black-200 font-medium">
            © 2026 Vastra Culture. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <span>India</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default footer