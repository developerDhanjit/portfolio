import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlyonuiScript from "@/components/FlyonuiScript";

const inter = Inter({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Dhanjit Nath Portfolio",
  description:
    "Portfolio of Dhanjit Nath , Experiences , Products and Contact ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={` ${inter.className} antialiased dark`}>
          <Navbar />
          {children}
          <Footer />
          <FlyonuiScript />
        </body>
      </html>
    </>
  );
}
