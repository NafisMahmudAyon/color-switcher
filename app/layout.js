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
        <nav className="h-14 flex justify-between items-center  px-20"> 
          <div className="text-4xl text-emerald-500 font-bold hover:underline">Color Palette Generator</div>
          <div className="flex gap-3">
            <div className="bg-emerald-500 px-5 py-2 rounded-lg hover:bg-emerald-800 hover:text-white font-bold"> <a href="https://github.com/NafisMahmudAyon">github</a> </div>
            <div className="bg-emerald-500 px-5 py-2 rounded-lg hover:bg-emerald-800 hover:text-white font-bold"> <a href="https://nafisbd.com"> Visit My Website</a></div>
          </div>
        </nav>
        {/* main */}
        {children}
        
      </body>
    </html>
  );
}
