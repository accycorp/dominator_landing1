import { motion } from 'motion/react';
import { UserPlus, CreditCard, BookOpenCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Register on Bot",
    description: "Click 'Register' on the Dominator Study Bot to create your personalized profile.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    description: "Secure your access by making a payment to the specified account. Fast and secure.",
    color: "from-purple-500 to-pink-400"
  },
  {
    icon: BookOpenCheck,
    title: "Start Dominating",
    description: "Get instant access to premium features and start acing your exams right away.",
    color: "from-cta-orange to-orange-600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Getting Started is <span className="text-gradient-cyan">Easy</span>
          </h2>
          <p className="text-soft-blue max-w-xl mx-auto font-light">
            Follow these simple steps to transform your grades and study habits in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bento-card flex flex-col justify-between group relative overflow-hidden h-80"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-4 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                  <step.icon className="w-full h-full text-white" />
                </div>
                <div className="text-4xl font-black text-white/5 group-hover:text-cyan-glow/10 transition-colors">
                  0{idx + 1}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-3 tracking-tighter uppercase leading-none">{step.title}</h3>
                <p className="text-soft-blue text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="h-1 w-full bg-white/5 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(idx + 1) * 33.3}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                  className="h-full bg-cyan-glow" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
