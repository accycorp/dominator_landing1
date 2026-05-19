import { motion } from 'motion/react';
import { Crown } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-navy/80 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="p-2 bg-gradient-to-br from-cyan-glow to-deep-blue rounded-lg shadow-lg shadow-cyan-glow/20">
          <Crown className="w-6 h-6 text-navy" />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter uppercase italic">
          Dominator<span className="text-cyan-glow">Study</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-[10px] font-bold text-soft-blue uppercase tracking-[0.2em]">
        <a href="#features" className="hover:text-cyan-glow transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-cyan-glow transition-colors">How It Works</a>
        <a href="#testimonials" className="hover:text-cyan-glow transition-colors">Results</a>
        <a href="#faq" className="hover:text-cyan-glow transition-colors">FAQ</a>
      </div>

    </motion.nav>
  );
}
