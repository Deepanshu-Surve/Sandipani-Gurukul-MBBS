import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Sandipani Gurukul made my dream of becoming a doctor a reality. The process was transparent, and I never felt alone in a foreign country.",
    name: "Dr. Rohit Soni",
    uni: "Al-Farabi Kazakh National University, Kazakhstan",
    img: "https://picsum.photos/seed/doc1/100/100",
  },
  {
    quote: "Securing admission abroad seemed daunting, but the team here made it seamless. Their support even after reaching the university is commendable.",
    name: "Dr. Anshul Chouhan",
    uni: "Tashkent Medical Academy, Uzbekistan",
    img: "https://picsum.photos/seed/doc3/100/100",
  },
  {
    quote: "The pre-departure briefing was extremely helpful. It prepared me for the cultural changes and academic rigor of studying in Russia.",
    name: "Dr. Sumit Nayak",
    uni: "Orenburg State Medical University, Russia",
    img: "https://picsum.photos/seed/doc4/100/100",
  },
  {
    quote: "I highly recommend their services to every medical aspirant. They are professional, reliable, and truly care about the student's future.",
    name: "Dr. Kanak Tiwari",
    uni: "Jalal-Abad State University, Kyrgyzstan",
    img: "https://picsum.photos/seed/doc6/100/100",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-primary text-white py-24 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Success Stories
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">What Our Students Say</h2>
            <p className="text-lg text-primary-fixed opacity-80 leading-relaxed mb-8 font-light">
              Hear from our students currently pursuing their dreams in leading medical universities across the world.
            </p>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block mt-8">
              <div className="flex justify-center lg:justify-start gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start gap-2">
                {testimonials.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-secondary w-6' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-white/10 flex flex-col justify-between shadow-2xl"
                >
                  <div>
                    <Quote className="text-secondary w-12 h-12 mb-8 fill-secondary opacity-50" />
                    <p className="text-xl md:text-2xl italic leading-relaxed mb-10 font-light tracking-wide">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-6 border-t border-white/10 pt-8">
                    <img 
                      src={testimonials[currentIndex].img} 
                      alt={testimonials[currentIndex].name} 
                      className="w-16 h-16 rounded-full border-2 border-secondary object-cover shadow-lg" 
                      referrerPolicy="no-referrer" 
                    />
                    <div>
                      <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-secondary-fixed font-medium uppercase tracking-widest mt-1">
                        {testimonials[currentIndex].uni}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation (Arrows at the bottom) */}
            <div className="lg:hidden mt-12">
              <div className="flex justify-center gap-6">
                <button 
                  onClick={prevTestimonial}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'bg-secondary w-8' : 'bg-white/20 w-2 hover:bg-white/40'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}