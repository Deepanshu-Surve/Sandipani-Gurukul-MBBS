import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Menu, X, ArrowRight, Home, Globe, GraduationCap, Briefcase, Info, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Destinations', path: '/destinations', icon: Globe },
  { name: 'Universities', path: '/universities', icon: GraduationCap },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Contact', path: '/contact', icon: MessageSquare },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Top Header - Branding & Primary Actions */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-[0_20px_40px_rgba(10,94,150,0.04)] flex justify-between items-center px-6 md:px-12 h-20 transition-all duration-300">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center shadow-[inset_0_0_10px_rgba(10,94,150,0.2)]">
            <Stethoscope className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-primary font-headline tracking-tight">Sandipani Gurukul</span>
        </Link>

        {/* Desktop Links - Visible only on LG screens */}
        <div className="hidden lg:flex items-center gap-8 font-headline text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-colors relative group ${location.pathname === item.path ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:opacity-90 shadow-lg shadow-primary/20"
            >
              Apply Now
            </motion.button>
          </Link>
          {/* Menu button: Hidden on Mobile, Visible on Tablet, Hidden on Desktop */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="hidden md:flex lg:hidden p-2 text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-colors items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Bottom Nav Bar - Mobile Only (Hidden on Tablet and Desktop) */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden bg-white/90 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-10px_30px_rgba(10,94,150,0.08)] flex items-center h-20 px-1 overflow-hidden">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center justify-center gap-1 flex-1 relative h-full group"
            >
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20 scale-110' : 'text-on-surface-variant group-hover:bg-surface-container-high'}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`text-[8px] font-bold uppercase tracking-tighter transition-all duration-300 ${isActive ? 'opacity-100 text-primary' : 'opacity-60'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Full Screen Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                    <Stethoscope className="text-primary w-6 h-6" />
                  </div>
                  <span className="font-bold text-primary font-headline">Navigation Center</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                  <X className="w-6 h-6 text-on-surface-variant" />
                </button>
              </div>

              <div className="space-y-4 flex-grow overflow-y-auto">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between p-5 rounded-[1.5rem] transition-all duration-300 font-headline font-bold text-lg ${
                        location.pathname === item.path 
                          ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                          : 'text-on-surface hover:bg-surface-container-high border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <item.icon className="w-6 h-6" />
                        {item.name}
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${location.pathname === item.path ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-outline-variant">
                <Link to="/contact">
                  <button className="w-full bg-primary text-white p-6 rounded-3xl font-headline font-black text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-4">
                    Apply Now
                    <ArrowRight className="w-7 h-7" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
