import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const COIN_CONFIG = [
  { id: 'bitcoin', symbol: 'BTC', iconBg: 'bg-[#ff9900]', icon: '₿', iconText: 'text-white' },
  { id: 'ethereum', symbol: 'ETH', iconBg: 'bg-[#627eea]', icon: '⧫', iconText: 'text-white' },
  { id: 'solana', symbol: 'SOL', iconBg: 'bg-[#14f195]', icon: 'S', iconText: 'text-black' },
  { id: 'binancecoin', symbol: 'BNB', iconBg: 'bg-[#f3ba2f]', icon: '❖', iconText: 'text-white' },
  { id: 'ripple', symbol: 'XRP', iconBg: 'bg-[#23292f]', icon: '✕', iconText: 'text-white' },
  { id: 'cardano', symbol: 'ADA', iconBg: 'bg-[#0033ad]', icon: 'A', iconText: 'text-white' },
];

const CryptoTicker = () => {
  const [tickerData, setTickerData] = useState(
    COIN_CONFIG.map(c => ({...c, price: '---', change: '---', isPositive: true}))
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = COIN_CONFIG.map(c => c.id).join(',');
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        const formattedData = COIN_CONFIG.map(coin => {
          const coinData = data[coin.id] || { usd: 0, usd_24h_change: 0 };
          return {
            ...coin,
            price: `₹${coinData.usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            change: `${coinData.usd_24h_change >= 0 ? '+' : ''}${coinData.usd_24h_change.toFixed(2)}%`,
            isPositive: coinData.usd_24h_change >= 0
          };
        });
        
        setTickerData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
        // Fallback data if API fails
        setTickerData(COIN_CONFIG.map(c => ({...c, price: '---', change: '---', isPositive: true})));
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Duplicate the data multiple times for a seamless infinite loop on wide screens
  const displayData = [...tickerData, ...tickerData, ...tickerData, ...tickerData];

  return (
    <section className="px-0 w-full mb-10">
      <div className="bg-white border-y border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] py-4 w-full -mt-10 relative z-20 overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap w-max items-center pr-12 md:pr-16"
          animate={{ x: [0, "-25%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {displayData.map((coin, index) => (
            <div key={`${coin.id}-${index}`} className="flex items-center gap-3 shrink-0 group cursor-pointer pl-12 md:pl-16">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${coin.iconBg} ${coin.iconText}`}>
                {coin.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-black text-gray-800">{coin.symbol}</span>
                  <span className="text-[9px] font-bold text-gray-400">/ USD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-black text-gray-900">{coin.price}</span>
                  <span className={`text-[10px] font-bold ${coin.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>{coin.change}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoTicker;
