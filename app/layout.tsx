import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Femina Beauty Parlour - Exclusive Care for Ladies & Children',
  description: 'Professional beauty and grooming services for women and children. Offering haircuts, facials, makeup, nail art, and more in a relaxing environment.',
  keywords: 'beauty parlour, ladies salon, children hair care, makeup, facial, nail art, bridal makeup, mehendi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} font-poppins`} style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}