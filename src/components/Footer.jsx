import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube, Apple, Play } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#fcfcfc] border-t border-gray-200 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">
        
        {/* Brand & Socials */}
        <div className="lg:col-span-4">
          <div className="flex items-center mb-6">
            <img src={logoImg} alt="ChainXGrowth" className="h-16 sm:h-20 md:h-24 w-auto object-contain cursor-pointer" />
          </div>
          <p className="text-gray-500 text-[12.5px] leading-relaxed mb-8 max-w-[280px] font-medium">
            ChainXGrowth is a secure and innovative crypto platform for trading, investing, and building your financial future.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#c79c27] hover:text-[#c79c27] transition-all bg-white shadow-sm">
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#c79c27] hover:text-[#c79c27] transition-all bg-white shadow-sm">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#c79c27] hover:text-[#c79c27] transition-all bg-white shadow-sm">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#c79c27] hover:text-[#c79c27] transition-all bg-white shadow-sm">
              <Youtube className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-2">
          <h4 className="text-gray-900 font-bold text-[13px] mb-5">Products</h4>
          <ul className="flex flex-col gap-3.5 text-[12.5px] font-medium text-gray-500">
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Spot Trading</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Margin Trading</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Futures Trading</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Earn</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Launchpad</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-gray-900 font-bold text-[13px] mb-5">Resources</h4>
          <ul className="flex flex-col gap-3.5 text-[12.5px] font-medium text-gray-500">
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Fees</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">API</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Market Updates</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-gray-900 font-bold text-[13px] mb-5">Company</h4>
          <ul className="flex flex-col gap-3.5 text-[12.5px] font-medium text-gray-500">
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Partners</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-gray-900 font-bold text-[13px] mb-5">Legal</h4>
          <ul className="flex flex-col gap-3.5 text-[12.5px] font-medium text-gray-500">
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">Risk Disclosure</a></li>
            <li><a href="#" className="hover:text-[#c79c27] transition-colors">AML Policy</a></li>
          </ul>
        </div>
      </div>

      {/* App Download Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16 flex flex-col md:flex-row justify-end lg:mt-[-220px] pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-3 bg-[#fcfcfc] pl-8 lg:border-l border-gray-100">
          <h4 className="text-gray-900 font-bold text-[13px] mb-2">Download App</h4>
          <button className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#c79c27] transition-colors rounded-xl px-4 py-2 w-[160px] shadow-sm">
            <Apple className="w-6 h-6 text-gray-900 fill-current" />
            <div className="flex flex-col items-start">
              <span className="text-[9px] text-gray-500 font-bold leading-none mb-0.5">Download on the</span>
              <span className="text-[14px] font-black text-gray-900 leading-none tracking-tight">App Store</span>
            </div>
          </button>
          <button className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#c79c27] transition-colors rounded-xl px-4 py-2 w-[160px] shadow-sm">
            <Play className="w-5 h-5 text-gray-900 fill-current ml-0.5" />
            <div className="flex flex-col items-start ml-0.5">
              <span className="text-[9px] text-gray-500 font-bold leading-none mb-0.5">GET IT ON</span>
              <span className="text-[14px] font-black text-gray-900 leading-none tracking-tight">Google Play</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 mt-16 lg:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[12px] font-medium">© 2024 ChainXGrowth. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[12px] text-gray-500 font-bold">
            <a href="#" className="hover:text-[#c79c27] transition-colors">Security</a>
            <span className="text-gray-300 font-normal">|</span>
            <a href="#" className="hover:text-[#c79c27] transition-colors">Status</a>
            <span className="text-gray-300 font-normal">|</span>
            <a href="#" className="hover:text-[#c79c27] transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
