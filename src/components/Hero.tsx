import { motion } from 'motion/react';
import { Send, Users, Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-glow/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cta-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/40 border border-cyan-glow/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-glow">
              Join other students crushing their exams
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter"
          >
            DOMINATE YOUR <br />
            <span className="text-gradient-cyan">FINAL EXAMS.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-soft-blue max-w-xl mb-12 leading-relaxed font-light"
          >
            The ultimate smart study platform that helps students master any subject and ace their exams with AI-powered insights.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <motion.a
              href="https://t.me/Dominator7_bot/register"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-6 bg-cta-orange text-white font-black rounded-2xl flex items-center justify-center gap-3 text-2xl shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:shadow-[0_0_60px_rgba(255,107,0,0.4)] transition-all uppercase tracking-tighter"
            >
              Register Now
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </motion.a>
            
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-soft-blue/50 uppercase tracking-widest font-black mb-1">Compatible with</span>
              <span className="text-sm font-bold text-white">Telegram Desktop & Mobile</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 bg-linear-to-br from-white/5 to-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between h-64"
          >
            <div className="text-[10px] font-black uppercase tracking-widest text-cyan-glow">Success Rate</div>
            <div className="text-6xl font-black text-white">98%</div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-cyan-glow shadow-[0_0_15px_rgba(0,229,255,0.5)]" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/5 rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="w-12 h-12 bg-cyan-glow/10 rounded-2xl flex items-center justify-center">
              <Send className="w-6 h-6 text-cyan-glow" />
            </div>
            <div className="text-xs font-black uppercase tracking-tighter">Fast Bot</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 border border-white/5 rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center gap-3"
          >
            <div className="w-12 h-12 bg-cta-orange/10 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-cta-orange" />
            </div>
            <div className="text-xs font-black uppercase tracking-tighter">Other Students</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
