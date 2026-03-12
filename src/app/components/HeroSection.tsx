import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const techIcons = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.06 0c.45-1.29.73-2.62.87-3.94-.29-.05-.58-.09-.88-.13-.07.29-.14.58-.24.86C15.39 9.71 15.01 10.84 15.98 12zM8.02 12c-.97-1.16-1.35-2.29-1.69-3.21-.1-.28-.17-.57-.24-.86-.3.04-.59.08-.88.13.14 1.32.42 2.65.87 3.94z" />
        </svg>
      ),
      color: 'text-cyan-400',
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.55 16.5c-.08-.05-.13-.14-.13-.23V7.69c0-.09.05-.18.13-.23l7.44-4.3c.08-.04.18-.04.26 0l7.44 4.3c.08.05.13.14.13.23v8.58c0 .09-.05.18-.13.23l-7.44 4.3c-.08.04-.18.04-.26 0l-1.89-1.12c-.06-.03-.12-.04-.18-.02-.5.28-.6.32-1.07.48-.11.04-.28.1.06.28l2.46 1.45c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.3c.48-.28.78-.8.78-1.36V7.69c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8.34c-2.15 0-3.5.93-3.5 2.48 0 1.68 1.3 2.15 3.4 2.35 2.52.24 2.7.6 2.7 1.08 0 .83-.67 1.18-2.24 1.18-1.98 0-2.4-.5-2.55-1.47-.02-.11-.11-.2-.22-.2h-.96c-.12 0-.21.09-.21.21 0 1.24.68 2.72 3.94 2.72 2.36 0 3.72-1.02 3.72-2.8 0-1.67-1.12-2.11-3.48-2.42-2.37-.32-2.62-.48-2.62-1.04 0-.46.2-1.09 2.02-1.09 1.62 0 2.22.35 2.46 1.44.02.11.11.19.22.19h.96c.06 0 .12-.02.17-.07.05-.05.08-.11.07-.17-.13-1.54-1.13-2.39-3.88-2.39z" />
        </svg>
      ),
      color: 'text-green-500',
    },
    {
      name: 'MongoDB',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
        </svg>
      ),
      color: 'text-green-600',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dhanush N
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6"
          >
            Full Stack MERN Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          >
            I build scalable full-stack applications using React, TypeScript, Node.js, and MongoDB.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Animated Tech Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-8"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className={`${tech.color} transition-all duration-300`}
              >
                {tech.icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:dhanush@example.com"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
