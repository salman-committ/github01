"use client";
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Briefcase, Send, Phone, MapPin } from 'lucide-react';
import { services } from '@/lib/servicesData';
import CTAButton from '@/components/ui/CTAButton'; // Added CTAButton import

const formItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number = 0) => ({ // Added default value for i
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic later
    alert("Form submitted (UI only)! Thank you for your message.");
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 text-text-primary">
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-10 md:mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins bg-futuristic-gradient bg-clip-text text-transparent animate-gradient-x mb-6">
          Let's Start a Conversation
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          Have a project in mind, a question about our services, or just want to say hello? We're here to listen and help you craft your digital future. Reach out and let's innovate together!
        </p>
      </motion.header>

      <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
        {/* Form Section - takes 3 columns on md screens */}
        <motion.form
          onSubmit={handleSubmit}
          className="md:col-span-3 space-y-6 p-6 md:p-8 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl"
          initial="hidden"
          whileInView="visible" // Changed to whileInView for scroll reveal effect
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }} // Stagger children animation
        >
          <motion.div variants={formItemVariants} custom={0}>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5 ml-1">Full Name</label>
            <div className="relative">
              <User size={20} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-neon-primary/70" />
              <input type="text" name="name" id="name" required placeholder="e.g., Ada Lovelace" className="w-full pl-11 p-3 bg-black/40 border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-primary outline-none transition-all duration-300" />
            </div>
          </motion.div>

          <motion.div variants={formItemVariants} custom={1}>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5 ml-1">Email Address</label>
            <div className="relative">
              <Mail size={20} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-neon-primary/70" />
              <input type="email" name="email" id="email" required placeholder="you@domain.tech" className="w-full pl-11 p-3 bg-black/40 border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-primary outline-none transition-all duration-300" />
            </div>
          </motion.div>

          <motion.div variants={formItemVariants} custom={2}>
            <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1.5 ml-1">Service of Interest</label>
            <div className="relative">
              <Briefcase size={20} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-neon-primary/70" />
              <select name="service" id="service" required defaultValue="" className="w-full pl-11 p-3 bg-black/40 border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-primary outline-none appearance-none transition-all duration-300 text-text-primary">
                <option value="" disabled>Select a service...</option>
                {services.map(service => <option key={service.id} value={service.title} className="bg-bg-secondary text-text-primary">{service.title}</option>)}
              </select>
            </div>
          </motion.div>

          <motion.div variants={formItemVariants} custom={3}>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5 ml-1">Message</label>
            <div className="relative">
              <MessageSquare size={20} className="absolute left-3.5 top-4 text-neon-primary/70" />
              <textarea name="message" id="message" rows={5} required placeholder="Tell us about your project, goals, or any questions you have..." className="w-full pl-11 p-3 bg-black/40 border border-glass-border rounded-lg focus:ring-2 focus:ring-neon-primary outline-none transition-all duration-300 min-h-[120px]"></textarea>
            </div>
          </motion.div>

          <motion.div variants={formItemVariants} custom={4} className="w-full">
            <CTAButton
              text="Send Your Inquiry"
              type="submit"
              icon={Send}
              variant="primary"
              className="w-full" // Make button full width
            />
          </motion.div>
        </motion.form>

        {/* Contact Info & Buttons Section - takes 2 columns */}
        <motion.div
          className="md:col-span-2 space-y-6"
          initial="hidden"
          whileInView="visible" // Changed to whileInView for scroll reveal effect
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }} // Stagger children animation
        >
          <motion.div variants={formItemVariants} custom={0} className="p-6 md:p-8 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-semibold text-neon-secondary mb-5 flex items-center">
              <Phone size={26} className="mr-3"/> Direct Lines
            </h3>
            <p className="text-text-secondary mb-3">
              For urgent inquiries or a more direct conversation, feel free to use the channels below. We're excited to connect!
            </p>
            
            <motion.a
              href="mailto:salmankhan701.it@email.com"
              whileHover={{ scale: 1.03, x: 5 }} whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 w-full bg-neon-primary/10 hover:bg-neon-primary/20 border border-neon-primary/30 text-neon-primary font-medium py-3 px-5 rounded-lg mb-4 transition-all duration-300 group"
            >
              <Mail size={20} /> Email: salmankhan701.it@email.com
            </motion.a>
            <motion.a
              href="https://wa.me/910000000000" // Placeholder WhatsApp number
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, x: 5 }} whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 w-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 text-green-400 font-medium py-3 px-5 rounded-lg transition-all duration-300 group"
            >
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 filter brightness-0 invert group-hover:brightness-100" /> Chat on WhatsApp
            </motion.a>
             <p className="text-sm text-text-muted mt-4"> (WhatsApp number is a placeholder) </p>
          </motion.div>
          
          <motion.div variants={formItemVariants} custom={1} className="p-6 md:p-8 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl">
             <h3 className="text-2xl lg:text-3xl font-semibold text-neon-accent mb-4 flex items-center">
                <MapPin size={26} className="mr-3"/> Our Base
             </h3>
            <p className="text-text-secondary text-lg">
              Chennai, India
            </p>
            <p className="text-text-muted text-sm mt-1">
              Strategically operating to serve clients globally.
            </p>
             {/* Optional: Add a simple map placeholder image or Lottie animation here later */}
             {/* <div className="mt-4 h-40 bg-black/30 rounded-lg flex items-center justify-center text-text-muted">Map Visual Coming Soon</div> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
