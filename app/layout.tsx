import "./globals.css";
import { DM_Sans, Poppins } from "next/font/google";
import React, { useState } from "react";
import AppContextProvider from "./AppContextProvider";

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans"
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poppins"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${poppins.variable} `}>
      <body className={`font-sans bg-page-gradient h-screen text-white-600 font-normal`}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
