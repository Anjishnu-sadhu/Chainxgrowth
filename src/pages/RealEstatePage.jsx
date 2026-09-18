import AnimatedNumber from '../components/AnimatedNumber';
import React from 'react';
import { Home, TrendingUp, Users, ShieldCheck, ArrowRight, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import cleanBg from '../assets/real_estate_clean_bg.jpg';
import Navbar from '../components/Navbar';

const RealEstatePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Top Section with Full Screen Background */}
      <div 
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col pt-32 pb-20"
        style={{ backgroundImage: `url(${cleanBg})` }}
      >
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 flex-1 flex flex-col lg:flex-row relative z-10">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-10 bg-white/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-3xl lg:rounded-none shadow-lg lg:shadow-none mt-10 lg:mt-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#c79c27] font-bold text-[11px] tracking-[0.2em] uppercase mb-4"
            >
              Invest in a brighter tomorrow
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[52px] sm:text-[64px] lg:text-[72px] font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
            >
              Real <span className="text-[#c79c27]">Estate</span><br />
              Opportunities<br />
              That Grow
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-[15px] sm:text-[17px] font-medium leading-relaxed mb-10 max-w-md"
            >
              Discover premium properties, market insights, and investment opportunities — all in one trusted platform.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 bg-gradient-to-r from-[#ebd688] to-[#c79c27] text-gray-900 font-bold px-8 py-4 rounded-xl shadow-[0_10px_20px_rgba(199,156,39,0.3)] hover:shadow-xl hover:scale-105 transition-all w-max"
            >
              Explore Real Estates <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 sm:gap-10 mt-12 sm:mt-16 pt-8 border-t border-gray-200/50"
            >
              <div className="flex flex-col">
                <span className="text-[28px] font-black text-[#c79c27]"><AnimatedNumber end={500} suffix="+" /></span>
                <span className="text-[12px] font-bold text-gray-500">Verified Listings</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-[28px] font-black text-[#c79c27]"><AnimatedNumber end={50} suffix="+" /></span>
                <span className="text-[12px] font-bold text-gray-500">Cities Covered</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-[28px] font-black text-[#c79c27]"><AnimatedNumber end={10} suffix="K+" /></span>
                <span className="text-[12px] font-bold text-gray-500">Happy Investors</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Feature Pills Area */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex flex-col justify-center lg:items-end pr-0 lg:pr-4 xl:pr-10">
            <div className="flex flex-col gap-6">
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-2 pr-6 sm:pr-8 flex items-center gap-4 sm:gap-5 lg:mr-8"
              >
                <div className="w-14 h-14 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <Home className="w-7 h-7 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight mb-0.5">Real Assets</span>
                  <span className="text-[12px] font-medium text-gray-500">Tangible. Valuable. Future-Ready.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-2 pr-6 sm:pr-8 flex items-center gap-4 sm:gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <TrendingUp className="w-7 h-7 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight mb-0.5">Tokenized Property Investments</span>
                  <span className="text-[12px] font-medium text-gray-500">Invest Smarter. Access Wider.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-2 pr-6 sm:pr-8 flex items-center gap-4 sm:gap-5 lg:ml-[-20px]"
              >
                <div className="w-14 h-14 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <Users className="w-7 h-7 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight mb-0.5">Fractional Ownership</span>
                  <span className="text-[12px] font-medium text-gray-500">Own a Part. Be a Part.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-2 pr-6 sm:pr-8 flex items-center gap-4 sm:gap-5 lg:mr-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <ShieldCheck className="w-7 h-7 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight mb-0.5">Transparent & Secure Transactions</span>
                  <span className="text-[12px] font-medium text-gray-500">Trust Built In.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-2 pr-6 sm:pr-8 flex items-center gap-4 sm:gap-5 lg:ml-8"
              >
                <div className="w-14 h-14 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <Users className="w-7 h-7 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight mb-0.5">Building Communities</span>
                  <span className="text-[12px] font-medium text-gray-500">More Than Properties. Better Lives.</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Banner */}
      <div className="w-full bg-white relative z-20 border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.02)] -mt-2">
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 flex flex-wrap lg:flex-nowrap justify-between gap-8">
          
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <Home className="w-10 h-10 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-900 leading-tight">Verified Listings</span>
              <span className="text-[12px] font-medium text-gray-500">Trusted & Genuine Properties</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
            <TrendingUp className="w-10 h-10 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-900 leading-tight">Market Insights</span>
              <span className="text-[12px] font-medium text-gray-500">Data-Driven Decisions</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
            <ShieldCheck className="w-10 h-10 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-900 leading-tight">Secure Investments</span>
              <span className="text-[12px] font-medium text-gray-500">Safe & Transparent</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
            <Headphones className="w-10 h-10 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-gray-900 leading-tight">Expert Support</span>
              <span className="text-[12px] font-medium text-gray-500">Always Here to Help</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
