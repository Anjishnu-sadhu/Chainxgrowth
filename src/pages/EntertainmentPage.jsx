import React from 'react';
import { TrendingUp, Users, Heart, Star, Calendar, Mic, Globe, Wallet, Play, Lightbulb, ArrowRight } from 'lucide-react';
import bgImage from '../assets/new_entertainment_bg.jpg';
import AnimatedNumber from '../components/AnimatedNumber';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const EntertainmentPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Top Section with Full Screen Background */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col pt-32 pb-20 lg:min-h-[700px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 flex-1 flex flex-col lg:flex-row relative z-10">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[2px] w-12 bg-[#c79c27]"></div>
              <span className="text-[12px] font-bold text-gray-800 tracking-[0.2em] uppercase">Entertainment & Events</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[44px] sm:text-[56px] lg:text-[64px] font-black text-[#0f172a] leading-[1.1] mb-2 tracking-tight"
            >
              More Than Fun
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[44px] sm:text-[56px] lg:text-[64px] font-black text-[#c79c27] leading-[1.1] mb-6 tracking-tight"
            >
              A Global Community
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] text-gray-600 mb-10 max-w-[500px] leading-relaxed font-medium"
            >
              Connecting creators, artists, fans and event organizers with opportunities that make entertainment bigger, brighter and more rewarding.
            </motion.p>

            {/* Features List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-6 mb-12 relative"
            >
              <div className="absolute left-5 top-5 bottom-5 w-[1px] bg-gray-200 -z-10"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f9f1d8] flex items-center justify-center flex-shrink-0 text-[#c79c27] shadow-sm">
                  <TrendingUp size={20} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">Events, Concerts & Experiences</h3>
                  <p className="text-[13px] text-gray-500">Discover and promote unforgettable events.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f9f1d8] flex items-center justify-center flex-shrink-0 text-[#c79c27] shadow-sm">
                  <Users size={20} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">Fan Engagement with Tokens</h3>
                  <p className="text-[13px] text-gray-500">Reward and connect with your fan community.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f9f1d8] flex items-center justify-center flex-shrink-0 text-[#c79c27] shadow-sm">
                  <Heart size={20} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">Support for Creators & Artists</h3>
                  <p className="text-[13px] text-gray-500">Tools and opportunities to grow your talent.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f9f1d8] flex items-center justify-center flex-shrink-0 text-[#c79c27] shadow-sm">
                  <Star size={20} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">A New Era of Digital Entertainment</h3>
                  <p className="text-[13px] text-gray-500">Innovating the future of entertainment worldwide.</p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="flex items-center gap-2 px-6 py-3.5 text-[14px] font-bold text-gray-900 bg-gradient-to-r from-[#e3c153] to-[#c79c27] rounded-xl hover:opacity-90 transition-opacity shadow-[0_8px_20px_rgba(199,156,39,0.3)]">
                Explore Entertainment Opportunities
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3.5 text-[14px] font-bold text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Side is empty because image graphics are baked into background */}
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="w-full bg-[#fcfcfc] border-y border-gray-200 py-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-12 flex flex-wrap items-center justify-between gap-8 lg:gap-4 relative z-10">
           <div className="flex items-center gap-4">
             <div className="text-[#c79c27] bg-[#f9f1d8] p-3 rounded-xl"><Users size={28} /></div>
             <div>
               <h4 className="text-[22px] font-black text-gray-900 leading-tight">
                 <AnimatedNumber end={1} suffix="M+" duration={2.5} />
               </h4>
               <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Fans Engaged</p>
             </div>
           </div>

           <div className="flex items-center gap-4">
             <div className="text-[#c79c27] bg-[#f9f1d8] p-3 rounded-xl"><Calendar size={28} /></div>
             <div>
               <h4 className="text-[22px] font-black text-gray-900 leading-tight">
                 <AnimatedNumber end={10} suffix="K+" duration={2.5} />
               </h4>
               <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Events Supported</p>
             </div>
           </div>

           <div className="flex items-center gap-4">
             <div className="text-[#c79c27] bg-[#f9f1d8] p-3 rounded-xl"><Mic size={28} /></div>
             <div>
               <h4 className="text-[22px] font-black text-gray-900 leading-tight">
                 <AnimatedNumber end={500} suffix="+" duration={2.5} />
               </h4>
               <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Creators & Artists</p>
             </div>
           </div>

           <div className="flex items-center gap-4">
             <div className="text-[#c79c27] bg-[#f9f1d8] p-3 rounded-xl"><Globe size={28} /></div>
             <div>
               <h4 className="text-[22px] font-black text-gray-900 leading-tight">Global Reach</h4>
               <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Across 100+ Countries</p>
             </div>
           </div>
           
           <div className="hidden lg:block ml-8">
              <span 
                className="text-[#c79c27] text-[32px] transform -rotate-[5deg] inline-block leading-[0.9] opacity-80"
                style={{fontFamily: "'Dancing Script', 'Brush Script MT', cursive"}}
              >
                Entertainment<br/>Creates<br/>Opportunities
              </span>
           </div>
        </div>
      </section>

      {/* Bottom Section - Focus Areas */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 xl:px-12 py-20 flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
         <div className="lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-[36px] font-black text-[#0f172a] mb-3 leading-tight tracking-tight">
              Our <span className="text-[#c79c27]">Focus Areas</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-medium leading-relaxed max-w-[300px]">
              Building a stronger entertainment ecosystem through technology and community.
            </p>
         </div>
         
         <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9f1d8] to-white flex items-center justify-center text-[#c79c27] mb-5 shadow-sm">
                  <Wallet size={24} />
               </div>
               <h4 className="text-[15px] font-bold text-gray-900 mb-2">Live Events</h4>
               <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Concerts, festivals & more.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9f1d8] to-white flex items-center justify-center text-[#c79c27] mb-5 shadow-sm">
                  <Users size={24} />
               </div>
               <h4 className="text-[15px] font-bold text-gray-900 mb-2">Fan Communities</h4>
               <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Engage. Reward. Grow.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9f1d8] to-white flex items-center justify-center text-[#c79c27] mb-5 shadow-sm">
                  <Play size={24} />
               </div>
               <h4 className="text-[15px] font-bold text-gray-900 mb-2">Creator Support</h4>
               <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Tools for a brighter tomorrow.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f9f1d8] to-white flex items-center justify-center text-[#c79c27] mb-5 shadow-sm">
                  <Lightbulb size={24} />
               </div>
               <h4 className="text-[15px] font-bold text-gray-900 mb-2">Digital Innovation</h4>
               <p className="text-[13px] text-gray-500 font-medium leading-relaxed">Shaping the future of entertainment</p>
            </div>
         </div>
      </section>

    </div>
  );
};

export default EntertainmentPage;
