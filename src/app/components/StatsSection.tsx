import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, Code } from 'lucide-react';

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const increment = end / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      {count}+
    </div>
  );
}

export function StatsSection() {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: 2,
      label: 'Years Experience',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Code className="w-8 h-8" />,
      value: 10,
      label: 'Projects Built',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 5,
      label: 'Full Stack Applications',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-xl text-white mb-4`}
              >
                {stat.icon}
              </motion.div>
              <AnimatedCounter end={stat.value} />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
