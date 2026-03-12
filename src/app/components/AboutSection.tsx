import { motion } from 'motion/react';
import { Code2, Sparkles, Rocket } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern UI/UX',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Performance',
      description: 'Building fast and optimized web applications',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Passionate MERN Stack Developer
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  With over 2 years of experience in full-stack development, I specialize in building 
                  robust and scalable web applications using the MERN stack. My journey in software 
                  development has been driven by a passion for creating solutions that make a difference.
                </p>
                <p>
                  I focus on writing clean, maintainable code and implementing modern architectural 
                  patterns. My expertise lies in developing RESTful APIs, creating responsive user 
                  interfaces, and optimizing application performance.
                </p>
                <p>
                  I'm committed to staying current with the latest technologies and best practices 
                  in web development, ensuring that every project I work on leverages the most 
                  effective tools and techniques available.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg text-blue-400">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
