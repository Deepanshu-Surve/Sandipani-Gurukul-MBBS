import { motion } from 'motion/react';
import { ArrowRight, Verified, Globe, FileText, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    name: 'Russia',
    subtitle: 'Top-tier Medical Infrastructure',
    fee: '₹1.5 Lacs',
    feeSuffix: '/year',
    duration: '6 Years',
    universities: ['Novosibirsk State', 'Bashkir State', 'Kazan State'],
    img: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2049&auto=format&fit=crop',
  },
  {
    name: 'Uzbekistan',
    subtitle: 'Highest FMGE Passing Ratio',
    fee: '₹3.0 Lacs',
    feeSuffix: '/year',
    duration: '6 Years',
    universities: ['Bukhara State', 'Samarkand State', 'Tashkent State'],
    img: 'https://i.pinimg.com/736x/e5/72/cb/e572cb0a4c6cd1047ddddc7d2ef7f58d.jpg',
  },
  {
    name: 'Kazakhstan',
    subtitle: 'International Standard Learning',
    fee: '₹4.7 Lacs',
    feeSuffix: '/year',
    duration: '6 Years',
    universities: ['Kazakh National', 'Al-Farabi', 'South Kazakh'],
    img: 'https://i.pinimg.com/1200x/3d/27/71/3d2771f20e558a4a46f337c9c6a54826.jpg',
  },
  {
    name: 'China',
    subtitle: 'Southern Medical Leadership',
    fee: '₹3.3 Lacs',
    feeSuffix: '/year',
    duration: '6 Years',
    universities: ['Beihua Medical', 'Nantong Medical', 'Guangzhou Medical'],
    img: 'https://i.pinimg.com/736x/1b/17/c5/1b17c5f3669f6833ff94b1bd22cdb222.jpg',
  },
  {
    name: 'Georgia',
    subtitle: 'Elite European Medical Education',
    fee: '₹4.0 Lacs',
    feeSuffix: '/year',
    duration: '6 Years',
    universities: ['Tbilisi State', 'Batumi Shota', 'SEU National'],
    img: 'https://i.pinimg.com/1200x/4c/aa/24/4caa24adbc4ff836d08184d19f457a93.jpg',
  },
  {
    name: 'Kyrgyzstan',
    subtitle: 'English Medium Excellence',
    fee: '₹3.5 Lacs',
    feeSuffix: '/year',
    duration: '6 Years',
    universities: ['Kyrgyz State', 'ISM Bishkek', 'Osh State'],
    img: 'https://i.pinimg.com/1200x/2d/b4/45/2db4455936e843d61dfcb507a8935257.jpg',
  },
];

const accreditation = [
  { title: 'NMC Approved', desc: 'All listed universities follow NMC gazette norms.', icon: Verified },
  { title: 'WHO Listed', desc: 'Recognized by the World Directory of Medical Schools.', icon: Globe },
  { title: 'Visa Assistance', desc: 'Complete support for student visa documentation.', icon: FileText },
  { title: 'On-ground Support', desc: '24/7 assistance for students in host countries.', icon: Headphones },
];

export default function DestinationsPage() {
  const navigate = useNavigate();

  const handleApply = (countryName: string) => {
    navigate('/universities', { state: { country: countryName } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-32 pb-20 overflow-x-hidden">
      <header className="mb-16 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed rounded-full"
        >
          Global Reach
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-on-surface mb-6 tracking-tight font-headline"
        >
          Your Medical Career <br />
          <span className="text-primary">Knows No Borders</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed font-light"
        >
          Explore accredited medical universities across strategic global destinations. We guide you from application to residency.
        </motion.p>
      </header>

      <section className="mb-12 px-6">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 bg-primary text-white shadow-lg shadow-primary/20"
          >
            All Destinations
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto mb-20">
        {destinations.map((country, index) => (
          <motion.div
            key={country.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] glass-card p-4 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative h-64 overflow-hidden rounded-[2rem] mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={country.img}
                alt={country.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-white text-2xl font-bold font-headline">{country.name}</h3>
                <p className="text-white/80 text-sm font-light">{country.subtitle}</p>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Starting Fee</span>
                  <span className="text-lg font-bold text-primary font-headline">
                    {country.fee}
                    <span className="text-xs font-normal text-on-surface-variant">{country.feeSuffix}</span>
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Duration</span>
                  <span className="text-lg font-bold text-on-surface font-headline">{country.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-3 tracking-widest">Key Universities</p>
                <div className="flex flex-wrap gap-2">
                  {country.universities.map((uni) => (
                    <span key={uni} className="px-3 py-1 bg-surface-container text-on-surface-variant text-[11px] font-semibold rounded-full border border-outline-variant/5">
                      {uni}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={() => handleApply(country.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 group/btn hover:bg-primary/95 transition-colors shadow-lg shadow-primary/10"
              >
                Apply to {country.name}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="bg-surface-container-low py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {accreditation.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card rounded-[2rem] flex flex-col items-center text-center group hover:border-primary/20 transition-all shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-on-surface mb-2 font-headline">{item.title}</h4>
              <p className="text-xs text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
