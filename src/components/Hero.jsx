import React from 'react';
import { ShieldCheck, Zap, Gift, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="w-full relative">
      <div className="px-4 sm:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[500px] lg:min-h-[600px] pb-16 lg:pb-24">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-span-7 flex flex-col pt-12 lg:pt-20"
      >
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex w-fit px-4 py-1.5 mb-6 text-[11px] font-bold text-[#8c6b12] bg-[#f9f1d8] rounded-full">
          Invest Smarter. Grow Bigger.
        </motion.div>
        
        {/* Headline */}
        <motion.h1 variants={itemVariants} className="text-[44px] sm:text-[56px] lg:text-[64px] font-black text-[#1a1a1a] leading-[1.1] mb-5 tracking-tight">
          Buy, Trade & Invest<br />in <span className="text-[#c79c27]">Crypto</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-[15px] text-gray-500 mb-10 max-w-[460px] leading-relaxed font-medium">
          Join millions of users worldwide and trade 350+ cryptocurrencies with ease, security, and confidence.
        </motion.p>
        
        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
          <button className="px-8 py-3.5 text-[14px] font-bold text-gray-900 bg-gradient-to-r from-[#e3c153] to-[#c79c27] rounded-xl hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(199,156,39,0.3)]">
            Get Started
          </button>
          <button className="px-8 py-3.5 text-[14px] font-bold text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
            Explore Markets
          </button>
        </motion.div>

        {/* Mini Features */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 lg:gap-4">
          <div className="flex flex-col gap-1.5">
            <ShieldCheck className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
            <h3 className="text-[12px] font-bold text-gray-900">Secure & Trusted</h3>
            <p className="text-[10px] text-gray-500 leading-snug">Bank-level security to protect your assets</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Zap className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
            <h3 className="text-[12px] font-bold text-gray-900">Fast & Reliable</h3>
            <p className="text-[10px] text-gray-500 leading-snug">Lightning-fast trades and instant deposits</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Gift className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
            <h3 className="text-[12px] font-bold text-gray-900">Earn Rewards</h3>
            <p className="text-[10px] text-gray-500 leading-snug">Stake, earn and grow your crypto</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <HeadphonesIcon className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
            <h3 className="text-[12px] font-bold text-gray-900">24/7 Support</h3>
            <p className="text-[10px] text-gray-500 leading-snug">Expert support whenever you need</p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Empty right column since the graphic is now baked into the background image */}
      <div className="hidden lg:block lg:col-span-5"></div>
      </div>
    </section>
  );
};

export default Hero;
