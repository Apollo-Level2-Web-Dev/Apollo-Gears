import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apollo Gears",
  description: "Welcome to Apollo Gears!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Navbar</h1>

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
