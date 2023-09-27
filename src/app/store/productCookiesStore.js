import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { create } from "zustand";

export const selectedCountStore = create((set, get) => ({
  items: [],
  uploadedProduct:[],
  singleProduct: null,

  setSingleProduct: (product) => {
    set({
      singleProduct: product,
    });
  },

  addItem: (item) => {
    let currentItems = get().items;

    const duplicateItem = currentItems.find(
      (existingItem) => existingItem?.id === item?.id
    );
    if (duplicateItem) {
      alert("Item already exists in the list.");
      return;
    }

    let totalItems = [...currentItems, item];
    set({
      items: totalItems,
    });

    setCookie("addToCartProducts", JSON.stringify(totalItems));
  },
  uploaded: (item) => {
    let currentItems = get(). uploadedProduct;

    const duplicateItem = currentItems.find(
      (existingItem) => existingItem?.id === item?.id
    );
    if (duplicateItem) {
      alert("Item already added.");
      return;
    }

    let totalItems = [...currentItems, item];
    set({
      uploadedProduct: totalItems,
    });

    setCookie("uploadedProducts", JSON.stringify( uploadedProduct));
  },



  removeItem: (id) => {
    console.log(id);
    let remainingProducts = [...get().items].filter((prod) => prod.id !== id);
    deleteCookie("addToCartProducts");
    setCookie("addToCartProducts", JSON.stringify(remainingProducts));
    return set({
      items: remainingProducts,
    });
  },

  increment: (id) => {
    let newData = [];
    get().items.map((i) => {
      if (i?.id === id) {
        i.quantity += 1;
      }
      newData.push(i);
    });
    set({
      items: newData,
    });
    setCookie("addToCartProducts", JSON.stringify(newData));
  },

  decrement: (id) => {
    let newData = [];
    get().items.map((i) => {
      if (i?.id === id) {
        // Prevent the quantity from going below 0
        i.quantity = Math.max(1, i.quantity - 1);
      }
      newData.push(i);
    });
    set({
      items: newData,
    });
    setCookie("addToCartProducts", JSON.stringify(newData));
  },


  setItemFromCookie: () => {
    let _ = [];
   

    const CookieData = getCookie("addToCartProducts"); 
    if (CookieData) {
      _ = JSON.parse(CookieData);
    }

   

    return set({
      items: _,
    
    });
  },

  setDataFromCookie: () => {
  
    let postedData= [];
 
   
     const postedProduct = getCookie("uploadedProducts"); 
     if (postedProduct) {
      postedData= JSON.parse(postedProduct);
     }
 
     return set({
      
       uploadedProduct:postedData,
     });
   },
  
}));
