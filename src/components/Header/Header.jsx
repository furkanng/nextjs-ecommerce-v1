import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";

import style from "./style.module.css";

function Header() {
  return (
    <header>
      <div className={style.topNavbar}>
        <div id="topNav" className="py-2">
          <div className={`flex justify-between items-center`}>
            <div className="flex items-center">
              <FiMail />
              <Link href="mailto:someone@example.com" className="ml-1">
                someone@example.com
              </Link>
            </div>

            <div>
              <div className="flex items-center">
                <Link href="#" className="mr-5">
                  Sipariş Takibi
                </Link>

                <Link href="#" className="mr-5">
                  Sıkça Sorulan Sorular
                </Link>

                <Link href="#">İletişim</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
