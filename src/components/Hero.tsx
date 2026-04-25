import { motion } from 'motion/react';
import { ArrowRight, Verified, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 overflow-hidden bg-surface">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-10 pointer-events-none"
          src="https://images.unsplash.com/photo-1710582308582-55cc0c461c4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVtYmFpJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Medical university campus"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 hero-gradient opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs md:text-sm font-semibold shadow-sm">
            <Verified className="w-4 h-4 text-primary" />
            NMC & WHO Approved Universities Only
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter">
            Start Your <span className="text-primary bg-clip-text">MBBS Journey</span> Abroad
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-light">
            Navigate the path to your medical career with the most trusted educational consultancy for global MBBS admissions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-headline font-bold text-lg hover:opacity-95 shadow-xl shadow-primary/25 transition-all flex items-center gap-2 w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/destinations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="glass-card text-primary px-8 py-4 rounded-full font-headline font-bold text-lg transition-all w-full sm:w-auto"
              >
                Explore Countries
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative block"
        >
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container rounded-full blur-[100px] opacity-20 animate-pulse" />
          
          <div className="glass-card p-4 rounded-[3rem] relative z-10 overflow-hidden group">
            <img
              className="rounded-[2.5rem] w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://i.pinimg.com/736x/22/ad/36/22ad36e484cb52f8ff1f77df8ef0e254.jpg"
              alt="Medical student"
              referrerPolicy="no-referrer"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-highest" />
                  ))}
                </div>
                <div className="text-xs font-bold text-on-surface flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-secondary" />
                  500+ Students Placed
                </div>
              </div>
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed italic">
                "My journey to Russia was seamless with Sandipani Gurukul's expert guidance at every step."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
