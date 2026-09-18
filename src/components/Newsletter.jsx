import React, { useState } from 'react';
import { motion } from 'framer-motion';
import newsletterImage from '../assets/chainx_newsletter.jpg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full py-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white border border-gray-100 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col md:flex-row items-center justify-between relative group"
      >
        
        {/* Content */}
        <div className="p-8 md:p-12 lg:p-14 md:w-3/5 relative z-10 flex flex-col justify-center h-full">
          <h2 className="text-[24px] sm:text-[28px] font-black text-gray-900 tracking-tight mb-2">
            Stay Ahead in Crypto
          </h2>
          <p className="text-gray-500 text-[12px] leading-relaxed mb-6 max-w-xs font-medium">
            Get the latest market updates, insights, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex w-full max-w-sm bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#c79c27] focus-within:ring-1 focus-within:ring-[#c79c27] transition-all h-12 shadow-sm relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-5 text-[13px] text-gray-900 placeholder-gray-400 outline-none font-medium"
              required
            />
            <button 
              type="submit" 
              className="px-8 bg-gradient-to-r from-[#e3c153] to-[#c79c27] hover:opacity-90 text-gray-900 text-[13px] font-bold transition-opacity"
            >
              Subscribe
            </button>
            {subscribed && (
              <div className="absolute inset-0 bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[13px] z-10 transition-all">
                Subscribed successfully!
              </div>
            )}
          </form>
        </div>
        
        {/* Background Graphic */}
        <div className="hidden md:block absolute right-[-5%] lg:right-[0%] top-0 h-full w-[45%] pointer-events-none mix-blend-multiply">
          <img 
            src={newsletterImage} 
            alt="Newsletter Subscription" 
            className="w-full h-full object-cover object-left opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out" 
            style={{ maskImage: 'linear-gradient(to right, transparent, black 40%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 40%)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
