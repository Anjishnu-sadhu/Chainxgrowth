import AnimatedNumber from '../components/AnimatedNumber';
import React from 'react';
import { Users, Calendar, Mic2, Globe, ArrowRight, TrendingUp, Heart, Star, Ticket, PlayCircle, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import cleanBg from '../assets/entertainment_clean_bg.jpg';

const EntertainmentPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      
      {/* Top Hero Section */}
      <div className="relative w-full h-[100vh] min-h-[800px] flex flex-col">
        
        {/* Background Image (Right Side) */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-[100%] h-full bg-cover bg-[center_right] lg:bg-center z-0"
          style={{ backgroundImage: `url(${cleanBg})` }}
        >
          {/* Dark gradient overlay for mobile readability */}
          <div className="absolute inset-0 bg-black/60 lg:hidden"></div>
        </div>

        {/* Desktop SVG Curve (Overlays image to create the split) */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="gold-stroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff2c2" />
              <stop offset="40%" stopColor="#c79c27" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="8" dy="0" stdDeviation="10" floodColor="#ffffff" floodOpacity="0.8" />
              <feDropShadow dx="4" dy="0" stdDeviation="6" floodColor="#c79c27" floodOpacity="0.4" />
            </filter>
          </defs>
          <path d="M0,0 L66,0 C50,30 38,70 44,100 L0,100 Z" fill="white" filter="url(#drop-shadow)" />
          <path d="M66,0 C50,30 38,70 44,100" fill="none" stroke="url(#gold-stroke)" strokeWidth="1" filter="url(#gold-glow)" />
        </svg>

        {/* Absolute Floating Texts over Image (Desktop Only) */}
        <div className="hidden lg:block absolute top-32 right-12 2xl:right-32 z-10 text-right transform -rotate-[8deg]">
          <h3 className="text-white text-[42px] leading-[1.1] font-serif italic tracking-wide" style={{ fontFamily: '"Caveat", "Brush Script MT", cursive' }}>
            Creators<br/>Fans<br/>Events<br/>Global Impact
          </h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37] mt-2 opacity-80"></div>
        </div>

        <div className="hidden lg:block absolute bottom-24 right-12 2xl:right-32 z-10 text-right">
          <p className="text-[#c79c27] text-[17px] font-bold tracking-[0.25em] uppercase leading-relaxed">
            Entertainment<br/>Connects<br/>People
          </p>
          <div className="w-10 h-[2px] bg-[#c79c27] mt-4 ml-auto"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-20 flex-1 max-w-[1400px] mx-auto w-full px-6 sm:px-12 flex flex-col justify-center">
          <div className="w-full lg:w-[50%] flex flex-col py-10 lg:py-0">
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-[2px] bg-[#c79c27]"></div>
              <span className="text-[#c79c27] lg:text-gray-800 font-bold text-[11px] tracking-[0.25em] uppercase">
                Entertainment & Events
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-black leading-[1.05] tracking-tight mb-4 text-white lg:text-[#0f172a]">
              More Than Fun<br/>
              <span className="text-[#c79c27]">A Global Community</span>
            </h1>
            
            <p className="text-gray-200 lg:text-gray-600 text-[16px] sm:text-[18px] font-medium leading-relaxed mb-10 max-w-lg">
              Connecting creators, artists, fans and event organizers with opportunities that make entertainment bigger, brighter and more rewarding.
            </p>
            
            {/* Feature List */}
            <div className="flex flex-col gap-6 mb-10">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c79c27] flex items-center justify-center shrink-0 shadow-sm bg-white lg:bg-transparent">
                  <TrendingUp className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
                </div>
                <div className="w-[2px] h-10 bg-white/20 lg:bg-gray-200 shrink-0 mt-1 rounded-full"></div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[16px] font-black text-white lg:text-gray-900 leading-tight mb-1">Events, Concerts & Experiences</span>
                  <span className="text-[14px] font-medium text-gray-300 lg:text-gray-500">Discover and promote unforgettable events.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c79c27] flex items-center justify-center shrink-0 shadow-sm bg-white lg:bg-transparent">
                  <Users className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
                </div>
                <div className="w-[2px] h-10 bg-white/20 lg:bg-gray-200 shrink-0 mt-1 rounded-full"></div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[16px] font-black text-white lg:text-gray-900 leading-tight mb-1">Fan Engagement with Tokens</span>
                  <span className="text-[14px] font-medium text-gray-300 lg:text-gray-500">Reward and connect with your fan community.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c79c27] flex items-center justify-center shrink-0 shadow-sm bg-white lg:bg-transparent">
                  <Heart className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
                </div>
                <div className="w-[2px] h-10 bg-white/20 lg:bg-gray-200 shrink-0 mt-1 rounded-full"></div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[16px] font-black text-white lg:text-gray-900 leading-tight mb-1">Support for Creators & Artists</span>
                  <span className="text-[14px] font-medium text-gray-300 lg:text-gray-500">Tools and opportunities to grow your talent.</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#c79c27] flex items-center justify-center shrink-0 shadow-sm bg-white lg:bg-transparent">
                  <Star className="w-5 h-5 text-[#c79c27]" strokeWidth={2.5} />
                </div>
                <div className="w-[2px] h-10 bg-white/20 lg:bg-gray-200 shrink-0 mt-1 rounded-full"></div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-[16px] font-black text-white lg:text-gray-900 leading-tight mb-1">A New Era of Digital Entertainment</span>
                  <span className="text-[14px] font-medium text-gray-300 lg:text-gray-500">Innovating the future of entertainment worldwide.</span>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#ebd688] to-[#c79c27] text-gray-900 font-bold px-8 py-4 rounded-full shadow-[0_8px_15px_rgba(199,156,39,0.3)] hover:scale-105 transition-transform w-full sm:w-auto text-[15px]">
                Explore Entertainment Opportunities <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto text-[15px]">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="w-full bg-white border-b border-gray-100 py-8 relative z-20 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
          
          <div className="flex items-center gap-4">
            <Users className="w-9 h-9 text-[#c79c27]" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-[20px] font-black text-gray-900 leading-tight"><AnimatedNumber end={1} suffix="M+" /></span>
              <span className="text-[13px] font-bold text-gray-500">Fans Engaged</span>
            </div>
          </div>
          
          <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>

          <div className="flex items-center gap-4">
            <Calendar className="w-9 h-9 text-[#c79c27]" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-[20px] font-black text-gray-900 leading-tight"><AnimatedNumber end={10} suffix="K+" /></span>
              <span className="text-[13px] font-bold text-gray-500">Events Supported</span>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>

          <div className="flex items-center gap-4">
            <Mic2 className="w-9 h-9 text-[#c79c27]" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-[20px] font-black text-gray-900 leading-tight"><AnimatedNumber end={500} suffix="+" /></span>
              <span className="text-[13px] font-bold text-gray-500">Creators & Artists</span>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] h-10 bg-gray-200"></div>

          <div className="flex items-center gap-4">
            <Globe className="w-9 h-9 text-[#c79c27]" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-[16px] font-black text-gray-900 leading-tight">Global Reach</span>
              <span className="text-[13px] font-bold text-gray-500">Across <AnimatedNumber end={100} suffix="+" /> Countries</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-10 bg-gray-200"></div>

          <div className="hidden xl:flex items-center justify-center transform -rotate-3">
            <span className="text-[#c79c27] text-3xl font-serif italic tracking-wide" style={{ fontFamily: '"Caveat", "Brush Script MT", cursive' }}>
              Entertainment<br/>Creates<br/><span className="ml-4">Opportunities</span>
            </span>
          </div>

        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="w-full bg-[#f8f9fa] pt-20 pb-24 relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Header */}
          <div className="w-full lg:w-[25%] flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-[32px] lg:text-[36px] font-black text-gray-900 leading-tight mb-4">
              Our <span className="text-[#c79c27]">Focus Areas</span>
            </h2>
            <p className="text-gray-500 text-[15px] font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Building a stronger entertainment ecosystem through technology and community.
            </p>
          </div>

          <div className="w-full lg:w-[75%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            
            <div className="flex flex-col hover:-translate-y-1 transition-all">
              <Ticket className="w-10 h-10 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-bold text-gray-900 mb-2">Live Events</h3>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">Concerts, festivals & more.</p>
            </div>

            <div className="flex flex-col hover:-translate-y-1 transition-all">
              <Users className="w-10 h-10 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-bold text-gray-900 mb-2">Fan Communities</h3>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">Engage. Reward. Grow.</p>
            </div>

            <div className="flex flex-col hover:-translate-y-1 transition-all">
              <PlayCircle className="w-10 h-10 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-bold text-gray-900 mb-2">Creator Support</h3>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">Tools for a brighter tomorrow.</p>
            </div>

            <div className="flex flex-col hover:-translate-y-1 transition-all">
              <Lightbulb className="w-10 h-10 text-[#c79c27] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-bold text-gray-900 mb-2">Digital Innovation</h3>
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed">Shaping the future of entertainment</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default EntertainmentPage;
