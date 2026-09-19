import React, { useEffect, useRef } from 'react';
import { Users, Database, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, prefix = "", suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return (
    <span ref={ref} className="text-[20px] font-black text-gray-900 leading-none mb-1">
      {prefix}0{decimals ? '.0' : ''}{suffix}
    </span>
  );
};

const StatsBanner = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 sm:px-8 max-w-7xl mx-auto w-full my-16 relative z-30"
    >
      <div className="bg-white border border-gray-100 rounded-2xl py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        
        {/* Stat 1 */}
        <div className="flex items-center gap-3 w-full md:w-1/4 justify-center md:justify-start">
          <Users className="w-8 h-8 text-[#c79c27]" strokeWidth={1.5} />
          <div className="flex flex-col">
            <AnimatedCounter value={5} suffix="M+" />
            <span className="text-[10px] font-medium text-gray-500 leading-none">Registered Users</span>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-3 w-full md:w-1/4 justify-center md:justify-center">
          <Database className="w-8 h-8 text-[#c79c27]" strokeWidth={1.5} />
          <div className="flex flex-col">
            <AnimatedCounter value={350} suffix="+" />
            <span className="text-[10px] font-medium text-gray-500 leading-none">Cryptocurrencies</span>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center gap-3 w-full md:w-1/4 justify-center md:justify-center">
          <TrendingUp className="w-8 h-8 text-[#c79c27]" strokeWidth={1.5} />
          <div className="flex flex-col">
            <AnimatedCounter value={12} prefix="₹" suffix="B+" />
            <span className="text-[10px] font-medium text-gray-500 leading-none">24h Trading Volume</span>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center gap-3 w-full md:w-1/4 justify-center md:justify-end">
          <ShieldCheck className="w-8 h-8 text-[#c79c27]" strokeWidth={1.5} />
          <div className="flex flex-col">
            <AnimatedCounter value={99.9} suffix="%" decimals={1} />
            <span className="text-[10px] font-medium text-gray-500 leading-none">Uptime & Reliability</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default StatsBanner;
