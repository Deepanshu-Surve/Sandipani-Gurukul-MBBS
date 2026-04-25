import { motion } from 'motion/react';
import { IndianRupee, HelpingHand, ShieldCheck, Plane } from 'lucide-react';

const advantages = [
  {
    title: 'No Donation',
    desc: 'Pay only the official university fees. We maintain 100% financial transparency at every step.',
    icon: ShieldCheck,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'Low Tuition Fees',
    desc: 'Access world-class medical education at a fraction of the cost of Indian private colleges.',
    icon: IndianRupee,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    title: '100% Guidance',
    desc: 'From university selection to FMGE preparation, our expert mentors are with you 24/7.',
    icon: HelpingHand,
    color: 'text-primary-container',
    bg: 'bg-primary-container/10',
  },
  {
    title: 'Visa Support',
    desc: 'End-to-end documentation, visa processing, and briefings for a hassle-free transition.',
    icon: Plane,
    color: 'text-sky-600',
    bg: 'bg-sky-600/10',
  },
];

export default function Advantages() {
  return (
    <section className="bg-surface-container-low py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl font-bold text-on-surface"
          >
            The Sandipani Advantage
          </motion.h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light">
            Transparent guidance for your medical future. We don't just send you abroad; we build your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${adv.bg} flex items-center justify-center ${adv.color} transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                <adv.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface tracking-tight">{adv.title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-light">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
