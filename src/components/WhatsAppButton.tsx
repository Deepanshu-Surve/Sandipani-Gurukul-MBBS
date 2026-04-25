import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919174347577"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-28 md:bottom-8 right-6 md:right-8 z-30 group flex items-center cursor-pointer"
    >
      <div className="bg-white px-6 py-3 rounded-full shadow-2xl mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block border border-outline-variant/10">
        <p className="text-secondary font-bold text-sm">Chat with a Consultant</p>
      </div>
      <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl shadow-secondary/40 hover:shadow-secondary/60 transition-all duration-300 ring-4 ring-white">
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
      </div>
    </motion.a>
  );
}
