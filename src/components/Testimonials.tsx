import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Kalkidan Getenet",
    role: "Engineering Student",
    quote: "Dominator Study completely changed how I prepare for my finals. The Amharic notes are a lifesaver!",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Melaku Teshome",
    role: "Medicine Student",
    quote: "The bilingual support makes complex medical terms much easier to grasp. I feel so much more confident now.",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "Yonas Alemu",
    role: "Social Science Student",
    quote: "Finally, a study tool that actually understands the local curriculum. The support team is also incredibly fast!",
    color: "from-cta-orange to-orange-600"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/40 border border-cyan-glow/20 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-glow">
              Student Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            What Our <span className="text-gradient-cyan">Dominators</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-cyan-glow/20 mb-6" />
                <p className="text-soft-blue text-lg font-light leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-navy font-black text-xl border-2 border-white/10 shadow-lg shadow-black/20`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white uppercase tracking-tight">{t.name}</div>
                  <div className="text-[10px] text-cyan-glow font-black uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
