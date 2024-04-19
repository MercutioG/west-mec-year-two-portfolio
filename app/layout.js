import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mercutio Geant",
  description: "A Portfolio of almost everything that I have worked on in my entire coding career. I am very proud of how far I have come since the beginning of my experience with any form of web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
