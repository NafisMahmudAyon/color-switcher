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
          <div className="text-4xl text-emerald-500 font-bold hover:underline">
            Color Palette Generator
          </div>
          <div className="flex gap-3">
            <div className="bg-emerald-500 px-5 py-2 rounded-lg hover:bg-emerald-800 hover:text-white font-bold flex items-center gap-1">
              <a href="https://github.com/NafisMahmudAyon">github
              </a>
              <img src="./github.png" className="w-8 h-8" />
            </div>
            <div className="bg-emerald-500 px-5 py-2 rounded-lg hover:bg-emerald-800 hover:text-white font-bold">
              <a href="https://nafisbd.com"> Visit My Website</a>
            </div>
          </div>
        </nav>
        {/* main */}
        {children}
        <footer className="absolute bottom-[30px] left-[50%] width-[80%] text-center -translate-x-[50%] text-amber-500">
          Coded by{" "}
          <a
            href="https://github.com/NafisMahmudAyon"
            className="no-underline text-white hover:underline"
          >
            Nafis Mahmud Ayon.
          </a>{" "}
          ©2023{" "}
          <a
            href="https://nafisbd.com"
            className="no-underline text-white hover:underline"
          >
            NafisBD.
          </a>{" "}
          All right reserved.
        </footer>
      </body>
    </html>
  );
}
