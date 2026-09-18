import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CryptoTicker from '../components/CryptoTicker';
import StatsBanner from '../components/StatsBanner';
import Features from '../components/Features';
import MarketOverview from '../components/MarketOverview';
import Newsletter from '../components/Newsletter';
import heroBg from '../assets/hero_bg.jpg';

const HomePage = () => {
  return (
    <>
      {/* Top Section with Background */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Navbar />
        <Hero />
      </div>

      {/* Floating Ticker overlapping the background edge */}
      <div className="w-full z-30 relative">
        <CryptoTicker />
      </div>

      <main className="flex-1 flex flex-col pt-4">
        <StatsBanner />
        <Features />
        <MarketOverview />
        <Newsletter />
      </main>
    </>
  );
};

export default HomePage;
