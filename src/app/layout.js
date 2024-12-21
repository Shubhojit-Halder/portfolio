import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio by Shubhojit Halder",
  description: "Portfolio describes carrer of Shubhojit Halder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Portfolio-Shubhojit Halder</title>
      {/* <link rel="icon" href="/sh.jpg" sizes="any" type="image/jpg"/> */}
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair:opsz,wght@5..1200,400;5..1200,500;5..1200,600;5..1200,700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
