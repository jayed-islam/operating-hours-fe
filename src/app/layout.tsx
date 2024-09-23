import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PanelLayout from "@/layouts/panel";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Operating Hours",
  description: "Office operating hours system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f7f9]`}
      >
        <PanelLayout>{children}</PanelLayout>;
      </body>
    </html>
  );
}
