import AnimatedNumber from '../components/AnimatedNumber';
import React from 'react';
import { Users, Activity, Ticket, Globe, ArrowRight, Shield, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import cleanBg from '../assets/sports_clean_bg.jpg';
import Navbar from '../components/Navbar';

const SportsPage = () => {
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
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 flex-1 flex flex-col relative z-10">
          
          {/* Left Content Area - Takes up more space here since everything is on the left */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center pt-10 bg-white/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-3xl lg:rounded-none shadow-lg lg:shadow-none mt-10 lg:mt-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#c79c27]"></div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#c79c27] font-bold text-[11px] tracking-[0.2em] uppercase"
              >
                Sports & Digital Engagement
              </motion.span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[52px] sm:text-[64px] lg:text-[72px] font-black leading-[1.05] tracking-tight mb-4"
            >
              <span className="text-[#c79c27]">Sports</span><br />
              <span className="text-gray-900">Passion Unites People</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-[15px] sm:text-[17px] font-medium leading-relaxed mb-8 max-w-md"
            >
              Connecting fans, athletes, teams and events through digital opportunities. Empowering a stronger, more inclusive global sports ecosystem.
            </motion.p>
            
            {/* Feature List (Left side) */}
            <div className="flex flex-col gap-5 mb-10">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fdf9ea] to-[#ebd688] flex items-center justify-center shrink-0 shadow-md border border-[#e8d596]">
                  <Users className="w-5 h-5 text-gray-900" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Fan Tokens & Engagement</span>
                  <span className="text-[13px] font-medium text-gray-500">Bringing fans closer to the action.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fdf9ea] to-[#ebd688] flex items-center justify-center shrink-0 shadow-md border border-[#e8d596]">
                  <Activity className="w-5 h-5 text-gray-900" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Support for Athletes & Teams</span>
                  <span className="text-[13px] font-medium text-gray-500">Fueling talent and building futures.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fdf9ea] to-[#ebd688] flex items-center justify-center shrink-0 shadow-md border border-[#e8d596]">
                  <Ticket className="w-5 h-5 text-gray-900" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Event Ticketing & Merchandise</span>
                  <span className="text-[13px] font-medium text-gray-500">Seamless access to live experiences.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fdf9ea] to-[#ebd688] flex items-center justify-center shrink-0 shadow-md border border-[#e8d596]">
                  <Globe className="w-5 h-5 text-gray-900" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Building a Stronger Global Sports Ecosystem</span>
                  <span className="text-[13px] font-medium text-gray-500">Uniting communities worldwide.</span>
                </div>
              </motion.div>

            </div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="flex items-center gap-3 bg-gradient-to-r from-[#ebd688] to-[#c79c27] text-gray-900 font-bold px-8 py-3.5 rounded-xl shadow-[0_10px_20px_rgba(199,156,39,0.3)] hover:shadow-xl hover:scale-105 transition-all">
                Explore Sports <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                Discover Opportunities
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Features Banner */}
      <div className="w-full bg-white relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] -mt-2">
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 border-t-[3px] border-[#f3ead1]">
          
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
            <Users className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[18px] font-black text-gray-900 leading-tight"><AnimatedNumber end={10} suffix="M+" /></span>
              <span className="text-[12px] font-medium text-gray-500">Fans Connected</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
            <Shield className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[18px] font-black text-gray-900 leading-tight"><AnimatedNumber end={500} suffix="+" /></span>
              <span className="text-[12px] font-medium text-gray-500">Teams & Clubs</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
            <Calendar className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[18px] font-black text-gray-900 leading-tight"><AnimatedNumber end={1} suffix="K+" /></span>
              <span className="text-[12px] font-medium text-gray-500">Events</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
            <Globe className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-[14px] font-black text-gray-900 leading-tight">Global Sports Network</span>
              <span className="text-[12px] font-medium text-gray-500">Across <AnimatedNumber end={100} suffix="+" /> Countries</span>
            </div>
          </div>

          {/* Right Signature Text */}
          <div className="hidden xl:block ml-auto lg:border-l border-gray-200 lg:pl-10">
            <span className="text-[#c79c27] text-3xl font-serif italic tracking-wider opacity-80" style={{ fontFamily: 'cursive' }}>
              Play<br/>Connect<br/>Grow
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SportsPage;
