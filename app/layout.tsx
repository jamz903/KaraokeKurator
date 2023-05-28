import { DM_Sans, Poppins } from "next/font/google";
import styles from "./global.css";

const dmsans = DM_Sans({
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  subsets: ["latin"]
});

const poppins = Poppins({
  style: ["normal", "italic"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmsans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
