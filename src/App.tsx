/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Send, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Subtle separator */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent shadow-[0_0_15px_rgba(0,229,255,0.1)]" />
        
        <HowItWorks />
        
        <Features />

        <Testimonials />
        
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-cta-orange/5 pointer-events-none" />
          <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-cta-orange/10 to-transparent pointer-events-none" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-cta-orange rounded-3xl flex items-center justify-center shadow-2xl shadow-cta-orange/40 rotate-12">
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] mt-4 uppercase">
              Ready to Ace Your <br />
              <span className="text-cta-orange italic">Final Exams?</span>
            </h2>
            <p className="text-soft-blue text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Join other students who are transforming their academic 
              performance with Dominator Study.
            </p>
            
            <motion.a
              href="https://t.me/Dominator_support"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-cta-orange text-white font-black rounded-[2rem] flex items-center justify-center gap-3 text-2xl shadow-2xl shadow-cta-orange/30 mx-auto group uppercase tracking-tighter"
            >
              Register Now
              <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            
            <div className="mt-8 text-soft-blue/40 text-sm font-light">
              Instant access. No credit card required to start.
            </div>
          </div>
        </section>
        
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}

