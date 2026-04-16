import type { Metadata } from "next";
import { Playfair_Display, Inter, Archivo_Narrow } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo_Narrow({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mekdis | Luxury Social Media Marketing",
  description: "Elevating brands through strategic high-end social media marketing and cinematic content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest selection:bg-mustard selection:text-forest">
        <div className="noise-overlay" />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

