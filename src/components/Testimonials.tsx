import { motion } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Sandipani Gurukul made my dream of becoming a doctor a reality. The process was transparent, and I never felt alone in a foreign country.",
    name: "Dr. Aryan Sharma",
    uni: "Kursk State Medical University, Russia",
    img: "https://picsum.photos/seed/doc1/100/100",
  },
  {
    quote: "The guidance for visa and hostel documentation was perfect. I am now in my 3rd year and the university facilities are top-notch.",
    name: "Sneha Reddy",
    uni: "Al-Farabi Kazakh National University, Kazakhstan",
    img: "https://picsum.photos/seed/doc2/100/100",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-primary text-white py-24 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 leading-tight">Success Stories</h2>
            <p className="text-lg text-primary-fixed opacity-80 leading-relaxed mb-8 font-light">
              Hear from our students currently pursuing their dreams in leading medical universities across the world.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <Quote className="text-secondary-fixed w-10 h-10 mb-6 fill-secondary-fixed" />
                  <p className="text-xl italic leading-relaxed mb-8 font-light tracking-wide">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary-fixed" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-xs text-primary-fixed opacity-70 uppercase tracking-wider">{t.uni}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
