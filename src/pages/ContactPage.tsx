import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Edit3,
  MessageCircle,
  Share2,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 overflow-x-hidden bg-surface">
      {/* Hero Header */}
      <header className="mb-16 text-center max-w-3xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold font-headline text-on-surface tracking-tighter mb-6 leading-tight"
        >
          Your Global Medical <span className="text-primary">Odyssey Begins Here.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-lg font-light leading-relaxed"
        >
          Connect with our senior consultants for a personalized roadmap to your international medical career.
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Consultation Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 md:p-12 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
            
            <h2 className="text-2xl font-bold font-headline mb-8 text-on-surface flex items-center gap-3">
              <div className="p-2 bg-primary-fixed rounded-lg">
                <Edit3 className="text-primary w-5 h-5" />
              </div>
              Free Consultation Request
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant font-light"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant font-light"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant font-light"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Preferred Country</label>
                  <select className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface cursor-pointer font-light">
                    <option>Select Destination</option>
                    <option>Russia</option>
                    <option>Uzbekistan</option>
                    <option>Kazakhstan</option>
                    <option>Georgia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Estimated Budget</label>
                  <select className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface cursor-pointer font-light">
                    <option>Select Range</option>
                    <option>15L - 25L</option>
                    <option>25L - 35L</option>
                    <option>35L+</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-5 rounded-[2rem] font-headline font-extrabold text-lg shadow-xl shadow-primary/20 hover:opacity-95 transition-all flex items-center justify-center gap-3 mt-8"
              >
                Submit Consultation Request
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Right: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-6">
            <div className="bg-surface-container-low p-8 rounded-[2.5rem] flex items-start gap-6 group hover:bg-white transition-all duration-300 border border-transparent hover:border-outline-variant/10 shadow-sm">
              <div className="bg-secondary-container w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-inner">
                <Mail className="text-secondary w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface">Email Support</h3>
                <p className="text-on-surface-variant text-base mt-2 font-light leading-relaxed">
                  admissions@sandipanigurukul.com<br />
                  info@sandipanigurukul.com
                </p>
              </div>
            </div>

            <div className="bg-primary-fixed/30 p-8 rounded-[2.5rem] flex items-start gap-6 group hover:bg-white transition-all duration-300 border border-transparent hover:border-primary/10 shadow-sm">
              <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-md">
                <Phone className="text-primary w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface">Direct Helpline</h3>
                <p className="text-on-surface-variant text-lg mt-2 font-bold tracking-wider">
                  +91 91743 47577<br />
                  +91 73546 36460
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[3rem] bg-surface-container-highest/30 border border-outline-variant/10 overflow-hidden relative group">
            <div className="relative z-10">
              <h4 className="font-headline font-bold text-on-surface-variant text-sm tracking-[0.2em] uppercase mb-4">Availability</h4>
              <p className="text-on-surface text-lg font-light leading-relaxed">
                Our consultants are available <span className="font-bold text-primary">Monday through Saturday</span>, from 10:00 AM to 7:00 PM IST to assist with your medical enrollment.
              </p>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>

      {/* Local WhatsApp button removed - now global in App.tsx */}
    </div>
  );
}
