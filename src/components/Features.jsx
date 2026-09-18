import React from 'react';
import { Coins, Percent, BarChart3, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Features = () => {
  return (
    <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full py-20 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/3"
      >
        <h2 className="text-[32px] sm:text-[40px] font-black text-[#1a1a1a] leading-[1.15] tracking-tight">
          Everything You Need<br />
          in One <span className="text-[#c79c27]">Crypto</span> Platform
        </h2>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        
        {/* Card 1 */}
        <motion.div variants={cardVariants} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(199,156,39,0.1)] transition-all flex flex-col justify-between min-h-[180px]">
          <div className="text-[#c79c27] mb-4">
            <Coins className="w-9 h-9" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-[13px] mb-1.5">Trade 350+ Coins</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">Access a wide range of digital assets.</p>
          </div>
        </motion.div>
        
        {/* Card 2 */}
        <motion.div variants={cardVariants} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(199,156,39,0.1)] transition-all flex flex-col justify-between min-h-[180px]">
          <div className="text-[#c79c27] mb-4">
            <Percent className="w-9 h-9" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-[13px] mb-1.5">Low Fees</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">Competitive fees and transparent pricing.</p>
          </div>
        </motion.div>
        
        {/* Card 3 */}
        <motion.div variants={cardVariants} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(199,156,39,0.1)] transition-all flex flex-col justify-between min-h-[180px]">
          <div className="text-[#c79c27] mb-4">
            <BarChart3 className="w-9 h-9" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-[13px] mb-1.5">Advanced Tools</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">Professional charts and trading tools.</p>
          </div>
        </motion.div>
        
        {/* Card 4 */}
        <motion.div variants={cardVariants} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(199,156,39,0.1)] transition-all flex flex-col justify-between min-h-[180px]">
          <div className="text-[#c79c27] mb-4">
            <Wallet className="w-9 h-9" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-[13px] mb-1.5">Earn Passive Income</h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">Stake your crypto and earn rewards.</p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Features;
