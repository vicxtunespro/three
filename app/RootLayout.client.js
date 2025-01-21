// app/layout.client.js
"use client";

import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav";
import MobileNavBar from "@/components/mobileNav";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
          <NavBar />
          <MobileNavBar />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}