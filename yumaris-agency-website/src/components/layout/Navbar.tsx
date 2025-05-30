import Link from 'next/link';
import { Home } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { href: '/', label: 'Home', icon: <Home size={18} className="mr-1 inline-block" /> },
    { href: '/services', label: 'Services' },
    { href: '/courses', label: 'Courses' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-neutral-900 text-neutral-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link href="/" className="text-2xl font-bold font-poppins hover:text-primary">
          Yumaris Agency
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-poppins hover:text-primary transition-colors duration-300 flex items-center">
                {link.icon}{link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
