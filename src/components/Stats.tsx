import { motion } from 'motion/react';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Global Partners', value: '50+' },
  { label: 'Happy Doctors', value: '350+' },
  { label: 'Visa Success', value: '100%' },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 md:-mt-24 relative z-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-[2.5rem] border border-white/60"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', delay: index * 0.1 }}
              className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform"
            >
              {stat.value}
            </motion.div>
            <div className="text-xs md:text-sm font-semibold text-on-surface-variant uppercase tracking-[0.2em]">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
