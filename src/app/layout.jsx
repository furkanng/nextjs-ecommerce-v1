import "@/styles/reset.css";
import "@/styles/globals.css";
import { Source_Code_Pro } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const sourceodePro = Source_Code_Pro({
  weight: "300",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Eticaret Sitesi",
  description: "Deneme Eticaret Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={sourceodePro.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </html>
  );
}
