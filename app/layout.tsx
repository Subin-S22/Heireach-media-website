import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/ui/navbar";
import Footer from "@/lib/ui/footer";
import emailjs from "@emailjs/browser";

//Initialize emailjs with the publickey
emailjs.init({ publicKey: process.env.NEXT_PUBLIC_USER_ID });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const COMPANY_NAME = "Heireach Media";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: "Heireach Media is a digital marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-xl mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
