import { motion } from 'motion/react';
import { CheckCircle2, Calendar, BookOpen, Fingerprint } from 'lucide-react';

const criteria = [
  {
    title: 'Academic Requirements',
    desc: 'Minimum 50% marks in Physics, Chemistry, and Biology (PCB) in class 12th for General category (40% for Reserved).',
    icon: BookOpen,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'NEET Qualification',
    desc: 'The student must have qualified for the NEET-UG exam in the current or previous two years.',
    icon: CheckCircle2,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    title: 'Age Limit',
    desc: 'The applicant must be at least 17 years old by December 31st of the year of admission.',
    icon: Calendar,
    color: 'text-primary-container',
    bg: 'bg-primary-container/10',
  },
  {
    title: 'Identity Verification',
    desc: 'A valid Indian Passport is mandatory for processing the admission and student visa.',
    icon: Fingerprint,
    color: 'text-sky-600',
    bg: 'bg-sky-600/10',
  },
];

export default function EligibilityCriteria() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-bold tracking-[0.3em] text-xs uppercase"
              >
                Entrance Requirements
              </motion.span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.1]">
                Eligibility Criteria for <span className="text-primary italic">MBBS Programs</span> Abroad
              </h2>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                Before you embark on your medical journey, ensure you meet the basic global standards required for admission.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {criteria.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-white border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline font-bold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-3xl" />
            <div className="relative glass-card p-4 rounded-[4rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                alt="Professional female surgeon"
                className="rounded-[3.5rem] w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-headline font-bold">Verified Process</span>
                </div>
                <p className="text-sm text-white/80 font-light">
                  Our team assists with all document verification and passport processing steps.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
