import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  CheckCircle2, 
  ShieldCheck,
  Stethoscope,
  Globe,
  GraduationCap
} from 'lucide-react';
import { universities } from '../data/universities';

export default function UniversityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const uni = universities.find(u => u.id === id);

  if (!uni) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold">University not found</h1>
        <Link to="/universities" className="text-primary hover:underline mt-4 inline-block">
          Return to University List
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 overflow-x-hidden bg-surface">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={uni.image} 
          alt={uni.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Link 
                to="/universities" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/40 backdrop-blur-xl border border-white/50 text-black hover:bg-primary hover:text-white transition-all rounded-full text-xs font-black mb-8 shadow-2xl uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4 stroke-[3px]" /> Back to Universities
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {uni.country}
                </span>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> NMC & WHO Approved
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-on-surface tracking-tighter font-headline">
                {uni.name}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-on-surface-variant text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> {uni.location}, {uni.country}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Estd. {uni.established}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 -mt-8 relative z-10 transition-all">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-secondary mb-3" />
              <span className="text-lg font-bold text-on-surface font-headline">{uni.ranking || 'Top Ranked'}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest">Global Ranking</span>
            </div>
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <Users className="w-8 h-8 text-primary mb-3" />
              <span className="text-lg font-bold text-on-surface font-headline">{uni.students || 'Global Presence'}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest">Indian Students Community</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-on-surface font-headline flex items-center gap-3">
              <Stethoscope className="text-primary w-8 h-8" /> Institutional Overview
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              {uni.description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-on-surface font-headline">Clinical Advantages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {uni.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-on-surface-variant font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose This University */}
          <div className="glass-card p-10 rounded-[3rem] bg-surface-container-highest/20">
             <h3 className="text-2xl font-bold text-on-surface font-headline mb-6">Why Study MBBS at {uni.name}?</h3>
             <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Curriculum Excellence</h4>
                    <p className="text-sm text-on-surface-variant font-light">The program is aligned with international medical standards, ensuring students are well-prepared for global licensing exams like NEXT, USMLE, and PLAB.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <Hospital className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Modern Hospitals</h4>
                    <p className="text-sm text-on-surface-variant font-light">Affiliations with multiple state-of-the-art hospitals provide students with mandatory clinical rotations starting from the 3rd year of study.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-tertiary-fixed/10 rounded-xl flex items-center justify-center text-tertiary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Multicultural Environment</h4>
                    <p className="text-sm text-on-surface-variant font-light">A safe and vibrant destination for Indian students, offering a home-like environment with Indian food facilities and dedicated support teams.</p>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function Hospital({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" />
      <path d="M10 22v-4a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v4" />
      <path d="M12 7v4" />
      <path d="M10 9h4" />
    </svg>
  );
}
