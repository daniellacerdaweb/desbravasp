import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desbrava São Paulo",
  description:
    "O melhor Guia de SP na palma da sua mão, Gastronomia - Passeios - Viagens ",
};
export const revalidate = 10; // revalidate at most every hour

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-50`}>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
