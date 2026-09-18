import AnimatedNumber from '../components/AnimatedNumber';
import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, Globe, HeadphonesIcon, ArrowLeft, EyeOff, Eye, ArrowRight, Gift, User, Mail, Phone, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import loginBg from '../assets/login_bg.jpg';
import logoImg from '../assets/logo.png';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row font-sans bg-[#0f1115] relative overflow-hidden">
      
      {/* Top Header - Global fixed position */}
      <div className="fixed lg:absolute top-0 right-0 w-full p-4 sm:p-6 flex justify-start items-center z-50 pointer-events-none lg:w-[50%]">
        <Link to="/" className="pointer-events-auto flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-[13px] font-bold text-gray-700 hover:bg-gray-50 transition-colors ml-4 lg:ml-0">
          <ArrowLeft className="w-4 h-4 text-[#c79c27]" /> <span>Back to Home</span>
        </Link>
      </div>
      
      {/* Left Side (Dark Background) */}
      <div 
        className="w-full lg:w-[50%] relative flex flex-col p-6 sm:p-10 xl:p-12 text-white min-h-[50vh] lg:min-h-screen bg-black bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent"></div>
        
        {/* Handwritten text over image - Top Right */}
        <div className="absolute top-12 right-12 z-20 transform -rotate-12 hidden lg:block opacity-90">
          <h3 className="text-white text-3xl leading-tight font-serif italic" style={{ fontFamily: '"Caveat", "Brush Script MT", cursive' }}>
            Trade<br/>
            Invest<br/>
            <span className="text-[#c79c27]">Grow</span>
          </h3>
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between max-w-[480px]">
          
          <div className="flex flex-col items-start">
            {/* Main Text Content */}
            <p className="text-[10px] font-bold text-[#c79c27] tracking-[0.2em] uppercase mb-4">
              Crypto Trading • Global Markets • Real Opportunities
            </p>
            <h1 className="text-[36px] sm:text-[44px] font-black leading-tight mb-4 tracking-tight">
              Invest Today<br />
              <span className="text-[#c79c27]">Build Tomorrow</span>
            </h1>
            <p className="text-[13px] sm:text-[14px] text-gray-300 mb-8 leading-relaxed max-w-[400px]">
              A smarter way to trade, invest, and grow in the world of cryptocurrency. Join a global community that turns connections into opportunities.
            </p>

            {/* Feature Boxes */}
            <div className="flex flex-col gap-3 w-full max-w-[340px]">
              <div className="flex items-center gap-4 bg-[#14151a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-3 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#c79c27]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#ebd688]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white mb-0.5">Bank-Grade Security</span>
                  <span className="text-[12px] text-gray-400 font-medium">256-bit SSL Encryption</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#14151a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-3 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#c79c27]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#ebd688]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white mb-0.5">Smart Trading Tools</span>
                  <span className="text-[12px] text-gray-400 font-medium">Real-Time Market Insights</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#14151a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-3 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#c79c27]/20 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#ebd688]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white mb-0.5">Global Community</span>
                  <span className="text-[12px] text-gray-400 font-medium"><AnimatedNumber end={180} suffix="+" /> Countries</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#14151a]/80 backdrop-blur-md border border-white/5 rounded-2xl p-3 transition-transform hover:translate-x-2 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#c79c27]/20 flex items-center justify-center shrink-0">
                  <HeadphonesIcon className="w-5 h-5 text-[#ebd688]" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-white mb-0.5">24/7 Support</span>
                  <span className="text-[12px] text-gray-400 font-medium">Dedicated Team</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 mb-2 text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Trade</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Invest</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Connect</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Grow</span>
          </div>

        </div>
      </div>

      {/* Right Side (Light bg with floating white card) */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center relative min-h-screen px-4 sm:px-6 py-20 z-10 bg-[#fdfaf5]">
        
        {/* Subtle decorative gold curves in background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#ebd688]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#c79c27]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

        {/* Signup Form Card */}
        <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 relative z-20">
          
          {/* Form Header */}
          <div className="flex flex-col items-center mb-8 text-center">
            <img src={logoImg} alt="ChainXGrowth" className="h-16 sm:h-20 object-contain mb-3" />
            <h2 className="text-[24px] sm:text-[28px] font-black text-gray-900 mb-1.5 tracking-tight">Create Account</h2>
            <p className="text-[13px] font-medium text-gray-500">Sign up to access your dashboard</p>
          </div>

          {/* Form Fields */}
          <form className="flex flex-col gap-4">
            
            {/* Grid 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
              </div>
            </div>

            {/* Grid 2: Country & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
                <select 
                  className="w-full pl-11 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all text-gray-900 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="in">India</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Phone className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                  type="tel" 
                  placeholder="WhatsApp Number"
                  className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
              </div>
            </div>

            {/* Grid 3: Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  className="w-full pl-11 pr-11 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm Password"
                  className="w-full pl-11 pr-11 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Referral ID */}
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Gift className="w-4 h-4 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Referral ID (Optional)"
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#ebd688] focus:ring-1 focus:ring-[#ebd688]/20 transition-all placeholder-gray-400 text-gray-900"
              />
            </div>

            <div className="flex items-center my-1">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[4px] checked:bg-[#c79c27] checked:border-[#c79c27] transition-all cursor-pointer" />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-[13px] font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                  I agree with <a href="#" className="text-[#c79c27] font-bold hover:underline">Terms and Conditions</a>
                </span>
              </label>
            </div>

            <button type="button" className="w-full bg-gradient-to-r from-[#594210] to-[#261d06] hover:from-[#4a360c] hover:to-[#171203] text-white font-bold py-3 rounded-xl transition-all shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 group mt-2">
              Sign Up <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-gray-100"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">OR</span>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#f35325" d="M1 1h10.5v10.5H1z"/><path fill="#81bc06" d="M12.5 1H23v10.5H12.5z"/><path fill="#05a6f0" d="M1 12.5h10.5V23H1z"/><path fill="#ffba08" d="M12.5 12.5H23V23H12.5z"/></svg>
              Microsoft
            </button>
          </div>

          <p className="text-center text-[13px] font-medium text-gray-500">
            Already have an account? <Link to="/login" className="text-[#c79c27] font-bold hover:underline">Log In</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignupPage;
