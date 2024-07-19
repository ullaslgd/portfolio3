import type { Metadata } from "next";

import "./globals.css";




export const metadata: Metadata = {
  title: "Ullas Arwan",
  description: "Personal website of Ullas Arwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
