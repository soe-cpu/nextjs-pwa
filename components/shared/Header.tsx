"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="p-6 bg-blue-500 text-white flex justify-between">
      <h1>Logo</h1>
      <div className="hidden lg:flex space-x-6">
        <Link href={"/"} className="cursor-pointer">
          Home
        </Link>
        <Link href={"/contact"} className="cursor-pointer">
          Contact
        </Link>
        <Link href={"/"} className="cursor-pointer">
          Profile
        </Link>
      </div>
      <div className="block lg:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
