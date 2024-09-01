import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokeWeb",
  description: "PokeWeb is your ultimate Pokémon encyclopedia! Explore detailed information on every Pokémon, including stats, evolutions, abilities, and more. Perfect for trainers and fans alike, PokeWeb is your go-to resource for a lightweight Pokémon search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
