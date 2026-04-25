import { motion } from 'motion/react';
import { Download, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 md:p-20 rounded-[4rem] border border-white/60 shadow-inner relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface mb-6 leading-tight tracking-tight">
          Ready to start your white coat journey?
        </h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Book your free career counseling session with our expert medical consultants today and secure your seat.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-primary text-white px-10 py-5 rounded-full font-headline font-bold text-xl hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center gap-2 w-full sm:w-auto"
            >
              <PhoneCall className="w-6 h-6" />
              Schedule My Call
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
