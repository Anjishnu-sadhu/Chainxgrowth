import AnimatedNumber from '../components/AnimatedNumber';
import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, Globe, HeadphonesIcon, ArrowLeft, EyeOff, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import loginBg from '../assets/login_bg.jpg';
import logoImg from '../assets/logo.png';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row font-sans bg-[#f8f9fb] relative">
      
      {/* Top Header - Global fixed position for mobile responsiveness */}
      <div className="fixed lg:absolute top-0 left-0 w-full p-4 sm:p-6 flex justify-start items-center z-50 pointer-events-none">
        <Link to="/" className="pointer-events-auto flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-gray-100 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
          <ArrowLeft className="w-4 h-4 text-[#ebd688]" /> <span className="hidden sm:inline">Back to Home</span>
        </Link>
      </div>
      
      {/* Left Side (Dark Background) */}
      <div 
        className="w-full lg:w-[55%] relative flex flex-col p-6 sm:p-12 xl:p-16 pt-24 lg:pt-16 text-white min-h-[70vh] lg:min-h-screen bg-black bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-center max-w-xl">
            <span className="text-[#ebd688] font-bold text-[11px] tracking-[0.2em] uppercase mb-4">
              Crypto Trading • Global Markets • Real Opportunities
            </span>
            
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-4">
              Invest Today<br/>
              <span className="text-[#ebd688]">Build Tomorrow</span>
            </h1>
            
            <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-md font-medium">
              A smarter way to trade, invest, and grow in the world of cryptocurrency. Join a global community that turns connections into opportunities.
            </p>
            
            {/* Feature Boxes */}
            <div className="flex flex-col gap-3 max-w-md">
              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#ebd688]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#ebd688]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white">Bank-Grade Security</span>
                  <span className="text-[12px] text-gray-400 font-medium">256-bit SSL Encryption</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#ebd688]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#ebd688]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white">Smart Trading Tools</span>
                  <span className="text-[12px] text-gray-400 font-medium">Real-Time Market Insights</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#ebd688]/20 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#ebd688]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white">Global Community</span>
                  <span className="text-[12px] text-gray-400 font-medium"><AnimatedNumber end={180} suffix="+" /> Countries</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#ebd688]/20 flex items-center justify-center shrink-0">
                  <HeadphonesIcon className="w-5 h-5 text-[#ebd688]" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white">24/7 Support</span>
                  <span className="text-[12px] text-gray-400 font-medium">Dedicated Team</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Invest</span>
            <span className="hover:text-white transition-colors cursor-pointer">Connect</span>
            <span className="hover:text-white transition-colors cursor-pointer">Grow</span>
          </div>

          <div className="absolute right-10 top-20 hidden xl:block pointer-events-none opacity-80">
            <span className="text-white text-3xl font-serif tracking-wider leading-[1.4]" style={{ fontFamily: 'cursive' }}>
              Trade<br/>Invest<br/><span className="text-[#ebd688]">Grow</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right Side (Light Login Area) */}
      <div className="w-full lg:w-[45%] bg-[#fafafa] flex flex-col relative min-h-screen">
        
        {/* Login Form Container */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-24">
          <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-10">
            
            {/* Form Header */}
            <div className="flex flex-col items-center mb-10 text-center">
              <img src={logoImg} alt="ChainXGrowth" className="h-20 sm:h-24 object-contain mb-6" />
              <h2 className="text-2xl font-black text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-sm font-medium text-gray-500">Sign in to access your dashboard</p>
            </div>

            {/* Form Fields */}
            <form className="flex flex-col gap-4">
              
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="User ID or Email"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-2 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-2 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between mt-1 mb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#ebd688] focus:ring-[#ebd688]" />
                  <span className="text-sm font-medium text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm font-bold text-[#c79c27] hover:underline">Forgot password?</a>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-[#2a2a2a] to-[#111] hover:from-[#111] hover:to-[#000] text-[#ebd688] font-bold py-4 rounded-xl transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 group">
                Log In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>

            {/* OR Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-[1px] bg-gray-100"></div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">OR</span>
              <div className="flex-1 h-[1px] bg-gray-100"></div>
            </div>

            {/* Social Logins */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span className="text-xs font-bold text-gray-700">Continue with Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 21 21"><path d="M10 0H0v10h10V0z" fill="#f25022"/><path d="M21 0H11v10h10V0z" fill="#7fba00"/><path d="M10 11H0v10h10V11z" fill="#00a4ef"/><path d="M21 11H11v10h10V11z" fill="#ffb900"/></svg>
                <span className="text-xs font-bold text-gray-700">Continue with Microsoft</span>
              </button>
            </div>

            <p className="text-center text-sm font-medium text-gray-500 mt-8">
              Don't have an account? <Link to="/signup" className="text-[#c79c27] font-bold hover:underline">Create Account</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
