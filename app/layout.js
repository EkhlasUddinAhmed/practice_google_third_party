import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home",
  description: "Law Anatomy Home Page...!!",
  verification: {
    google: "KL_q4s6Wiiy47LxHLrIotAra63IZLYSwORslDQsUS_s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-TXM3GT3S" />
      <body className="min-h-full flex flex-col w-[90%] mx-auto">
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
