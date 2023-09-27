"use client"
import React, { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsArrowLeft,
  BsBell,
  BsSun,
  BsArrowsFullscreen,
} from "react-icons/bs";
import { AiOutlineSearch, AiOutlineDoubleLeft } from "react-icons/ai";

const DashBoardNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling ? "bg-red" : "bg-gray-100"
      } shadow-md bg-transparent pt-12 px-[50px] fixed z-10 w-full pl-[450px] transition-all duration-300`}
    >
      <div>
        <div className="border-b-2 flex items-center justify-between pb-8">
          <div className="flex items-center gap-[30px]">
            <div className="flex gap-2">
              <div className="px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 border">
                <BsArrowLeft />
              </div>
              <div className="px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-200 border">
                <BsArrowRight />
              </div>
            </div>
            <h1 className="text-[32px] font-semibold">Order management</h1>
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-4 border border-gray-300 rounded-[30px] focus:outline-none focus:border-black"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                <AiOutlineSearch className="text-xl" />
              </button>
            </div>
            <BsArrowsFullscreen className="text-xl" />
            <BsBell className="bg-white text-xl" />
            <BsSun className="text-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashBoardNavbar;
