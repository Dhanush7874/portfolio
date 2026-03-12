import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:dhanush@example.com' },
  ];

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 flex items-center gap-2 flex-wrap justify-center md:justify-start">
              <span>© {currentYear} Dhanush N. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </p>
          </motion.div>

          {/* Right side - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            Designed & Developed by Dhanush N
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
