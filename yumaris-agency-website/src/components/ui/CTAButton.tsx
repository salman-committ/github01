"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  icon?: React.ElementType;
  className?: string;
  iconClassName?: string; // For specific icon styling if needed
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon: Icon,
  className = "",
  iconClassName = "w-5 h-5" // Default icon size
}) => {
  const baseClasses = "font-bold py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform inline-flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary shadow-md hover:shadow-lg";
  
  let variantClasses = "";
  if (variant === "primary") {
    // For primary, text color will depend on the gradient's perceived lightness.
    // Assuming gradient is dark enough for light text or text-primary is light.
    variantClasses = "bg-futuristic-gradient text-white hover:shadow-neon-primary/40 focus:ring-neon-primary"; 
  } else { // secondary
    variantClasses = "bg-transparent border-2 border-neon-secondary text-neon-secondary hover:bg-neon-secondary hover:text-bg-primary focus:ring-neon-secondary";
  }

  const motionProps = {
    whileHover: { scale: 1.05, filter: variant === "primary" ? "brightness(1.1)" : "brightness(1.25)" }, // Brighter for secondary on hover
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  const content = (
    <>
      {Icon && <Icon className={iconClassName} />}
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <motion.div {...motionProps} className={`inline-block ${className}`}> {/* Apply className to the motion wrapper for layout control */}
        <Link href={href} className={`${baseClasses} ${variantClasses}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      {...motionProps}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default CTAButton;
