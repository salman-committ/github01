"use client";
import { services } from '@/lib/servicesData'; // Adjust path
import ServiceCard from '@/components/services/ServiceCard'; // Adjust path
import { motion } from 'framer-motion';
import CTAButton from '@/components/ui/CTAButton'; // Added CTAButton import
import { MessageCircle } from 'lucide-react'; // Added MessageCircle import

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
      <header className="text-center mb-16 md:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins bg-futuristic-gradient bg-clip-text text-transparent animate-gradient-x mb-6">
          Our Digital Service Spectrum
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          Explore our comprehensive suite of digital services designed to elevate your brand, streamline operations, and accelerate growth in the digital age. We tailor solutions for education, businesses, and creators.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <footer className="text-center mt-20 md:mt-24">
        <CTAButton 
          text="Discuss Your Project" 
          href="/contact" 
          icon={MessageCircle} 
          variant="secondary"
          className="text-lg md:text-xl py-3.5 px-10 md:py-4 md:px-12" // Adjust padding if needed
        />
      </footer>
    </div>
  );
}
