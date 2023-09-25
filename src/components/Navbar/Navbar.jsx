import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input, Divider } from "antd";
import { MdOutlineFavorite, MdAccountCircle } from "react-icons/md";
import { BiSolidBasket } from "react-icons/bi";
import style from "./style.module.css";
import NavMenu from "./NavMenu/NavMenu";

function Navbar() {
  return (
    <div>
      <div
        style={{ backgroundColor: "white" }}
        className={`container mx-auto ${style.container}`}
      >
        <ul className={`flex flex-col lg:flex-row pt-4 ${style.navMenu}`}>
          <li className="flex-none">
            <div
              id="logo"
              style={{ display: "flex", justifyContent: "center" }}
              className="max-lg:pb-3"
            >
              <Image src={"/logo.png"} height={200} width={200} alt="logo" />
            </div>
          </li>
          <li className="flex-1 mt-3 grid justify-items-center max-lg:mt-0 max-lg:ml-3">
            <Input
              placeholder="Ürün, Marka Ara"
              style={{
                width: "80%",
                height: 40,
                borderRadius: 10,
                fontWeight: "normal",
              }}
            />
          </li>
          <li className="text-center flex-none mt-3 max-lg:mt-3 max-lg:ml-3">
            <div className="grid grid-cols-3 gap-2 lg:gap-4">
              <div className="grid justify-items-center">
                <Link href="#">
                  <MdOutlineFavorite size={20} className="ml-7 max-lg:m-0" />
                  <p className="hidden lg:block">Favorilerim</p>
                </Link>
              </div>
              <div className="grid justify-items-center">
                <Link href="#">
                  <MdAccountCircle size={20} className="ml-6 max-lg:m-0" />
                  <p className="hidden lg:block">Hesabım</p>
                </Link>
              </div>
              <div className="grid justify-items-center">
                <Link href="#">
                  <BiSolidBasket size={20} className="ml-5 max-lg:m-0" />
                  <p className="hidden lg:block">Sepetim</p>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <Divider className="mt-2 mb-0" />
        <NavMenu />
      </div>
    </div>
  );
}

export default Navbar;
