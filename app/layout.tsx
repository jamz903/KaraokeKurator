import "./globals.css";
import { DM_Sans, Poppins } from "next/font/google";

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

export const metadata = {
  title: "KaraMonke",
  description: "Your Ultimate Song Selector"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${poppins.variable} bg-page-gradient h-screen`}>
        {children}
      </body>
    </html>
  );
}
