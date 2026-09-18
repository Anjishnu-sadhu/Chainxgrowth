import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home, Trophy, HeartPulse, GraduationCap, Clapperboard, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const isResourceActive = ['/real-estates', '/sports', '/health', '/education', '/entertainment'].includes(location.pathname);

  const NavItem = ({ to, label }) => {
    const active = location.pathname === to;
    return (
      <Link to={to} className="relative py-1 cursor-pointer group flex flex-col items-center">
        <span className={`transition-colors duration-300 ${active ? 'text-[#d4af37]' : 'text-gray-700 group-hover:text-[#d4af37]'}`}>{label}</span>
        <div className={`absolute -bottom-1 h-[2px] bg-[#d4af37] rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
      </Link>
    );
  };

  const NavButton = ({ label, onClick, isOpen, isActive }) => (
    <button 
      onClick={onClick}
      className="relative py-1 cursor-pointer group flex flex-col items-center"
    >
      <div className="flex items-center gap-1">
        <span className={`transition-colors duration-300 ${isActive ? 'text-[#d4af37]' : 'text-gray-700 group-hover:text-[#d4af37]'}`}>{label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-300 ${isActive ? 'text-[#d4af37]' : 'text-gray-400 group-hover:text-[#d4af37]'} transition-transform ${isOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
      </div>
      <div className={`absolute -bottom-1 h-[2px] bg-[#d4af37] rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
    </button>
  );

  const DropdownItem = ({ to, icon: Icon, label }) => {
    const active = location.pathname === to;
    return (
      <Link to={to} onClick={() => setIsResourcesOpen(false)} className={`group flex items-center justify-between px-3 py-3 rounded-xl transition-colors ${active ? 'bg-[#fdf9ea]' : 'hover:bg-[#fdf9ea]'}`}>
        <div className="flex items-center gap-4">
          <Icon className="w-[18px] h-[18px] text-[#c79c27]" strokeWidth={2} />
          <div className="relative flex flex-col items-start">
            <span className={`text-[14px] font-bold transition-colors duration-300 ${active ? 'text-[#d4af37]' : 'text-gray-800 group-hover:text-[#d4af37]'}`}>{label}</span>
            <div className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#d4af37] rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
          </div>
        </div>
        <ChevronRight className={`w-[14px] h-[14px] transition-colors ${active ? 'text-[#c79c27]' : 'text-gray-400 group-hover:text-[#c79c27]'}`} />
      </Link>
    );
  };

  return (
    <nav className="flex items-center justify-between py-5 px-4 sm:px-8 max-w-7xl mx-auto w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logoImg} alt="ChainXGrowth" className="h-14 sm:h-16 md:h-20 w-auto object-contain cursor-pointer" />
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-gray-700">
        <NavItem to="/" label="Home" />
        <NavItem to="/markets" label="Markets" />
        <NavItem to="/trade" label="Trade" />
        <NavItem to="/earn" label="Earn" />
        <div className="relative">
          <NavButton 
            label="Resources" 
            onClick={() => setIsResourcesOpen(!isResourcesOpen)} 
            isOpen={isResourcesOpen} 
            isActive={isResourceActive} 
          />
          
          {isResourcesOpen && (
            <div className="absolute top-full mt-4 w-[240px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-2 flex flex-col z-50">
              <DropdownItem to="/real-estates" icon={Home} label="Real Estates" />
              <DropdownItem to="/sports" icon={Trophy} label="Sports" />
              <DropdownItem to="/health" icon={HeartPulse} label="Health" />
              <DropdownItem to="/education" icon={GraduationCap} label="Education" />
              <DropdownItem to="/entertainment" icon={Clapperboard} label="Entertainment" />
            </div>
          )}
        </div>
        <NavButton label="Company" onClick={() => {}} isOpen={false} isActive={location.pathname === '/company'} />
      </div>
      
      {/* Buttons */}
      <div className="hidden sm:flex items-center gap-3">
        <Link to="/login" className="px-6 py-2 text-[13px] font-bold text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white">
          Log In
        </Link>
        <Link to="/signup" className="px-6 py-2 text-[13px] font-bold text-gray-900 bg-gradient-to-r from-[#e3c153] to-[#c79c27] rounded-lg hover:opacity-90 transition-opacity shadow-sm">
          Sign Up
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 text-gray-600 hover:text-[#c79c27] transition-colors z-50 relative"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg lg:hidden z-40 flex flex-col px-6 py-6 gap-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-[14px] font-bold py-2 border-b border-gray-100 ${location.pathname === '/' ? 'text-[#c79c27]' : 'text-gray-700 hover:text-[#c79c27]'}`}>Home</Link>
          <Link to="/markets" onClick={() => setIsMobileMenuOpen(false)} className={`text-[14px] font-bold py-2 border-b border-gray-100 ${location.pathname === '/markets' ? 'text-[#c79c27]' : 'text-gray-700 hover:text-[#c79c27]'}`}>Markets</Link>
          <Link to="/trade" onClick={() => setIsMobileMenuOpen(false)} className={`text-[14px] font-bold py-2 border-b border-gray-100 ${location.pathname === '/trade' ? 'text-[#c79c27]' : 'text-gray-700 hover:text-[#c79c27]'}`}>Trade</Link>
          <Link to="/earn" onClick={() => setIsMobileMenuOpen(false)} className={`text-[14px] font-bold py-2 border-b border-gray-100 ${location.pathname === '/earn' ? 'text-[#c79c27]' : 'text-gray-700 hover:text-[#c79c27]'}`}>Earn</Link>
          
          <button 
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className={`text-[14px] font-bold py-2 flex items-center justify-between w-full text-left transition-colors ${!isResourcesOpen ? 'border-b border-gray-100' : ''} ${isResourceActive ? 'text-[#c79c27]' : 'text-gray-700 hover:text-[#c79c27]'}`}
          >
            Resources <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''} ${isResourceActive ? 'text-[#c79c27]' : 'text-gray-400'}`} />
          </button>
          {isResourcesOpen && (
            <div className="flex flex-col gap-1 pl-4 pb-4 border-b border-gray-100 mt-2">
              <Link to="/real-estates" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 py-2 text-[13px] font-bold hover:text-[#c79c27] ${location.pathname === '/real-estates' ? 'text-[#c79c27]' : 'text-gray-600'}`}>
                <Home className="w-4 h-4 text-[#c79c27]" strokeWidth={2} />
                Real Estates
              </Link>
              <Link to="/sports" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 py-2 text-[13px] font-bold hover:text-[#c79c27] ${location.pathname === '/sports' ? 'text-[#c79c27]' : 'text-gray-600'}`}>
                <Trophy className="w-4 h-4 text-[#c79c27]" strokeWidth={2} />
                Sports
              </Link>
              <Link to="/health" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 py-2 text-[13px] font-bold hover:text-[#c79c27] ${location.pathname === '/health' ? 'text-[#c79c27]' : 'text-gray-600'}`}>
                <HeartPulse className="w-4 h-4 text-[#c79c27]" strokeWidth={2} />
                Health
              </Link>
              <Link to="/education" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 py-2 text-[13px] font-bold hover:text-[#c79c27] ${location.pathname === '/education' ? 'text-[#c79c27]' : 'text-gray-600'}`}>
                <GraduationCap className="w-4 h-4 text-[#c79c27]" strokeWidth={2} />
                Education
              </Link>
              <Link to="/entertainment" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 py-2 text-[13px] font-bold hover:text-[#c79c27] ${location.pathname === '/entertainment' ? 'text-[#c79c27]' : 'text-gray-600'}`}>
                <Clapperboard className="w-4 h-4 text-[#c79c27]" strokeWidth={2} />
                Entertainment
              </Link>
            </div>
          )}
          <Link to="/company" onClick={() => setIsMobileMenuOpen(false)} className={`text-[14px] font-bold py-2 flex items-center justify-between ${location.pathname === '/company' ? 'text-[#c79c27]' : 'text-gray-700 hover:text-[#c79c27]'}`}>
            Company <ChevronDown className="w-4 h-4 text-gray-400" />
          </Link>
          <div className="flex flex-col gap-3 mt-4 sm:hidden">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-[14px] font-bold text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white text-center">
              Log In
            </Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 text-[14px] font-bold text-gray-900 bg-gradient-to-r from-[#e3c153] to-[#c79c27] rounded-lg text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
