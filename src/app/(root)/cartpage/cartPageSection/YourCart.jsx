"use client";

import { selectedCountStore } from "@/app/store/productCookiesStore";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { shallow } from "zustand/shallow";

const YourCart = () => {

    const {
        handleChange,
        handleBlur,
        values,
        handleSubmit,
        resetForm,
       
      } = useFormik({
        initialValues: {
          cuppon:" ",
        },
      
        onSubmit: async (data) => {
          try {
            console.log(data);
            resetForm()
            
          
          } catch (error) {}
        },
      });

  const [
    items,
    increment,
    decrement,
    removeItem,
    setItemFromCookie,
    setSingleProduct,
  ] = selectedCountStore(
    (state) => [
      state.items,
      state.increment,
      state.decrement,
      state.removeItem,
      state.setItemFromCookie,
      state.setSingleProduct,
    ],
    shallow
  );

  useEffect(() => {
    setItemFromCookie();
  }, [setItemFromCookie]);

  console.log("items form cookies",items)
  const subtotal = items.reduce(
    (total, item) =>
      total +
      (item?.disCountprice
        ? item.disCountprice * item.quantity
        : item.price * item.quantity),
    0
  );

  const grandTotal = subtotal;

  const clearAllItems = () => {
    items.forEach((item) => {
      removeItem(item.id);
    });
  };
  //  console.log(items)
  return (
    <section className="container mx-auto lg:grid grid-cols-3 gap-7 lg:mt-20 mt-10 px-2 xl:px-0">
      {items.length === 0 ? (
        <div className="col-span-3 text-center">
          <p className="text-2xl mb-4 text-red-500">No products in the cart.</p>
          <Link href="/">
            <button className="px-4 py-3 bg-[#4C8488] rounded-[30px] text-white font-medium text-lg hover:text-[#4c8488] hover:bg-white border hover:border-[#4c8488]">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="col-span-2">
            <div className="text-center lg:text-left">
              <h1 className="text-[28px] font-semibold">Your Cart Item</h1>
              <div className="  lg:grid xl:grid 2xl:grid grid-cols-2 items-center hidden lg:blcok   border-b-2 pb-4 mt-4">
                <div>
                  <p className="text-lg lg:text-[24px] hidden lg:block">
                    {" "}
                    Item Name
                  </p>
                </div>
                <div className=" text-lg mr-10   ">
                  <div className="flex lg:gap-[60px] gap-8 lg:text-[24px] lg:mr-10 items-center lg:justify-start justify-center">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 items-center  lg:hidden  border-b-2 pb-4 mt-4">
                <div className="block lg:hiddden "></div>

                <div className=" text-lg mr-10   ">
                  <div className="flex lg:gap-[60px] gap-8 lg:text-[24px] lg:mr-10 items-center lg:justify-start justify-center">
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                  </div>
                </div>
              </div>
            </div>
            {items?.map((item, index) => (
              <div
                key={index}
                className="lg:grid grid-cols-2  border-b pb-4 mt-[30px]"
              >
                <div className="lg:flex items-center gap-3">
                  <div>
                    <div className="flex justify-between items-center ">
                      <Image src={item?.image} alt="tan" width={84} height={87} />
                      <div className="block lg:hidden">
                        <div className="flex  items-center lg:gap-[60px] gap-4  justify-center lg:justify-start">
                          <p>
                            $
                            {item?.disCountprice
                              ? item.disCountprice
                              : item.price}
                          </p>
                          <div>
                            <div
                              className="flex gap-3 items-center border-[#4C8488] 
                   border text-lg font-medium text-[#4C8488]  px-3 py-1 justify-between rounded-[30px] "
                            >
                              <div>
                                <button
                                  onClick={() => decrement(item?.inventory?.id)}
                                  className="text-xl font-medium"
                                >
                                  {" "}
                                  -{" "}
                                </button>
                              </div>
                              <p className="text-lg font-medium">
                                {item.quantity}
                              </p>
                              <div>
                                <button
                                  onClick={() => increment(item?.id)}
                                  className="text-lg font-medium"
                                >
                                  {" "}
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <p>
                            $
                            {item?.disCountprice
                              ? item.disCountprice * item.quantity
                              : item.price * item.quantity}
                          </p>
                          <div className="border-[#4C8488] border flex items-center justify-center rounded-full h-5 w-5 p-5">
                            <div className="">
                              <RxCross2
                                onClick={() => removeItem(item.id)}
                                className="text-xl text-[#4C8488] cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 lg:mt-0">
                    {item.name}{" "}
                    <span className="text-sm text-gray-600">
                      (color: {item?.inventory?.color__color_name},size:{" "}
                      {item?.inventory?.size})
                    </span>
                  </p>
                </div>
                <div className="hidden lg:block  ">
                  <div className="flex  items-center lg:gap-[60px] gap-4  justify-center lg:justify-start">
                    <p>
                      ${item?.disCountprice ? item.disCountprice : item.price}
                    </p>
                    <div>
                      <div
                        className="flex  gap-1 items-center border-[#4C8488] 
               border text-lg font-medium text-[#4C8488]   px-5 py-2 justify-between rounded-[30px] "
                      >
                        <div>
                          <button
                            onClick={() => decrement(item?.id)}
                            className="text-xl font-medium"
                          >
                            {" "}
                            -{" "}
                          </button>
                        </div>
                        <p className="text-lg font-medium">{item.quantity}</p>
                        <div>
                          <button
                            onClick={() => increment(item?.id)}
                            className="text-lg font-medium"
                          >
                            {" "}
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <p>
                      $
                      {item?.disCountprice
                        ? item.disCountprice * item.quantity
                        : item.price * item.quantity}
                    </p>
                    <div className="">
                      <div className="border-[#4C8488] border flex items-center justify-center rounded-full h-5 w-5 p-5 ">
                        <div className="">
                          <RxCross2
                            onClick={() => removeItem(item.id)}
                            className="text-xl text-[#4C8488] cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center lg:mt-[30px] mt-4 ">
              <div>
                <Link href="/">
                  <button className="lg:px-7 px-4 py-2 bg-[#4C8488] rounded-[30px] text-white font-medium text-lg hover:text-[#4c8488] hover:bg-white border hover:border-[#4c8488]">
                    Continue Shopping
                  </button>
                </Link>
              </div>
              <div>
                <button
                  onClick={clearAllItems}
                  className="lg:px-7 px-4  py-2 text-[#4C8488] rounded-[30px] border-[#4C8488] border font-medium text-lg hover:text-white hover:bg-[#4c8488]"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="my-2 ml-2 lg:pl-7 pt-2">
              <form
              onSubmit={handleSubmit}
              >
                <TextField
                  label="Enter Your Email Address"
                  value={values.cuppon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="cuppon"
                />
                <button type="submit" className="ml-2 px-9 py-2 border border-gray-300 rounded-3xl bg-[#4C8488] text-white">
                  Sent
                </button>
              </form>
            </div>
            <div className="rounded-[15px] lg:pl-7 ">
              <div className="mt-[30px] border bg-zinc-100 rounded-[15px]">
                <h2 className="text-2xl p-6">Cart Total</h2>
                <div className="flex justify-between border-b p-6">
                  <div>
                    <p>{grandTotal}</p>
                  </div>
                  <div>
                    <p>${grandTotal}</p>
                  </div>
                </div>
                <div className="flex justify-between p-6">
                  <p className="text-lg font-medium">Grand Total</p>
                  <p>${grandTotal}</p>
                </div>
                <div className="px-6 pb-6">
                  <Link href="/components/checkOutPage">
                    <button
                      onClick={() => setSingleProduct(null)}
                      className="text-center text-white text-lg font-medium rounded-[30px] bg-[#4C8488] py-3 w-full hover:text-[#4c8488] hover:bg-white border hover:border-[#4c8488]"
                    >
                      Proceed To Payment
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default YourCart;
