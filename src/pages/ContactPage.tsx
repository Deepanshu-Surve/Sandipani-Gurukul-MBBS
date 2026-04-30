import { motion } from 'motion/react';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Edit3,
  MessageCircle,
  Share2,
  Globe,
  Loader2
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'Select Destination',
    budget: 'Select Range'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 1. Send Lead Notification to Admin
      const adminResponse = await fetch('https://whatsapp.infybusiness.com/api/email/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': import.meta.env.VITE_EMAIL_HEADER_TOKEN
        },
        body: JSON.stringify({
          to: 'infybright@gmail.com',
          subject: `New MBBS Consultation Request: ${formData.name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #0066cc;">New Consultation Request</h2>
              <p>You have received a new inquiry from the Sandipani Gurukul website.</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Full Name</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone Number</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${formData.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email Address</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${formData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Preferred Country</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${formData.country}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Estimated Budget</td>
                  <td style="padding: 10px; border: 1px solid #eee;">${formData.budget}</td>
                </tr>
              </table>
              <p style="margin-top: 30px; font-size: 12px; color: #999;">Sent from Sandipani Gurukul MBBS Admissions Portal</p>
            </div>
          `
        })
      });

      // 2. Send Feedback Email to User
      await fetch('https://whatsapp.infybusiness.com/api/email/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': import.meta.env.VITE_EMAIL_HEADER_TOKEN
        },
        body: JSON.stringify({
          to: formData.email,
          subject: 'We have received your consultation request - Sandipani Gurukul',
          html: `
            <div style="font-family: sans-serif; padding: 30px; color: #333; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 16px;">
              <h2 style="color: #0b5e96; margin-top: 0;">Hello ${formData.name},</h2>
              <p style="font-size: 16px; line-height: 1.6;">Thank you for reaching out to <strong>Sandipani Gurukul</strong>. We are excited to help you begin your global medical journey.</p>
              <p style="font-size: 16px; line-height: 1.6;">Our senior admissions consultant will review your profile and contact you within 24 hours to discuss the best options for your MBBS abroad.</p>
              
              <div style="background: #f5f9ff; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #0b5e96;">
                <h3 style="margin-top: 0; color: #0b5e96; font-size: 18px;">Your Request Summary:</h3>
                <p style="margin: 8px 0;"><strong>Preferred Country:</strong> ${formData.country}</p>
                <p style="margin: 8px 0;"><strong>Budget Range:</strong> ${formData.budget}</p>
              </div>

              <div style="margin-top: 35px; padding-top: 25px; border-top: 1px solid #eee;">
                <h4 style="color: #0b5e96; margin-bottom: 15px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Contact Our Experts Directly</h4>
                <p style="margin: 8px 0; font-size: 15px;">📞 <strong>+91 91743 47577</strong></p>
                <p style="margin: 8px 0; font-size: 15px;">📞 <strong>+91 73546 36460</strong></p>
                <p style="margin: 8px 0; font-size: 15px;">📧 <a href="mailto:admissions@sandipanigurukul.com" style="color: #0b5e96; text-decoration: none;">admissions@sandipanigurukul.com</a></p>
                <p style="margin: 8px 0; font-size: 15px;">🌐 <a href="https://sandipanigurukul.com" style="color: #0b5e96; text-decoration: none;">www.sandipanigurukul.com</a></p>
                
                <p style="margin-top: 25px; font-size: 13px; color: #777; font-style: italic;">
                  Sandipani Gurukul - Your Trusted Partner for Global Medical Education.<br>
                  Office Hours: Monday - Saturday, 10:00 AM - 7:00 PM IST
                </p>
              </div>
            </div>
          `
        })
      });

      if (adminResponse.ok) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          country: 'Select Destination',
          budget: 'Select Range'
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 overflow-x-hidden bg-surface">
      {/* Hero Header */}
      <header className="mb-16 text-center max-w-3xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
        >
          Get in Touch
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-extrabold font-headline text-on-surface tracking-tighter mb-6 leading-tight"
        >
          Your Global Medical <span className="text-primary">Odyssey Begins Here.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant text-lg font-light leading-relaxed"
        >
          Connect with our senior consultants for a personalized roadmap to your international medical career.
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Consultation Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 md:p-12 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />

            <h2 className="text-2xl font-bold font-headline mb-8 text-on-surface flex items-center gap-3">
              <div className="p-2 bg-primary-fixed rounded-lg">
                <Edit3 className="text-primary w-5 h-5" />
              </div>
              Free Consultation Request
            </h2>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="bg-success-container/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Request Sent!</h3>
                <p className="text-on-surface-variant mb-8">Our expert consultants will contact you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant font-light"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant font-light"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface placeholder:text-outline-variant font-light"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Preferred Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface cursor-pointer font-light"
                    >
                      <option>Select Destination</option>
                      <option>Russia</option>
                      <option>Uzbekistan</option>
                      <option>Kazakhstan</option>
                      <option>Georgia</option>
                      <option>Kyrgyzstan</option>
                      <option>China</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 ml-1">Estimated Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-surface-container-highest/50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none text-on-surface cursor-pointer font-light"
                    >
                      <option>Select Range</option>
                      <option>15L - 25L</option>
                      <option>25L - 35L</option>
                      <option>35L+</option>
                    </select>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-error text-sm font-medium px-2">Something went wrong. Please try again or contact us directly.</p>
                )}

                <motion.button
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-5 rounded-[2rem] font-headline font-extrabold text-lg shadow-xl shadow-primary/20 hover:opacity-95 transition-all flex items-center justify-center gap-3 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      Sending...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Consultation Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-6">
            <div className="bg-surface-container-low p-8 rounded-[2.5rem] flex items-start gap-6 group hover:bg-white transition-all duration-300 border border-transparent hover:border-outline-variant/10 shadow-sm">
              <div className="bg-secondary-container w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-inner">
                <Mail className="text-secondary w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface">Email Support</h3>
                <p className="text-on-surface-variant text-base mt-2 font-light leading-relaxed">
                  admissions@sandipanigurukul.com<br />
                  info@sandipanigurukul.com
                </p>
              </div>
            </div>

            <div className="bg-primary-fixed/30 p-8 rounded-[2.5rem] flex items-start gap-6 group hover:bg-white transition-all duration-300 border border-transparent hover:border-primary/10 shadow-sm">
              <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 shadow-md">
                <Phone className="text-primary w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface">Direct Helpline</h3>
                <p className="text-on-surface-variant text-lg mt-2 font-bold tracking-wider">
                  +91 91743 47577<br />
                  +91 73546 36460
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[3rem] bg-surface-container-highest/30 border border-outline-variant/10 overflow-hidden relative group">
            <div className="relative z-10">
              <h4 className="font-headline font-bold text-on-surface-variant text-sm tracking-[0.2em] uppercase mb-4">Availability</h4>
              <p className="text-on-surface text-lg font-light leading-relaxed">
                Our consultants are available <span className="font-bold text-primary">Monday through Saturday</span>, from 10:00 AM to 7:00 PM IST to assist with your medical enrollment.
              </p>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>

      {/* Local WhatsApp button removed - now global in App.tsx */}
    </div>
  );
}
