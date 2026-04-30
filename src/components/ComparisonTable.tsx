import React from 'react';
import { motion } from 'framer-motion';

const comparisonData = [
  {
    feature: 'Total Fees',
    india: '₹80 Lacs - ₹1.2 Cr',
    abroad: '₹15 Lacs - ₹35 Lacs',
    highlight: true
  },
  {
    feature: 'Donation/Capitation',
    india: 'Often High (Hidden)',
    abroad: 'Zero Donation',
    highlight: false
  },
  {
    feature: 'Admission Process',
    india: 'High NEET Score Required',
    abroad: 'NEET Qualified Only',
    highlight: false
  },
  {
    feature: 'Infrastructure',
    india: 'Varies by Institute',
    abroad: 'World-Class Standards',
    highlight: true
  },
  {
    feature: 'Duration',
    india: '5.5 Years',
    abroad: '6 Years',
    highlight: false
  },
  {
    feature: 'International Exposure',
    india: 'Limited',
    abroad: 'Global Clinical Reach',
    highlight: true
  }
];

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6"
        >
          MBBS in India <span className="text-primary italic opacity-20 text-3xl md:text-4xl">vs</span> Abroad
        </motion.h2>
        <p className="text-on-surface-variant font-light max-w-xl mx-auto">Analyze the strategic differences to secure your global medical career path.</p>
      </div>

      <div className="scrollbar-hide">
        <div className="w-full">
          {/* Header - Hidden on mobile */}
          <div className="hidden md:grid grid-cols-12 px-12 mb-6 text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-60">
            <div className="col-span-4">Features</div>
            <div className="col-span-4">MBBS IN INDIA (PRIVATE)</div>
            <div className="col-span-4 text-primary">MBBS ABROAD (SANDIPANI)</div>
          </div>

          {/* Rows */}
          <div className="space-y-4 md:space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`flex flex-col md:grid md:grid-cols-12 items-start md:items-center px-6 md:px-12 py-6 md:py-8 rounded-[2rem] border transition-all duration-300 ${
                  index % 2 === 0 
                  ? 'glass-card border-white shadow-xl shadow-primary/5' 
                  : 'bg-surface-container-low border-transparent'
                } hover:border-primary/20 hover:scale-[1.01]`}
              >
                <div className="md:col-span-4 font-headline font-bold text-on-surface md:pr-8 mb-4 md:mb-0 text-lg md:text-base">
                  {row.feature}
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full md:contents">
                  <div className="md:col-span-4 text-on-surface-variant/70 italic font-light text-sm md:pr-8">
                    <span className="md:hidden block text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/50 not-italic mb-1">In India</span>
                    {row.india}
                  </div>
                  <div className={`md:col-span-4 font-bold text-base md:text-lg ${row.highlight ? 'text-secondary' : 'text-primary'}`}>
                    <span className="md:hidden block text-[10px] uppercase font-bold tracking-widest text-primary/50 mb-1">Abroad</span>
                    {row.abroad}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}