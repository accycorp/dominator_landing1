import { motion } from 'motion/react';
import { 
  StickyNote, 
  HelpCircle, 
  TrendingUp, 
  Cpu, 
  Medal, 
  Zap,
  Target,
  Sparkles,
  Languages,
  Headset
} from 'lucide-react';

const features = [
  {
    icon: Languages,
    title: "Best Amharic + English notes",
    description: "Premium, bilingual study notes designed for maximum clarity and understanding.",
    color: "text-blue-400",
    comingSoon: false
  },
  {
    icon: Headset,
    title: "Great Support Team",
    description: "Our dedicated team is ready to help you with questions and updates any time.",
    color: "text-cta-orange",
    comingSoon: false
  },
  {
    icon: Cpu,
    title: "Personalized AI Tutor",
    description: "Stuck on a concept? Our built-in AI tutor explains anything in seconds.",
    color: "text-cyan-glow",
    comingSoon: true
  },
  {
    icon: Target,
    title: "Exam Simulations",
    description: "Timed mock exams that prepare you for the pressure of the real thing.",
    color: "text-purple-400",
    comingSoon: true
  },
  {
    icon: Sparkles,
    title: "AI Question Solver",
    description: "Take a photo or type a question and get instant step-by-step solutions.",
    color: "text-cyan-400",
    comingSoon: true
  },
  {
    icon: TrendingUp,
    title: "Progress Visualization",
    description: "Detailed analytics on your strengths and weaknesses to guide your study sessions.",
    color: "text-green-400",
    comingSoon: true
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-cyan-glow font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <Medal className="w-4 h-4" />
              Dominate Every Subject
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Powerful Features for <br />
              <span className="text-gradient-cyan">Maximum Results</span>
            </h2>
            <p className="text-soft-blue text-lg font-light leading-relaxed">
              We've packed Dominator Study with cutting-edge tools that transform 
              average students into top performers.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
          >
            <div className="w-12 h-12 bg-cyan-glow/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-cyan-glow" />
            </div>
            <div className="text-sm">
              <div className="font-bold">Lightning Fast</div>
              <div className="text-soft-blue/60 font-light">Zero lag mobile app</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[250px]">
          {features.map((feature, idx) => {
            const spans = [
              "md:col-span-3 lg:col-span-4 row-span-1",
              "md:col-span-3 lg:col-span-4 row-span-2",
              "md:col-span-3 lg:col-span-4 row-span-1",
              "md:col-span-3 lg:col-span-8 row-span-1",
              "md:col-span-3 lg:col-span-4 row-span-2",
              "md:col-span-6 lg:col-span-8 row-span-1",
            ];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bento-card flex flex-col justify-between group relative overflow-hidden ${spans[idx % spans.length]}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    {feature.comingSoon && (
                      <div className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black uppercase tracking-widest text-soft-blue/50">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-soft-blue text-sm font-light leading-relaxed max-w-[250px]">
                    {feature.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-cyan-glow transition-colors">
                    Feature 0{idx + 1}
                  </div>
                  <Sparkles className="w-4 h-4 text-white/5 group-hover:text-cyan-glow/20 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
