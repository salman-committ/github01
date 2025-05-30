"use client";
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, TrendingUp, ShieldCheck, Rocket, Zap } from 'lucide-react'; // Example icons
import CTAButton from '@/components/ui/CTAButton'; // Added CTAButton import

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const valueCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const AboutUsPage = () => {
  const values = [
    { title: "Innovation at Core", description: "We constantly explore new technologies and creative strategies to keep you ahead of the curve.", icon: <Lightbulb size={28} className="text-neon-accent mb-3" /> },
    { title: "Client-Centric Approach", description: "Your success is our benchmark. We collaborate closely to tailor solutions that meet your specific goals.", icon: <Target size={28} className="text-neon-accent mb-3" /> },
    { title: "Empowerment & Growth", description: "We aim to equip our clients with the knowledge, tools, and digital presence needed for sustained growth.", icon: <TrendingUp size={28} className="text-neon-accent mb-3" /> },
    { title: "Affordable Excellence", description: "Delivering high-impact, professional services that provide real value and are accessible to all.", icon: <ShieldCheck size={28} className="text-neon-accent mb-3" /> }
  ];

  return (
    <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 text-text-primary space-y-20 md:space-y-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins bg-futuristic-gradient bg-clip-text text-transparent animate-gradient-x mb-6">
          About Yumaris Agency: Innovating the Digital Frontier
        </h1>
      </motion.header>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true, amount: 0.1 }}
        className="p-6 md:p-8 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold font-poppins text-neon-primary mb-5 flex items-center">
          <Rocket size={28} className="mr-3" /> Our Genesis
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          Yumaris Agency was born from a vision to democratize access to high-quality digital services. We saw a gap where students, aspiring creators, and emerging businesses needed a partner who understood their unique challenges and could deliver futuristic, professional solutions without breaking the bank. Today, we are that partner, dedicated to empowering your journey in the digital realm with expertise in education, branding, design, automation, and marketing.
        </p>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins text-neon-secondary mb-10 md:mb-12 text-center">Mission & Values</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={valueCardVariants}
              // Staggering will be handled by parent's custom prop if needed, or apply delay here
              className="p-6 bg-card-bg border border-card-border rounded-xl shadow-lg hover:shadow-neon-accent/20 transition-shadow duration-300"
            >
              {value.icon}
              <h3 className="text-xl lg:text-2xl font-semibold text-neon-accent mb-2">{value.title}</h3>
              <p className="text-text-secondary">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true, amount: 0.1 }}
        className="text-center p-6 md:p-8 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold font-poppins text-neon-primary mb-5 flex items-center justify-center">
          <Users size={28} className="mr-3" /> Meet Our Innovators
        </h2>
        <p className="text-lg text-text-secondary mb-4 max-w-3xl mx-auto">
          Our diverse team of designers, developers, educators, and strategists are the driving force behind Yumaris. We are united by a passion for technology and a commitment to bringing your vision to life.
        </p>
        <p className="text-md text-text-muted">
          Detailed team profiles coming soon!
        </p>
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        custom={3}
        viewport={{ once: true, amount: 0.1 }}
        className="text-center py-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold font-poppins text-neon-secondary mb-8">
          Ready to Elevate Your Digital Presence?
        </h2>
        <CTAButton 
          text="Let's Build Your Future" 
          href="/contact" 
          icon={Rocket} // Using Rocket icon as per suggestion
          variant="primary" 
          className="text-lg md:text-xl py-3.5 px-10 md:py-4 md:px-12" // Adjust padding if needed
        />
      </motion.section>
    </div>
  );
};

export default AboutUsPage;
