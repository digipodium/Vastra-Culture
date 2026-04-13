'use client';
import React, { useState } from 'react';
import { X, MessageSquare, Star, ArrowRight } from 'lucide-react';

const FeedbackPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleIgnore = () => {
    // Logic to send to WhatsApp/SMS for later
    const message = "Hi! We're glad you received your Vastra Culture order. When you're ready, share your thoughts here: [Review Link]";
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab and close popup
    window.open(whatsappUrl, '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-6 font-sans">
      <div className="w-full max-w-[400px] bg-white border border-black p-8 relative shadow-2xl">
        
        {/* Close Icon */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gray-50 rounded-full">
              <Star size={32} className="text-black" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-xl font-bold uppercase tracking-tighter mb-2">Authenticity Check</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6">Your order has been delivered</p>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            How was the fabric quality? Help our community by sharing a genuine review of your product.
          </p>

          <div className="space-y-3">
            {/* Primary Action */}
            <button 
              className="w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all border border-black"
              onClick={() => { /* Navigate to review page */ }}
            >
              Write Review Now
            </button>

            {/* Ignore / Save for later Action */}
            <button 
              onClick={handleIgnore}
              className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] border border-black/10 hover:border-black transition-all flex items-center justify-center gap-2"
            >
              Remind me on WhatsApp <MessageSquare size={14} />
            </button>
          </div>

          <p className="mt-6 text-[9px] text-gray-300 uppercase tracking-widest italic">
            Vastra Culture • Quality Verified
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;