import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JetSet",
  description: "Your Travelling Partner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-white ${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
