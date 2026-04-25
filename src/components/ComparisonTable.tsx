import { motion } from 'motion/react';

const comparisonData = [
  {
    feature: 'Total Fees',
    india: '₹80 Lacs - ₹1.2 Crore',
    abroad: '₹15 Lacs - ₹35 Lacs',
    highlight: true,
  },
  {
    feature: 'Donation/Capitation',
    india: 'Often Required',
    abroad: 'Strictly Nil',
    highlight: true,
  },
  {
    feature: 'Entrance Exam',
    india: 'High NEET Score Needed',
    abroad: 'NEET Qualification Only',
    highlight: true,
  },
  {
    feature: 'Global Exposure',
    india: 'Limited to Local Regions',
    abroad: 'International Clinical Exposure',
    highlight: true,
  },
  {
    feature: 'Medium of Instruction',
    india: 'English / Regional',
    abroad: '100% English Medium',
    highlight: false,
  },
  {
    feature: 'Recognition',
    india: 'NMC / MCI',
    abroad: 'NMC, WHO, ECFMG, WDOMS',
    highlight: false,
  },
  {
    feature: 'Duration',
    india: '5.5 Years',
    abroad: '5 - 6 Years',
    highlight: false,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-bold tracking-[0.3em] text-xs uppercase"
        >
          Decision Matrix
        </motion.span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight">MBBS in India <span className="text-outline-variant font-light italic text-3xl">vs</span> Abroad</h2>
        <p className="text-on-surface-variant font-light max-w-xl mx-auto">Analyze the strategic differences to secure your global medical career path.</p>
      </div>

      <div className="overflow-x-auto pb-8 scrollbar-hide">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-12 px-12 mb-6 text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-60">
            <div className="col-span-4">Features</div>
            <div className="col-span-4">MBBS IN INDIA (PRIVATE)</div>
            <div className="col-span-4 text-primary">MBBS ABROAD (SANDIPANI)</div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-12 items-center px-12 py-8 rounded-[2rem] border transition-all duration-300 ${
                  index % 2 === 0 
                  ? 'glass-card border-white shadow-xl shadow-primary/5' 
                  : 'bg-surface-container-low border-transparent'
                }`}
              >
                <div className="col-span-4 font-headline font-bold text-on-surface pr-8">
                  {row.feature}
                </div>
                <div className="col-span-4 text-on-surface-variant/70 italic font-light text-sm pr-8">
                  {row.india}
                </div>
                <div className={`col-span-4 font-bold text-lg ${row.highlight ? 'text-secondary' : 'text-primary'}`}>
                  {row.abroad}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
