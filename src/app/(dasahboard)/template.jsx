
"use client"
import { useEffect, useState } from 'react';
import DashBoardAsideBar from '../components/dashboard/DashBoardAsideBar';
import DashBoardNavbar from '../components/dashboard/DashBoardNavbar';
import Providers from '../components/providers/Providers';

const Template = ({ children }) => {
 
  return (
    <>
      <div >
        
    
     
          <DashBoardAsideBar  />
          <DashBoardNavbar/>


          <div className="ml-[400px] pt-[150px]">
            <h1 className='text-center text-4xl font-bold '> Welcome to DashBoard</h1>
          {children}
        </div>
        
        
      </div>
    </>
  );
};

export default Template;