import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  Plane, 
  Ticket, 
  FileText, 
  Home, 
  Map, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    title: 'Admission Support',
    description: 'Hassle-free securement of seats in world-renowned medical universities globally. We handle the entire application process, ensuring all academic standards are met.',
    icon: ClipboardCheck,
    features: ['University Selection Assistance', 'Offer Letter Processing', 'Direct Liaison with Deans'],
    img: '/images/Service1.jpg',
  },
  {
    title: 'Visa Assistance',
    description: 'Expert guidance through complex international student visa protocols with a 98% approval success rate. We ensure every document is clinical and precise.',
    icon: Plane,
    features: ['Visa Interview Coaching', 'Financial Statement Review', 'Biometric Appointments'],
    img: '/images/Service2.jpg',
  },
  {
    title: 'Flight Ticket',
    description: 'Seamless air travel coordination, including group departures with SG representatives. We negotiate competitive student airfares to reduce your travel burden.',
    icon: Ticket,
    features: ['Group Travel Coordination', 'Extra Baggage Assistance', 'Airport Pick-up Logistics'],
    img: '/images/Service3.jpg',
  },
  {
    title: 'Document Management',
    description: 'Complete handling of essential documentation, including verification, translation, and apostille services required by international law.',
    icon: FileText,
    features: ['Apostille & Notarization', 'Official Translations', 'Degree Authentication'],
    img: '/images/Service4.jpg',
  },
  {
    title: 'Hostel Facilities',
    description: 'Guaranteed safe, comfortable, and hygienic on-campus or near-campus housing pre-vetted for medical students.',
    icon: Home,
    features: ['Indian Canteen Availability', '24/7 Security Measures', 'Standard Furnished Rooms'],
    img: '/images/Service5.jpg',
  },
  {
    title: 'Travel Support',
    description: 'Comprehensive ground support upon arrival, including local registration, SIM card activation, and city orientation.',
    icon: Map,
    features: ['Airport Greeting', 'Local Registration support', 'Health Insurance Setup'],
    img: '/images/Service6.jpg',
  },
  {
    title: 'College Selection Guide',
    description: 'In-depth analysis and guidance to select the best medical college matching your academic profile and professional goals.',
    icon: GraduationCap,
    features: ['FMGE Passing Ratio Analysis', 'Clinical Exposure Review', 'Infrastructure Audit'],
    img: '/images/Service7.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 border-none bg-surface">
      <header className="mb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-primary-fixed text-on-primary-fixed-variant font-headline font-bold text-xs tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 uppercase"
        >
          Our Core Service Pillars
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface mb-8 leading-[1.1] tracking-tighter"
        >
          Surgical Precision in <br/> <span className="text-primary italic">Every Service</span>.
        </motion.h1>
      </header>

      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        {allServices.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center rounded-[3rem] p-8 md:p-12 glass-card shadow-lg`}
          >
            <div className="w-full md:w-1/2 aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">
                {service.title}
              </h2>
              <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium text-on-surface">
                    <CheckCircle2 className="w-5 h-5 text-secondary" /> {f}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/20"
                  >
                    Get Assistance
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="rounded-[4rem] bg-gradient-to-br from-primary to-primary-container p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <h2 className="font-headline text-4xl md:text-6xl font-black">Ready for your transition?</h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg font-light">
              Connect with our counseling experts for a free university eligibility check today.
            </p>
            <div className="pt-6">
              <Link to="/contact">
                <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl">
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
