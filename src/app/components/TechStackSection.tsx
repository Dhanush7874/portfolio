import { motion } from 'motion/react';

export function TechStackSection() {
  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Material UI'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      technologies: ['MongoDB', 'Mongoose'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Tools',
      technologies: ['Git', 'GitHub', 'VS Code', 'Postman'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="tech-stack" className="py-24 relative">
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
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="mb-4">
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${stack.gradient} rounded-lg text-white font-semibold text-sm`}
                >
                  {stack.category}
                </div>
              </div>
              <ul className="space-y-3">
                {stack.technologies.map((tech) => (
                  <motion.li
                    key={tech}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stack.gradient}`} />
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
