import { Stethoscope, Share2, Globe, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-container py-16 px-6 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Stethoscope className="text-white w-5 h-5" />
              </div>
              <Link to="/" className="text-xl font-headline font-bold text-primary">Sandipani Gurukul</Link>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light">
              Empowering the next generation of global medical professionals through ethical guidance and world-class educational partnerships.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-light">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}><Link to={link.path} className="hover:text-primary transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 uppercase text-sm tracking-widest">Destinations</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-light">
              <Link to="/destinations" className="hover:text-primary transition-colors block">All Destinations</Link>
              {['MBBS in Russia', 'MBBS in Kazakhstan', 'MBBS in Georgia', 'MBBS in Uzbekistan', 'MBBS in China', 'MBBS in Kyrgyzstan'].map((link) => (
                <li key={link}><Link to="/destinations" className="hover:text-primary transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 uppercase text-sm tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant font-light">
              <li className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>+91 91743 47577</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 shrink-0" />
                <span>+91 73546 36460</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                admissions@sandipanigurukul.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-container flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant/60 uppercase tracking-widest">
          <p>© 2024 Sandipani Gurukul. Visionary Medical Education Consultancy.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
