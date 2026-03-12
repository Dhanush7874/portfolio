import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Full Stack MERN Developer',
      company: 'Freelance & Projects',
      description:
        'Developing and deploying full-stack web applications using MongoDB, Express.js, React, and Node.js. Specializing in building scalable REST APIs, implementing authentication systems, and creating responsive user interfaces.',
      achievements: [
        'Built and deployed 10+ full-stack applications',
        'Implemented JWT-based authentication systems',
        'Developed real-time features using WebSocket',
        'Optimized database queries improving performance by 40%',
      ],
    },
    {
      period: '2021 - 2022',
      title: 'Frontend Developer',
      company: 'Learning & Development',
      description:
        'Focused on mastering modern frontend technologies including React, TypeScript, and modern CSS frameworks. Built multiple projects to strengthen understanding of component architecture and state management.',
      achievements: [
        'Mastered React ecosystem including hooks and context',
        'Learned TypeScript for type-safe development',
        'Built responsive UIs with TailwindCSS and Material UI',
        'Implemented modern animation libraries',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
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
              Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                  className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block"
                />

                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg text-blue-400">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm text-white">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-3 text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-2" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
