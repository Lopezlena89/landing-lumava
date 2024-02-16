import type { Metadata } from "next";
import { Providers } from "@/components/providers/Providers";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";

export const metadata: Metadata = {
  title: "Lumava Agency",
  description: "Lumava Agency - Desarrollo de Apps",
  authors:[{name:'Luis Mariano Lopez Lena Valdivieso',url:'https://lumava.dev'}],
  abstract:'Page Lumava Agency',
  category:'Web services',
  keywords:['portfolio','web design','Nextjs','React'],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} >
      <body >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
