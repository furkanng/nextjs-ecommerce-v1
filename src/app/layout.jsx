import "@/styles/reset.css";
import "@/styles/globals.css";
import { Sora } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const sourceodePro = Sora({
  weight: "100",
  style: "normal",
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Eticaret Sitesi",
  description: "Deneme Eticaret Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={sourceodePro.className}>
      <body>
        <div className="container mx-auto">
          <Header />
        </div>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
