"use client"
import CloseIcon from "@mui/icons-material/Close";
import { Accordion, AccordionDetails, AccordionSummary, Drawer,  } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { styled } from '@mui/material/styles';
const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      boxShadow: 'none', 
    padding:0,
      '.MuiAccordionDetails-root': {
        padding:0,
      },
      '.MuiAccordionSummary-root': {
        padding:0,
        gap:0,
        
      }, 
    };
  });

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       width: "100%",
//       backgroundColor: "#eee",
//       padding: 20,
//     },
//     heading: {
//       fontSize: theme.typography.pxToRem(15),
//       fontWeight: theme.typography.fontWeightRegular
//     },
//     rectangle: {
//       width: "80%",
//       height: 200,
//       backgroundColor: "blue",
//       marginTop:20
//     }
//   }));
  

import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";


export const MenuData = () => {


    const currentRoute = usePathname();
    const [open, setOpen] = useState(false);
    const [showChild1, setShowChild1] = useState(false);
    const [showChild2, setShowChild2] = useState(false);
    const [rotateIcon1, setRotateIcon1] = useState(false);
    const [rotateIcon2, setRotateIcon2] = useState(false);
    const toggleChild1 = () => {
        setShowChild1(!showChild1);
        setRotateIcon1(!rotateIcon1);
      };
    const toggleChild2 = () => {
        setShowChild2(!showChild2);
        setRotateIcon2(!rotateIcon2);
      };

  return (
    <div className=''>

        
                    <ul className='  items-center space-y-1'>
                        <li className=' text-white'>
                            <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium"}>
                                Home
                            </Link>
                        </li>
                        
                       
                          <li>


                          <CustomAccordion >
        <AccordionSummary
          expandIcon={<BsChevronDown  className="p-0"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <p className="p-0 text-[#FF8601] font-medium">Sessions</p>
        </AccordionSummary>
        <AccordionDetails>
        <div className=' pl-10 py-2 text-[#FF8601] shadow-md  space-y-5 '>
        <p>Men</p>
          <p>Women</p>
          <p>Kid</p>
          </div>
        </AccordionDetails>
      </CustomAccordion>
                          </li>

                       
                      <div className="space-y-5">
                        
                      <li className='tex-white  '>
                        <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium"}>
                              Story
                            </Link>
                        </li>
                        <li className='tex-white '>
                        <Link href='/' className={currentRoute === '/' ? "font-medium text-[#FF8601]" : "font-medium"}>
                              Artist
                            </Link>
                        </li>
                      </div>
                        
                    
                        
                        <li className=''>
                        
                        <CustomAccordion >
        <AccordionSummary
          expandIcon={<BsChevronDown  className="p-0"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <p className="p-0 text-[#FF8601] font-medium">More</p>
        </AccordionSummary>
        <AccordionDetails>
        <div className=' py-2 text-[#FF8601] shadow-md pl-10 space-y-5 '>
          <p>Men</p>
          <p>Women</p>
          <p>Kid</p>
          
          </div>
        </AccordionDetails>
      </CustomAccordion>
                        
                        </li>
       
                    </ul>
                    
                </div>
  );
};

/** main component */
const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const date = new Date().getFullYear();

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(open)}>
        <div className="w-72 p-5">
          <div className="flex justify-between items-center pb-2 border-b">
         

            <CloseIcon
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul>
            
            <div className="mt-4">
              <MenuData />
            </div>
          </ul>
          <div>
            <p className="text-[#14511D] text-left pb-[22px] absolute bottom-0">
              © {date}, All Rights Reserved by Tanver
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;