import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "@/ui/globals.css";
import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

const leagueSpartan = League_Spartan({
    weight: ["400", "700"],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: "SMCS Alumni Collective",
//   description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
