import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import walletImage from '../assets/chainx_market_wallet.jpg';

const MarketOverview = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('gainers');

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        const formattedData = data.map((coin, index) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          change: coin.price_change_percentage_24h || 0,
          volume: coin.total_volume,
          iconBg: 'bg-gray-800' // generic fallback
        }));
        
        setMarketData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch market data:", error);
        setLoading(false);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 60000);
    return () => clearInterval(interval);
  }, []);

  const displayData = useMemo(() => {
    let sorted = [...marketData];
    if (activeTab === 'gainers') {
      sorted.sort((a, b) => b.change - a.change);
    } else if (activeTab === 'losers') {
      sorted.sort((a, b) => a.change - b.change);
    } else if (activeTab === 'active') {
      sorted.sort((a, b) => b.volume - a.volume);
    }
    return sorted.slice(0, 5); // top 5
  }, [marketData, activeTab]);

  return (
    <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full py-10 grid grid-cols-1 xl:grid-cols-2 gap-6 overflow-hidden">
      
      {/* Market Overview Table (White Box) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[22px] font-black text-gray-900 tracking-tight">Market Overview</h2>
          <a href="#" className="text-[#c79c27] text-[13px] font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
            View All Markets <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
          </a>
        </div>
        
        {/* Pills */}
        <div className="flex gap-2.5 mb-8 border-b border-gray-100 pb-5">
          <button 
            onClick={() => setActiveTab('gainers')}
            className={`${activeTab === 'gainers' ? 'bg-[#e3c153] text-gray-900 shadow-sm' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'} font-bold px-5 py-2.5 rounded-full text-[13px] transition-colors`}
          >
            Top Gainers
          </button>
          <button 
            onClick={() => setActiveTab('losers')}
            className={`${activeTab === 'losers' ? 'bg-[#e3c153] text-gray-900 shadow-sm' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'} font-bold px-5 py-2.5 rounded-full text-[13px] transition-colors`}
          >
            Top Losers
          </button>
          <button 
            onClick={() => setActiveTab('active')}
            className={`${activeTab === 'active' ? 'bg-[#e3c153] text-gray-900 shadow-sm' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'} font-bold px-5 py-2.5 rounded-full text-[13px] transition-colors`}
          >
            Most Active
          </button>
        </div>
        
        {/* Table Headers */}
        <div className="flex items-center text-[11px] font-bold text-gray-400 mb-4 px-2">
          <div className="w-8">#</div>
          <div className="flex-1">Coin</div>
          <div className="w-1/4 text-right">Price</div>
          <div className="w-1/3 text-right">24h Change</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col gap-1 min-h-[250px]">
          {loading ? (
             <div className="flex items-center justify-center h-full text-[13px] font-bold text-gray-400 animate-pulse">
               Loading market data...
             </div>
          ) : (
            displayData.map((coin, index) => (
              <div key={coin.id} className="flex items-center p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
                <div className="w-8 text-[13px] font-bold text-gray-400 group-hover:text-gray-900 transition-colors">{index + 1}</div>
                
                <div className="flex-1 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${coin.iconBg} flex items-center justify-center text-[13px] font-bold text-white shadow-sm shrink-0`}>
                    {coin.symbol[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[14px] text-gray-900 truncate max-w-[80px] sm:max-w-none">{coin.name}</span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">{coin.symbol}</span>
                  </div>
                </div>
                
                <div className="w-1/4 text-right font-bold text-[14px] text-gray-900">
                  ₹{coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                </div>
                
                <div className="w-1/3 flex items-center justify-end gap-3">
                  {/* Micro Chart */}
                  <svg width="40" height="16" viewBox="0 0 40 16" className={`${coin.change >= 0 ? 'text-emerald-500' : 'text-red-500'} hidden sm:block opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {coin.change >= 0 ? (
                      <polyline points="0,12 8,10 16,14 24,6 32,8 40,2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    ) : (
                      <polyline points="0,4 8,6 16,2 24,10 32,8 40,14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                  </svg>
                  <span className={`font-bold text-[13px] ${coin.change >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
      
      {/* CTA Box (Dark Box) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="bg-[#111] rounded-[24px] p-10 sm:p-12 flex flex-col justify-center relative overflow-hidden group min-h-[400px] h-full shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-800"
      >
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-black text-white leading-[1.1] mb-4 tracking-tight">
            Start Your Crypto Journey Today
          </h2>
          <p className="text-gray-400 text-[14px] leading-relaxed mb-10 max-w-[280px]">
            Create your free account and unlock a world of decentralized opportunities.
          </p>
          <button className="px-6 py-3.5 bg-gradient-to-r from-[#e3c153] to-[#c79c27] hover:opacity-90 text-gray-900 text-[14px] font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(199,156,39,0.2)] w-fit">
            Create Account <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </button>
        </div>
        
        {/* Background Graphic */}
        <div className="absolute right-[-15%] sm:right-[-5%] bottom-0 w-full sm:w-[65%] h-full pointer-events-none mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out">
           <img 
              src={walletImage} 
              alt="Crypto Wallet" 
              className="w-full h-full object-cover object-right sm:object-left"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)' }}
            />
        </div>
      </motion.div>
      
    </section>
  );
};

export default MarketOverview;
