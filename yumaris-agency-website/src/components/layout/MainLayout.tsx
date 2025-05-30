"use client";
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Slide up effect
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: { // Note: Exit animations might not work as expected without AnimatePresence in App Router
    opacity: 0,
    y: -20, // Slide down effect
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen font-poppins bg-bg-primary text-text-primary"> {/* Ensure bg and text colors are on the outer div if needed */}
      <Navbar />
      <motion.main
        key={pathname}
        initial="initial"
        animate="in"
        exit="out" 
        variants={pageVariants}
        transition={pageTransition}
        className="flex-grow container mx-auto px-4 py-8"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
