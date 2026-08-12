import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Melato – The Dessert Bar | HSR Layout, Bangalore",
  description:
    "Melato – Bangalore's most viral dessert bar. Mini fruit-shaped ice creams, scoopable cookies, brioche, popsicles & more. Visit us at HSR Layout.",
  openGraph: {
    title: "Melato – The Dessert Bar",
    description: "Bangalore's favourite guilty pleasure",
    siteName: "Melato",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable} antialiased`}>
      <body className="bg-[#f7f1ea] text-[#3d2259] font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
