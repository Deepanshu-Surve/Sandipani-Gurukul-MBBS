import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  ArrowUpRight, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { universities } from '../data/universities';

export default function UniversitiesPage() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  useEffect(() => {
    if (location.state && (location.state as any).country) {
      setSelectedCountry((location.state as any).country);
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  const filteredUnis = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(search.toLowerCase()) || 
                          uni.location.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const countries = ['All', ...Array.from(new Set(universities.map(u => u.country)))];

  return (
    <div className="pt-32 pb-20 bg-surface min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-[0.2em] uppercase"
        >
          World-Class Institutions
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold font-headline text-on-surface tracking-tighter mb-6"
        >
          Partner <span className="text-primary italic">Universities</span>
        </motion.h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
          We collaborate with top-ranked, NMC-approved medical universities across the globe to ensure you receive the finest clinical education.
        </p>
      </header>

      {/* Global Search & Filter */}
      <section className="max-w-5xl mx-auto px-6 mb-20 space-y-6">
        <div className="glass-card p-4 rounded-[2.5rem] flex flex-col md:flex-row gap-4 items-center shadow-2xl shadow-primary/5 border border-white/20">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-outline-variant w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by university name or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-surface-container-low rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {countries.map(country => (
              <button 
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold text-xs transition-all ${
                  selectedCountry === country 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-on-surface-variant hover:border-primary/40 border border-transparent'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* University Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-10">
          <Filter className="text-primary w-5 h-5" />
          <h2 className="text-xl font-bold text-on-surface font-headline">Showing {filteredUnis.length} Partners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredUnis.map((uni, idx) => (
              <motion.div
                key={uni.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-white/40 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={uni.image} 
                    alt={uni.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1 space-y-4">
                    <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
                       <MapPin className="w-4 h-4" /> {uni.location}, {uni.country}
                    </p>
                    <h3 className="text-xl font-bold font-headline text-on-surface leading-tight">
                      {uni.name}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-on-surface-variant opacity-60 uppercase">Established</p>
                        <p className="text-sm font-bold text-on-surface">{uni.established}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-on-surface-variant opacity-60 uppercase">Ranking</p>
                        <p className="text-sm font-bold text-on-surface truncate">{uni.ranking ? 'Top Tier' : 'Accredited'}</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/university/${uni.id}`}
                    className="mt-10 w-full py-4 rounded-2xl bg-surface-container-highest text-primary font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all group/btn shadow-sm"
                  >
                    View Details
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Global Recognition CTA */}
      <section className="mt-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-primary text-white rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6 tracking-tight">
                Global Recognition & <br /> Accreditation
              </h2>
              <p className="text-primary-fixed text-lg font-light leading-relaxed opacity-90">
                All our partner universities are recognized by ECFMG, WDOMS, and FAIMER, ensuring your degree is valid in India, USA, UK, and beyond.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <BookOpen className="w-12 h-12 mb-4" />
                <span className="font-bold uppercase text-[10px] tracking-widest text-primary-fixed">100% English Medium</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 mb-4" />
                <span className="font-bold uppercase text-[10px] tracking-widest text-primary-fixed">NMC/MCI Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-headline font-black text-on-surface mb-8">Can't find your target university?</h2>
        <Link 
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-headline font-black text-lg shadow-xl hover:scale-105 transition-transform"
        >
          Request Exclusive Prospectus
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
