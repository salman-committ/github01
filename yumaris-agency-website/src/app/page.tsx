"use client";
import { Cpu, Layers, Megaphone, Send } from 'lucide-react'; // Added Send
import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton'; // Added CTAButton import

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32 lg:space-y-40 xl:space-y-48 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 py-16 md:py-20 bg-gradient-to-br from-bg-primary to-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6">
            <span className="bg-futuristic-gradient bg-clip-text text-transparent animate-gradient-x">
              Yumaris Agency: Future-Proof Your Digital Presence
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Empowering educational institutions and student-led organizations with cutting-edge design, automation, and marketing solutions.
          </p>
          <CTAButton 
            text="Get Started" 
            href="/contact" 
            icon={Send} 
            variant="primary" 
            className="text-lg md:text-xl" // Ensuring text size consistency
          />
          <div className="mt-16 md:mt-20 h-64 w-full max-w-md mx-auto bg-glass-bg border border-glass-border rounded-xl flex items-center justify-center">
            <p className="text-text-muted"> {/* TODO: Insert 3D/Lottie animation here */} Interactive Element Placeholder</p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
        }}
        className="container mx-auto px-4 py-16 md:py-20" // Added py padding here
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-poppins">
          <span className="bg-futuristic-gradient bg-clip-text text-transparent">Our Core Services</span>
        </h2>
        <motion.div // This div will have staggerChildren
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {[
            { title: 'Futuristic Web Design', description: 'Crafting immersive and responsive web experiences that captivate and convert.', icon: <Cpu size={40} className="mb-4 text-neon-primary" /> },
            { title: 'AI-Powered Automation', description: 'Streamlining your workflows with intelligent automation solutions.', icon: <Layers size={40} className="mb-4 text-neon-secondary" /> },
            { title: 'Digital Marketing & Branding', description: 'Elevating your brand presence with targeted digital marketing strategies.', icon: <Megaphone size={40} className="mb-4 text-neon-accent" /> },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-xl p-6 md:p-8 shadow-2xl hover:shadow-neon-primary/30 transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 font-poppins text-text-primary">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-poppins">
          <span className="bg-futuristic-gradient bg-clip-text text-transparent">Why Choose Yumaris?</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-text-secondary">
          <p>We specialize in providing <strong className="text-neon-accent">affordable, student-friendly</strong> digital solutions without compromising on quality or innovation. Our futuristic approach ensures your brand stays ahead of the curve.</p>
          <p>From initial concept to final deployment, we offer a personalized experience, working closely with you to bring your vision to life with creativity and technical excellence.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-poppins">
          <span className="bg-futuristic-gradient bg-clip-text text-transparent">Voices of Our Partners</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {[
            { name: 'Student Organization X', quote: 'Yumaris Agency transformed our online presence! Their designs are stunning and their team is incredibly supportive.' },
            { name: 'Educational Institute Y', quote: 'The automation solutions provided have saved us countless hours. Highly recommend their services!' },
          ].map((testimonial, index) => (
            <div key={index} className="bg-card-bg border border-card-border rounded-xl p-6 md:p-8 shadow-xl">
              <p className="text-text-secondary italic mb-4">"{testimonial.quote}"</p>
              <p className="text-text-primary font-semibold font-poppins">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
