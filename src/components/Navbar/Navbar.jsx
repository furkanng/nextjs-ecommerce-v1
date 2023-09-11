import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillPersonFill, BsFillBasketFill } from "react-icons/bs";
import MenuItem from "./MenuItem";

function Navbar() {
  return (
    <div
      className="flex flex-row p-4 w-full justify-between"
      style={{ backgroundColor: "white" }}
    >
      <div className="flex flex-row">
        <Image src={"/logo.png"} height={196} width={196} alt="logo" />
      </div>
      <div
        className="w-1/2 h-1/2 flex flex-row align-bottom  ml-2 mt-4"
        style={{
          borderStyle: "solid",
          borderWidth: "4px",
        }}
      >
        <input className="w-full p-1" placeholder="Marka, kategori, ürün ara" />
      </div>

      <div className="w-1/4 flex flex-row justify-between">
        <MenuItem icon={<FaHeart />} title={"Favorilerim"} />
        <MenuItem icon={<BsFillPersonFill />} title={"Hesabım"} />
        <MenuItem icon={<BsFillBasketFill />} title={"Sepetim"} />
      </div>
    </div>
  );
}

export default Navbar;
