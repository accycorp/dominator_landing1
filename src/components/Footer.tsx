import { Crown, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/5 bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-gradient-to-br from-cyan-glow to-deep-blue rounded-lg">
                <Crown className="w-5 h-5 text-navy" />
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase italic">
                Dominator<span className="text-cyan-glow">Study</span>
              </span>
            </div>
            <p className="text-soft-blue text-sm font-light leading-relaxed mb-6">
              The #1 study companion for students who want to dominate their exams. 
              Built for speed, accuracy, and results.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow hover:text-navy transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow hover:text-navy transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow hover:text-navy transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-cyan-glow">Product</h4>
            <ul className="space-y-4 text-soft-blue text-sm font-light">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-cyan-glow">Company</h4>
            <ul className="space-y-4 text-soft-blue text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-cyan-glow">Legal</h4>
            <ul className="space-y-4 text-soft-blue text-sm font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-soft-blue/40">
          <div className="flex flex-wrap justify-center gap-8">
            <span>Trust: 98% Success Rate</span>
            <span>Support: 24h Response</span>
            <span>Security: End-to-End Encrypted</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-white/5" />
            <span className="text-cyan-glow">v2.4.0 High-Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
