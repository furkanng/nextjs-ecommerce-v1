import "@/styles/reset.css";
import "@/styles/globals.css";
import { Mulish } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
      <Footer />
    </html>
  );
}
