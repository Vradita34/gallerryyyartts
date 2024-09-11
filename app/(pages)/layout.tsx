import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import SidebarForNavbarAsli from "../(partials)/SidebarForNavbarAsli";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GalleryArts",
  description: "GalleryArts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <SidebarForNavbarAsli />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
