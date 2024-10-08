import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HobbyCue",
  description: "hobbycue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional"
        /> */}
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
