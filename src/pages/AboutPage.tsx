import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Target, 
  Award, 
  Globe, 
  HeartPulse, 
  Scale, 
  Stethoscope,
  ArrowRight,
  ClipboardCheck,
  Plane,
  Ticket,
  FileText,
  Home,
  Map,
  Hospital,
  Coins
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Countries Covered', value: '5+', desc: 'From Europe to the medical giants of Asia.' },
  { label: 'Visa Success Rate', value: '98%', desc: 'Meticulous documentation for a seamless journey.' },
  { label: 'Partner Hospitals', value: '250+', desc: 'High-exposure internships for graduating doctors.' },
];

const values = [
  { label: 'NMC Aligned', icon: Scale },
  { label: 'WHO Listed', icon: Globe },
  { label: 'WFME Protocols', icon: HeartPulse },
];

export default function AboutPage() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center px-6 md:px-12 py-20 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase">
              Our Legacy
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              Shaping the <span className="text-primary italic">Global Doctors</span> of tomorrow.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10 font-light">
              Sandipani Gurukul is more than a consultancy. We are a visionary gateway, bridging the gap between ambitious students and the world's most prestigious medical institutions.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <motion.button 
                onClick={() => document.getElementById('heritage-section')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-white px-8 py-4 rounded-full font-headline font-bold flex items-center gap-2 shadow-xl shadow-primary/20 cursor-pointer"
              >
                Our Heritage
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-surface-container shadow-sm">
                      <img className="w-full h-full object-cover" src={`https://picsum.photos/seed/doc-${i}/100/100`} referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-on-surface">Trusted by 2,000+</div>
                  <div className="text-xs text-on-surface-variant">Medical aspirants worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
              <img 
                className="w-full h-full object-cover" 
                src="https://i.pinimg.com/1200x/f1/ba/75/f1ba751c86b1a826cef3b1477332bd0f.jpg" 
                alt="Medical architecture"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl max-w-xs border border-white/40 shadow-xl"
            >
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Award className="text-secondary w-5 h-5" />
                </div>
                <div>
                  <p className="text-on-surface font-bold text-sm">Direct University Partnerships</p>
                  <p className="text-on-surface-variant text-xs mt-1 font-light">100% verified accreditation pathways for global medical practice.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision: Bento Section */}
      <section className="py-24 bg-surface-container-low px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 glass-card p-12 rounded-[3.5rem] relative overflow-hidden flex flex-col justify-end min-h-[450px]"
            >
              <div className="absolute top-12 left-12">
                <Target className="text-primary w-16 h-16 opacity-20" />
              </div>
              <div className="relative z-10">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight">
                  Create Doctors with <br/><span className="text-primary italic">Global Vision.</span>
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-light">
                  Our mission transcends admission. We cultivate the next generation of healthcare leaders by providing them with access to clinical environments that foster empathy, technical brilliance, and a boundaryless perspective on human wellness.
                </p>
              </div>
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
            </motion.div>

            <div className="md:col-span-4 bg-primary p-12 rounded-[3.5rem] text-white flex flex-col justify-between shadow-2xl shadow-primary/20">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-10 tracking-tight">Clinical Credibility</h3>
                <div className="space-y-8">
                  {values.map((v) => (
                    <div key={v.label} className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <v.icon className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-sm tracking-wide">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-10">
                <p className="text-primary-fixed opacity-60 text-[10px] uppercase font-bold tracking-[0.25em]">Regulatory Compliance</p>
              </div>
            </div>

            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`md:col-span-4 p-10 rounded-[3rem] shadow-sm flex flex-col items-center text-center ${
                  i === 1 ? 'bg-secondary text-white' : i === 2 ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-white'
                }`}
              >
                <span className="text-6xl font-headline font-black mb-2">{stat.value}</span>
                <span className="font-bold uppercase text-[10px] tracking-[0.2em] opacity-80 mb-4">{stat.label}</span>
                <p className="text-sm font-light leading-relaxed opacity-90">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Narrative Section */}
      <section id="heritage-section" className="py-24 px-6 md:px-12 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <img className="w-full rounded-3xl shadow-2xl" src="https://i.pinimg.com/1200x/83/df/13/83df138a6f937064ba5e5c5d9f57d2c5.jpg" alt="Med 1" referrerPolicy="no-referrer" />
                <img className="w-full rounded-3xl shadow-2xl" src="https://i.pinimg.com/736x/82/88/13/828813f2a755647fb2521e879839c308.jpg" alt="Med 2" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-6">
                <img className="w-full rounded-3xl shadow-2xl" src="https://i.pinimg.com/736x/ef/14/f4/ef14f4ce84ebf760ac80699a423426e8.jpg" alt="Med 3" referrerPolicy="no-referrer" />
                <div className="aspect-square bg-primary-fixed text-primary rounded-3xl flex items-center justify-center p-8 shadow-inner">
                  <Stethoscope className="w-20 h-20" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-[12px] border-surface z-20">
              <span className="text-primary font-headline font-black text-3xl">SG</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Our Heritage</span>
            <h2 className="font-headline text-5xl font-extrabold text-on-surface mb-8 leading-tight tracking-tight">
              Decades of Excellence in <span className="text-secondary italic">Medical Mentorship.</span>
            </h2>
            <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg font-light">
              <p>
                Founded on the principles of integrity and educational foresight, Sandipani Gurukul was established to navigate the complexities of international medical education. We recognized that becoming a doctor requires more than just a degree; it requires the right environment, the right mentorship, and the right legal standing.
              </p>
              <p>
                Our team consists of medical educators, visa experts, and international student counselors who work in unison to ensure that every student's journey is mapped with clinical precision. We don't just find universities; we curate career paths.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-12">
              <div>
                <p className="text-4xl font-headline font-black text-on-surface">2026</p>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Foundation Year</p>
              </div>
              <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />
              <div>
                <p className="text-4xl font-headline font-black text-on-surface">5+</p>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Global Affiliates</p>
              </div>
              <div className="w-px h-12 bg-outline-variant/30 hidden md:block" />
              <div>
                <p className="text-4xl font-headline font-black text-on-surface">100%</p>
                <p className="text-[10px] uppercase font-bold text-on-surface-variant/60 tracking-widest">Legal Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section for About Page */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Our Core Expertise</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">End-to-End <span className="text-primary italic">Student Support.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Admission', desc: 'Securement of seats in world-renowned medical universities.', icon: ClipboardCheck },
              { title: 'Visa', desc: 'Expert guidance through complex international student visa protocols.', icon: Plane },
              { title: 'Flight Ticket', desc: 'Seamless air travel coordination and group departure logistics.', icon: Ticket },
              { title: 'Document', desc: 'Complete handling of verification, translation, and apostille services.', icon: FileText },
              { title: 'Hostel', desc: 'Guaranteed safe and comfortable on-campus or peer-vetted housing.', icon: Home },
              { title: 'Travel', desc: 'Airport pick-ups and local transportation support in the host country.', icon: Map },
              { title: 'Selection Guide', desc: 'In-depth analysis to find the best-fit college for your profile.', icon: GraduationCap },
              { title: 'Forex Support', desc: 'Assistance with international currency exchange and student bank accounts.', icon: Coins },
            ].map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-[2.5rem] bg-white border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-3">{s.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-7xl mx-auto rounded-[4rem] bg-gradient-to-br from-primary to-primary-container p-1 shadow-2xl shadow-primary/20"
        >
          <div className="bg-primary/30 backdrop-blur-3xl rounded-[3.8rem] py-24 px-8 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            
            <h2 className="font-headline text-5xl md:text-7xl font-extrabold mb-8 relative z-10 tracking-tight leading-none">
              Ready to start your <br className="hidden md:block"/> medical odyssey?
            </h2>
            <p className="text-primary-fixed max-w-2xl mx-auto mb-12 text-xl opacity-80 relative z-10 font-light leading-relaxed">
              Join the next cohort of visionary doctors. Schedule a personalized clinical consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-primary px-12 py-5 rounded-full font-headline font-black shadow-2xl transition-all text-lg"
                >
                  Book a Free Session
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
