const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactEmail = "salmankhan701.it@email.com";

  return (
    <footer className="bg-glass-bg backdrop-blur-md border-t border-glass-border text-text-secondary py-8 text-center font-poppins">
      {/* Optional: <hr className="border-t border-neon-secondary/20 w-1/2 mx-auto mb-8" /> */}
      <div className="container mx-auto px-4">
        <p className="mb-2 text-sm">
          &copy; {currentYear} Yumaris Agency. All rights reserved.
        </p>
        <p className="text-sm">
          Contact: <a href={`mailto:${contactEmail}`} className="hover:text-neon-primary transition-colors duration-300">{contactEmail}</a>
        </p>
        {/* Optional: Add social media icons using Lucide React later */}
      </div>
    </footer>
  );
};

export default Footer;
