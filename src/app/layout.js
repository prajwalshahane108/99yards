import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // ✅ Ensure global styles are applied
import { Metadata } from "next"; // ✅ Use Next.js metadata for SEO

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Define metadata properly
export const metadata = {
  title: "99yardsacademy.com",
  description: "Stay updated with the latest SaaS trends, insights, and analysis.",
  icons: {
    icon: "/favicon.ico", // ✅ Ensures proper favicon handling
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}  
      </body>
    </html>
  );
}
