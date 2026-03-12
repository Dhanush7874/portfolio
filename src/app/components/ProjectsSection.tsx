import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Pool Ticket Management System',
      description:
        'A comprehensive ticket management system for pool facilities featuring real-time ticket printing, pass management, daily revenue reports, and an intuitive admin dashboard for complete operational control.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Restaurant Management System',
      description:
        'Full-featured restaurant management solution with order tracking, table management, real-time billing system, and comprehensive admin dashboard for managing menu items, staff, and sales analytics.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop',
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Material UI'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Wedding Event Website (SV Decors)',
      description:
        'Elegant wedding event showcase website featuring stunning image galleries, event details, service packages, and contact inquiry forms. Built to provide an immersive experience for potential clients.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8339e?w=800&h=500&fit=crop',
      tech: ['React', 'JavaScript', 'TailwindCSS', 'Motion'],
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my recent work</p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden h-64 lg:h-auto"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  </motion.div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className={`flex-1 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex-1 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
