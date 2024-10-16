import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";

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
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" />
      </head>
      <body className={inter.className + ' min-h-screen'}>
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
