import AnimatedNumber from '../components/AnimatedNumber';
import React from 'react';
import { Users, Gift, GraduationCap, ShieldCheck, ArrowRight, Library, Globe, BookOpen, Settings, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import cleanBg from '../assets/education_clean_bg.jpg';
import Navbar from '../components/Navbar';

const EducationPage = () => {
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
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[55%] xl:w-[45%] flex flex-col justify-center pt-10 bg-white/85 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-10 lg:p-0 rounded-3xl lg:rounded-none shadow-lg lg:shadow-none mt-10 lg:mt-0 relative z-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#c79c27]"></div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#c79c27] font-bold text-[11px] tracking-[0.2em] uppercase"
              >
                Education & Learning
              </motion.span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[52px] sm:text-[64px] lg:text-[72px] font-black leading-[1.05] tracking-tight mb-4 text-[#111827]"
            >
              Learn Today<br />
              <span className="text-[#c79c27]">Lead Tomorrow</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-[15px] sm:text-[17px] font-medium leading-relaxed mb-8 max-w-md"
            >
              Empowering students, educators, and institutions with opportunities that create a brighter future.
            </motion.p>
            
            {/* Feature List (Left side) */}
            <div className="flex flex-col gap-5 mb-10">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <Users className="w-5 h-5 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Access to Quality Education</span>
                  <span className="text-[13px] font-medium text-gray-500">Bridging the gap with better learning opportunities.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <Gift className="w-5 h-5 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Token-based Learning Rewards</span>
                  <span className="text-[13px] font-medium text-gray-500">Learn, achieve and earn rewards.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <GraduationCap className="w-5 h-5 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Support for Students & Institutions</span>
                  <span className="text-[13px] font-medium text-gray-500">Tools and resources for academic growth.</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf9ea] flex items-center justify-center shrink-0 border border-[#f3ead1]">
                  <ShieldCheck className="w-5 h-5 text-[#c79c27]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-gray-900 leading-tight">Skill Development for Future Jobs</span>
                  <span className="text-[13px] font-medium text-gray-500">Build in-demand skills for a successful career.</span>
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
                Explore Education Opportunities <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-3 bg-white border border-gray-200 text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Features & Stats Section */}
      <div className="w-full bg-[#f8f9fb] relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] pb-16 flex flex-col">
        
        {/* Top Banner (Stats) */}
        <div className="bg-white border-b border-gray-100 shadow-sm w-full">
          <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 border-t-[3px] border-transparent">
            
            <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto">
              <Users className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[18px] font-black text-gray-900 leading-tight"><AnimatedNumber end={10} suffix="M+" /></span>
                <span className="text-[12px] font-medium text-gray-500">Students Reached</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
              <Library className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[18px] font-black text-gray-900 leading-tight"><AnimatedNumber end={500} suffix="+" /></span>
                <span className="text-[12px] font-medium text-gray-500">Educational Institutions</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
              <GraduationCap className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[18px] font-black text-gray-900 leading-tight"><AnimatedNumber end={1} suffix="K+" /></span>
                <span className="text-[12px] font-medium text-gray-500">Learning Programs</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto lg:border-l border-gray-200 lg:pl-10">
              <Globe className="w-9 h-9 text-[#c79c27]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[14px] font-black text-gray-900 leading-tight">Global Reach</span>
                <span className="text-[12px] font-medium text-gray-500">Across <AnimatedNumber end={100} suffix="+" /> Countries</span>
              </div>
            </div>

            {/* Right Signature Text */}
            <div className="hidden xl:block ml-auto lg:border-l border-gray-200 lg:pl-10">
              <span className="text-[#c79c27] text-2xl font-serif italic tracking-wide opacity-90 leading-tight" style={{ fontFamily: 'cursive' }}>
                Education<br/>Creates<br/>Opportunities
              </span>
            </div>

          </div>
        </div>

        {/* Focus Areas Sub-Section */}
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 xl:px-12 pt-16 flex flex-col lg:flex-row gap-10">
          
          <div className="w-full lg:w-[25%] flex flex-col justify-center">
            <h2 className="text-[28px] font-black text-gray-900 leading-tight mb-3">
              Our <span className="text-[#c79c27]">Focus Areas</span>
            </h2>
            <p className="text-gray-500 text-[14px] font-medium leading-relaxed">
              Building a future-ready generation through education and skill development.
            </p>
          </div>

          <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <BookOpen className="w-8 h-8 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <span className="text-[15px] font-bold text-gray-900 mb-1">Quality Education</span>
              <span className="text-[12px] text-gray-500">More learning. More opportunities.</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <span className="text-[15px] font-bold text-gray-900 mb-1">Student Support</span>
              <span className="text-[12px] text-gray-500">Empowering every learner.</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <Settings className="w-8 h-8 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <span className="text-[15px] font-bold text-gray-900 mb-1">Skill Development</span>
              <span className="text-[12px] text-gray-500">Job-ready skills for tomorrow.</span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <Lightbulb className="w-8 h-8 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <span className="text-[15px] font-bold text-gray-900 mb-1">Innovation in Learning</span>
              <span className="text-[12px] text-gray-500">New ways to learn and grow.</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationPage;
