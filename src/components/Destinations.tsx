import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const allDestinations = [
  {
    name: 'Russia',
    fees: '₹1.5 Lacs*',
    desc: 'Top-tier medical universities with global recognition.',
    img: '/images/Russia.avif',
  },
  {
    name: 'China',
    fees: '₹3.3 Lacs*',
    desc: 'Southern medical leadership and advanced technology.',
    img: '/images/china.jpg',
  },
  {
    name: 'Georgia',
    fees: '₹4.0 Lacs*',
    desc: 'Elite European medical education with high-tech clinical bases.',
    img: '/images/Georgia.jpg',
  },
  {
    name: 'Kyrgyzstan',
    fees: '₹3.5 Lacs*',
    desc: 'English medium Excellence with modern labs.',
    img: '/images/Kyrgyzstan.jpg',
  },
  {
    name: 'Uzbekistan',
    fees: '₹3.0 Lacs*',
    desc: 'Highest FMGE passing ratio and cultural heritage.',
    img: '/images/Uzbekistan.jpg',
  },
  {
    name: 'Kazakhstan',
    fees: '₹4.7 Lacs*',
    desc: 'High standard of living and modern laboratory facilities.',
    img: '/images/Kazakhstan.jpg',
  },
];

export default function Destinations() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleApply = (countryName: string) => {
    navigate('/universities', { state: { country: countryName } });
    window.scrollTo(0, 0);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      setActiveIndex((prev) => {
        const next = (prev + 1) % allDestinations.length;
        const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 0;
        
        if (next === 0) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-surface">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight"
            >
              Top Global Destinations
            </motion.h2>
            <p className="text-lg text-on-surface-variant max-w-xl font-light">
              Explore premium medical institutions across the globe with affordable tuition and high clinical exposure.
            </p>
          </div>
          <Link 
            to="/destinations"
            className="text-primary font-bold flex items-center gap-2 group hover:translate-x-2 transition-transform"
          >
            View All Countries <MoveRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Sliding Cards Container */}
      <div className="relative group max-w-7xl mx-auto">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-0 scrollbar-hide snap-x snap-mandatory"
        >
          {allDestinations.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex-shrink-0 w-[calc(100%-48px)] md:w-[calc((100%-48px)/3)] snap-start group/card relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-surface-container transition-all hover:shadow-2xl hover:shadow-primary/10"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                src={country.img}
                alt={country.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-6 right-6">
                 <span className="px-4 py-2 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                   From {country.fees}
                 </span>
              </div>

              <div className="absolute bottom-0 p-8 w-full border-t border-white/10">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-white">{country.name}</h3>
                    <p className="text-white/60 text-xs font-light max-w-[180px] line-clamp-2">{country.desc}</p>
                  </div>
                  <motion.button
                    onClick={() => handleApply(country.name)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all cursor-pointer shadow-lg"
                  >
                    <MoveRight className="w-6 h-6 rotate-[-45deg]" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
