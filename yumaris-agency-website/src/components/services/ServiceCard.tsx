"use client"; // Required for useState
import React, { useState } from 'react';
import { type ServiceCategory } from '@/lib/servicesData'; // Adjust path
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceCategory;
}

interface ExpandableListItemProps {
  title: string;
  items: { title: string; details?: string }[]; // Updated to include details if present in MicroService
  itemKey: string;
}

const ExpandableListItem: React.FC<ExpandableListItemProps> = ({ title, items, itemKey }) => {
  const [isOpen, setIsOpen] = useState(false);

  // If there are no microServices, or the array is empty, just render the title as a non-expandable item.
  // This handles cases like "Quiz System & Auto Certification" which might not have further breakdown initially.
  if (!items || items.length === 0) {
    return (
      <li className="py-2 text-text-secondary">
        <div className="flex items-center">
          <span className="w-6 inline-block"></span> {/* Placeholder for icon spacing */}
          <span>{title}</span>
        </div>
      </li>
    );
  }

  return (
    <li className="py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-text-primary hover:text-neon-primary transition-colors duration-200 py-1 rounded"
      >
        <div className="flex items-center">
          {isOpen ? <ChevronDown size={18} className="mr-1 text-neon-primary" /> : <ChevronRight size={18} className="mr-1" />}
          <span>{title}</span>
        </div>
      </button>
      {isOpen && (
        <ul className="pl-7 mt-1 space-y-1 text-text-secondary text-sm">
          {items.map((item, idx) => (
            <li key={`${itemKey}-micro-${idx}`} className="py-0.5">
              {item.title}
              {item.details && <span className="text-xs text-text-muted ml-2">({item.details})</span>}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-neon-primary/20 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <IconComponent size={30} className="mr-4 text-neon-primary flex-shrink-0" />
        <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-text-primary">{service.title}</h3>
      </div>
      <p className="text-text-secondary mb-5 text-sm flex-grow">{service.description}</p>
      <hr className="border-t border-glass-border my-3"/>
      <ul className="space-y-1">
        {service.subServices.map((sub, index) => (
          <ExpandableListItem
            key={`${service.id}-sub-${index}`}
            itemKey={`${service.id}-sub-${index}`}
            title={sub.title}
            items={sub.microServices}
          />
        ))}
      </ul>
    </div>
  );
};
export default ServiceCard;
