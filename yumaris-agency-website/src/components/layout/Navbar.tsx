"use client";
import Link from 'next/link';
import { Home, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Home', icon: <Home size={18} className="mr-1 inline-block" /> }, // text-neon-primary will be on the motion.span now
    { href: '/services', label: 'Services' },
    { href: '/courses', label: 'Courses' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-glass-bg backdrop-blur-lg border-b border-glass-border sticky top-0 z-50 text-text-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Link href="/" className="text-2xl font-bold font-poppins hover:text-neon-primary transition-colors duration-300">
            Yumaris Agency
          </Link>
        </motion.div>

        {/* Navigation Links & Theme Toggle */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-poppins text-text-primary hover:text-neon-primary transition-colors duration-300 flex items-center">
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`flex items-center ${link.href === '/' ? 'text-neon-primary' : ''}`} // Keep Home link icon color distinct
                  >
                    {link.icon}
                    {link.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-md text-text-secondary hover:text-neon-primary focus:outline-none focus:ring-2 focus:ring-neon-primary transition-colors duration-300" // Removed hover:bg-neon-primary/10 as Framer Motion handles visual feedback
          >
            <Sun size={20} /> {/* Theme Toggle Placeholder */}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
