// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image"; // <--- Add this line at the top

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "Photography and Videography Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-950 text-white antialiased`}>
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Find this section inside <nav> */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Jagtap Studio Logo" 
                width={180}    // Adjust width to fit your specific logo shape
                height={60}    // Adjust height
                className="h-12 w-auto object-contain" // "h-12" keeps it from being too huge
                priority
              />
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-amber-500 transition">Work</Link>
              <Link href="/services" className="hover:text-amber-500 transition">Services</Link>
              <Link href="/book" className="px-5 py-2 bg-amber-600 hover:bg-amber-700 rounded-full transition text-white">
                Book Now
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="py-8 text-center text-neutral-500 text-sm border-t border-neutral-900 mt-20">
          <p>© {new Date().getFullYear()} Studio Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}