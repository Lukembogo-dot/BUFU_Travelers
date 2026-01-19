import type { Metadata } from 'next';
import "./globals.css";
// 1. Import your Navbar here
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Bufu Travelers",
  description: "Professional travel and transport services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {/* 2. Place the Navbar above the children */}
        <Navbar />
        
        {/* 3. The 'main' tag ensures content fills the space between Nav and Footer */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. Place the Footer below the children */}
        <Footer />
      </body>
    </html>
  );
}