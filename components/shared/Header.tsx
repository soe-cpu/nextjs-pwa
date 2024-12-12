import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-8 bg-blue-500 text-white flex justify-between">
      <h1>Header</h1>
      <div className="flex space-x-6">
        <Link href={"/"} className="cursor-pointer">
          Home
        </Link>
        <Link href={"/"} className="cursor-pointer">
          About
        </Link>
        <Link href={"/contact"} className="cursor-pointer">
          Contact
        </Link>
      </div>
      <div>Menu</div>
    </div>
  );
};

export default Header;
