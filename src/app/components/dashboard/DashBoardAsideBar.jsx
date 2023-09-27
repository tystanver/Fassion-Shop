"use client"
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { BsCart3, BsChevronDown } from "react-icons/bs";
import { MdOutlineInventory2, MdOutlineSettings } from "react-icons/md";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { AiOutlineDoubleLeft } from "react-icons/ai";

const DashBoardAsideBar = () => {
  return (
    <div className="bg-[#4C8488] pl-10 pr-5 fixed  left-0 w-1/5  h-[100vh] border z-10  ">
      <div className="  pt-[50px] pb-8 border-b-2 border-[#4C8488] flex  items-center justify-between ">
        <div className=" ">
          {/* <Image
            className=" "
            src="/logo.png"
            alt="logo image"
            width={110}
            height={43}
          /> */}
        <Link href="/homePage">
        <p className="font-bold text-4xl ">Logo</p>
        </Link>
        </div>
        <div className="border-2 px-2 py-1 flex items-center rounded mr-[-35px]">
          <AiOutlineDoubleLeft />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-10">
        <RxDashboard className="text-3xl" />
        <h2 className="text-[24px] font-semibold">Dashboard</h2>
      </div>

      <Accordion
        className="mt-10"
        sx={{
          boxShadow: "none",
          backgroundColor: "#EDF3F3",
          border: "ActiveBorder",
          margin: "0",
        }}
      >
        <AccordionSummary expandIcon={<BsChevronDown />}>
          <div className="flex items-center gap-3">
            <BsCart3 className="text-lg" />
            <h2 className="text-lg font-semibold">Order Management</h2>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="font-medium space-y-5">
            <li>All Order</li>

            <li>Order Details</li>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mt-10"
        sx={{
          boxShadow: "none",
          backgroundColor: "#EDF3F3",
          border: "ActiveBorder",
        }}
      >
        <AccordionSummary expandIcon={<BsChevronDown />}>
          <div className="flex gap-3 items-center font-medium ">
            <MdOutlineInventory2 className="text-lg  items-center " /> Product
            Management
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="font-medium space-y-5">
          <Link href="/uploadproduct">
          <li onClick={()=>{console.log("clicked")}} className="cursor-pointer">Upload Product</li></Link>


          <Link href="/deleteproduct">
            <li className="cursor-pointer mt-4"> DeleteProduct/Update </li></Link>
          </div>
        </AccordionDetails>
      </Accordion>

      <div className="flex items-center gap-[30px] mt-10">
        <MdOutlineSettings className="text-3xl" />
        <h2 className="font-semibold text-[24px]  ">Settings</h2>
      </div>
    </div>
  );
};

export default DashBoardAsideBar