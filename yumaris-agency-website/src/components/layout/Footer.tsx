const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactEmail = "salmankhan701.it@email.com";

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8 text-center font-poppins">
      <div className="container mx-auto">
        <p className="mb-2">
          &copy; {currentYear} Yumaris Agency. All rights reserved.
        </p>
        <p>
          Contact us: <a href={`mailto:${contactEmail}`} className="hover:text-primary transition-colors duration-300">{contactEmail}</a>
        </p>
        {/* Optional: Add links to social media or other pages later */}
      </div>
    </footer>
  );
};

export default Footer;
