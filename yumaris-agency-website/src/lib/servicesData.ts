import { Briefcase, GraduationCap, Clapperboard, Palette, Zap, ShieldCheck, Settings, Camera, Smartphone, BarChart3 } from 'lucide-react'; // Example icons

export interface MicroService {
  title: string;
  details?: string; // Optional
}

export interface SubService {
  title: string;
  microServices: MicroService[];
  icon?: React.ElementType; // Optional icon for sub-service
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  subServices: SubService[];
}

export const services: ServiceCategory[] = [
  {
    id: 'education',
    title: 'Education Services',
    description: 'Empowering learners with quality education and skills.',
    icon: GraduationCap,
    subServices: [
      {
        title: 'Live Tutoring',
        microServices: [ { title: 'Class 1–12' }, { title: 'NEET' }, { title: 'JEE' }, { title: 'CUET' } ],
      },
      {
        title: 'Recorded Courses with Certificate',
        microServices: [
          { title: 'Tech: Scratch, Python, HTML, Web Design' },
          { title: 'Skills: Public Speaking, Canva, Design' },
        ],
      },
      { title: 'Quiz System & Auto Certification', microServices: [] },
      { title: 'Student Dashboard', microServices: [] },
    ],
  },
  {
    id: 'web',
    title: 'Website Design & Development',
    description: 'Crafting stunning, high-performance websites tailored to your brand.',
    icon: Briefcase, // Changed from 'Layers' for variety
    subServices: [
      { title: 'Business Website / E-commerce Website / Personal Website', microServices: [] },
      { title: 'Animated UI with modern design', microServices: [] },
      { title: 'SEO Optimization', microServices: [{title: 'Meta tags, sitemap, robots.txt'}] },
      { title: 'Responsive and secure design', microServices: [] },
      { title: 'Hosting setup and maintenance', microServices: [] },
    ],
  },
  {
     id: 'video',
     title: 'Video Editing & Multimedia',
     description: 'Bringing your stories to life with captivating video content.',
     icon: Clapperboard,
     subServices: [
         { title: 'YouTube Video Editing', microServices: [] },
         { title: 'Reels and Shorts', microServices: [] },
         { title: 'Logo Animations', microServices: [] },
         { title: 'Motion Graphics', microServices: [] },
         { title: 'Event Videos', microServices: [] },
     ]
  },
 {
     id: 'branding',
     title: 'Branding & Strategy',
     description: 'Building memorable brands that connect with your audience.',
     icon: Palette,
     subServices: [
         { title: 'Logo Design', microServices: [{ title: 'Icon/text/symbol'}] },
         { title: 'Brand Kit', microServices: [{ title: 'Colors, Typography, Style Guide'}] },
         { title: 'Content Strategy', microServices: [{ title: 'Instagram, Facebook'}] },
         { title: 'Template Packs', microServices: [{ title: 'Canva, Presentation, Brochure'}] },
     ]
 },
 {
     id: 'marketing',
     title: 'Marketing & Automation',
     description: 'Driving growth with targeted marketing campaigns and automation.',
     icon: BarChart3, // Changed for thematic fit
     subServices: [
         { title: 'Meta Ads', microServices: [{ title: 'Facebook, Instagram'}] },
         { title: 'Google Ads', microServices: [{ title: 'Search, Display, YouTube'}] },
         { title: 'Email + SMS Campaigns', microServices: [{ title: 'Mailchimp/Brevo'}] },
         { title: 'WhatsApp Marketing Bots', microServices: [] },
         { title: 'CRM Integration & Follow-up Systems', microServices: [] },
     ]
 },
 {
     id: 'ai-automation',
     title: 'AI & Automation Tools',
     description: 'Leveraging AI to streamline workflows and enhance productivity.',
     icon: Zap,
     subServices: [
         { title: 'AI Chatbot for Website & WhatsApp', microServices: [] },
         { title: 'AI Text/Poster/Video Script Generator', microServices: [] },
         { title: 'Auto Lead Response & Task Workflows', microServices: [] },
     ]
 },
 {
     id: 'cybersecurity',
     title: 'Cybersecurity Services',
     description: 'Protecting your digital assets with robust security solutions.',
     icon: ShieldCheck,
     subServices: [
         { title: 'SSL Setup, Login Protection', microServices: [] },
         { title: 'Vulnerability Scanning, Ethical Hacking', microServices: [] },
         { title: 'GDPR Compliance & Privacy Policy Generator', microServices: [] },
     ]
 },
 {
     id: 'graphic-design',
     title: 'Graphic & Visual Design',
     description: 'Creating impactful visuals that elevate your brand identity.',
     icon: Settings, // Placeholder, consider 'Brush' or 'Wand' or similar from Lucide
     subServices: [
         { title: 'Social Media Posts', microServices: [] },
         { title: 'Print Designs', microServices: [{ title: 'Posters, Flyers, Cards'}] },
         { title: 'Logo Kits, Brand Icons', microServices: [] },
     ]
 },
 {
     id: 'app-dev',
     title: 'App Development',
     description: 'Building innovative mobile applications for Android and iOS.',
     icon: Smartphone,
     subServices: [
         { title: 'Android/iOS App with Flutter', microServices: [] },
         { title: 'Firebase & Admin Panel', microServices: [] },
         { title: 'Progressive Web Apps (PWAs)', microServices: [] },
     ]
 },
 {
     id: 'media-photo',
     title: 'Media & Photography',
     description: 'Capturing moments and products with professional photography and videography.',
     icon: Camera,
     subServices: [
         { title: 'Product Photography', microServices: [] },
         { title: 'Event Photo/Video', microServices: [] },
         { title: 'Live Stream Setup', microServices: [] },
     ]
 }
];
