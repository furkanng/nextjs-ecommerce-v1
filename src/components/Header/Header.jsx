import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

import style from "./style.module.css";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu";

function Header() {
  return (
    <header>
      <div id="topNav" className="py-1">
        <div className={`flex justify-between items-center ${style.topNavbar}`}>
          <div className="flex items-center">
            <FiMail />
            <Link href="mailto:someone@example.com" className="ml-1">
              someone@example.com
            </Link>
          </div>

          <div>
            <div className="flex items-center">
              <Link href="#" className="ml-1">
                Sipariş Takibi
              </Link>
              <span className="ml-4">|</span>
              <Link href="#" className="ml-1">
                Sıkça Sorulan Sorular
              </Link>
              <span className="ml-4">|</span>
              <Link href="#" className="ml-1">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
