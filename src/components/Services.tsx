import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Plane, 
  Ticket, 
  FileText, 
  Home, 
  Map, 
  GraduationCap 
} from 'lucide-react';

const services = [
  {
    title: 'Admission Support',
    desc: 'Hassle-free securement of seats in world-renowned medical universities globally.',
    icon: ClipboardCheck,
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    title: 'Visa Assistance',
    desc: 'Expert guidance through complex international student visa protocols with maximum success rate.',
    icon: Plane,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    title: 'Flight Ticket',
    desc: 'Seamless air travel coordination, including group departures and competitive airfare assistance.',
    icon: Ticket,
    color: 'text-primary-container',
    bg: 'bg-primary-container/10',
  },
  {
    title: 'Document Management',
    desc: 'Complete handling of documentation, including verification, translation, and apostille services.',
    icon: FileText,
    color: 'text-sky-600',
    bg: 'bg-sky-600/10',
  },
  {
    title: 'Hostel Facilities',
    desc: 'Guaranteed safe and comfortable on-campus or near-campus housing for all students.',
    icon: Home,
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
  },
  {
    title: 'Travel Support',
    desc: 'Airport pick-up and local transportation support in the host country for seamless transition.',
    icon: Map,
    color: 'text-rose-600',
    bg: 'bg-rose-600/10',
  },
  {
    title: 'College Selection',
    desc: 'In-depth analysis and guidance to select the best medical college matching your academic profile.',
    icon: GraduationCap,
    color: 'text-indigo-600',
    bg: 'bg-indigo-600/10',
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline text-4xl md:text-5xl font-bold text-on-surface"
          >
            Our Comprehensive Services
          </motion.h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light">
            We provide true end-to-end support for your medical education, from initial counseling to successful university enrollment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3 tracking-tight">{service.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
          {/* Last card placeholder if needed, or just let it be 7 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 7 * 0.05 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-primary text-white shadow-xl flex flex-col items-center justify-center text-center group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <h3 className="text-2xl font-headline font-black mb-4 relative z-10">Start Today</h3>
            <p className="text-white/80 text-sm mb-6 relative z-10">Get a specialized counseling session tailored just for you.</p>
            <button 
              onClick={() => navigate('/contact')}
              className="relative z-10 bg-white text-primary px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white/90 transition-all cursor-pointer"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
