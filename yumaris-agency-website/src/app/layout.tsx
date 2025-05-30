import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import MainLayout from '@/components/layout/MainLayout'; // Adjust path if necessary

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', // Define CSS variable
});

export const metadata: Metadata = {
  title: 'Yumaris Agency',
  description: 'Digital Services for Education, Branding, Design, Automation & Marketing.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}> {/* poppins variable from font setup */}
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
