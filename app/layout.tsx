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
  metadataBase: new URL('https://jetset-travels.vercel.app'), // Use your actual URL once deployed


  title: "JetSet Holidays",
  description: "Experience the best of Nepal with JetSet Holidays. We offer premium travel packages, reliable flight ticketing, and expert local transportation services for your dream vacation.",
  keywords: ["Nepal Travel", "Flight Booking Nepal", "Luxury Tours Nepal", "Vehicle Rental Kathmandu", "JetSet Holidays", "Travel Agency Nepal"],
  icons: {
    icon: "/Jetset_logo.png",
    shortcut: "/Jetset_logo.png",
    apple: "/Jetset_logo.png",
  },
  openGraph: {
    title: "JetSet Holidays",
    description: "Premium Travel & Flight Partner in Nepal",
    url: "https://jetsetholiday.com",
    siteName: "JetSet Holidays",
    images: [
      {
        url: "/Jetset_logo.png",
        width: 800,
        height: 600,
        alt: "JetSet Holidays Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
