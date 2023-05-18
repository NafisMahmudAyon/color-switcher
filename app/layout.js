import Head from "next/head";
import "./globals.css";





import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Color Palette Generator",
  description: "Generate Color Palette For Your Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
      </Head>
      <body className="">
        {/* Navbar  */}
        <nav className="h-14 flex justify-center items-center text-emerald-500 font bold text-4xl"> Color Palett Generator </nav>
        {/* main */}
        {children}
        
      </body>
    </html>
  );
}
