import Header from "@/components/Header";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Eticaret Sitesi",
  description: "Deneme Eticaret Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Header />
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
