"use client"
import { useState } from "react";

function DeleteItem() {
   
 
  
    const deleteItem = async (itemId) => {
      try {
       
        await fetch(`https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website?id=${itemId}`, {
          method: 'DELETE',
        });
  
        // Optionally, you can perform some post-delete logic here
  
      } catch (err) {
        console.log(err)
      } finally {
        
      }
    };
  
    return {
      deleteItem,
     
    };
  }
  
  export default DeleteItem;
  