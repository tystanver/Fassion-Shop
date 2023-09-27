"use client";
import { Button, Dialog } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";

const Customer = () => {
  const [open, setOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleOpen = (item) => {
    setSelectedComment(item);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedComment(null);
    setOpen(false);
  };
  const [items, setItems] = useState(null);
  console.log(items);

  const [data, setData] = useState([
   
    {
      id: 2,
      name: "Mohin Joyes",
      title: "Co-Founder",
      comment:
        "Thanks for the garden fresh organic mangoes dear Krishijaat!! Mangoes were very delicious and fresh. My experience with Krishijaat is very much satisfying. All the very best wishes for ur prosperity !!!",

      img: "/custumerImage.jpg",
    },
    {
      id: 3,
      name: "Farzeen Ahmed Bashori",
      title: "Co-Founder",
      comment:
        "Amazing service and great quality. The mangoes were fresh and tasted natural. They ensure real-good-quality foods.",

      img: "/custumerImage.jpg",
    },
    {
      id: 4,
      name: "Khandaker Nusrat Jahan Tofa",
      title: "Co-Founder",
      comment:
        "Wonderful and cordial service! Delivery was very quick. You can absolutely feel their premiumness. They have their very own produced fresh products. On the first order i received two bottles of organic 'kholisha honey' and a carton full of handpicked fresh 'himsagor mangoes' without any toxic presevetives. Both tasted yumm!! Me and my two little babies are already fan of their healthy sweetness.",

      img: "/custumerImage.jpg",
    },
    {
      id: 5,
      name: "Shakib Tonmoy",
      title: "Co-Founder",
      comment:
        "Really good quality product! must give it a try if you're a mango lover. also the purchasing experience was good. Thank You so much 'krishijaat' go ahead ",

      img: "/custumerImage.jpg",
    },
    {
      id: 6,
      name: "Tanvir Khan",
      title: "Co-Founder",
      comment:
        "ঘেরের চিংড়ি সত্যিই অনেক ভালো মানের এবং মজাদার। আর ওনাদের হোম ডেলিভারি সিস্টেম অনেক ভাল। (৯/১০) ধন্যবাদ কৃষিজাতকে।",

      img: "/custumerImage.jpg",
    },
  ]);

  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length <= maxLength) {
      return text;
    }
    const truncatedText = words.slice(0, maxLength).join(" ");
    return `${truncatedText}`;
  };

  return (
    <div className=" mt-32 container mx-auto dark:bg-green-950 text-small ">

      <div>
      <h1 className=" text-center text-stone-900 font-semibold dark:text-white text-lg  lg:text-5xl ">Our Customers Love Us</h1>
      <p className="mt-7 text-center dark:text-white ">Discover why our organic goodies have our customers singing <br /> praises. Their stories speak for themselves</p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{}}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="mt-[100px] ">
            <div className=" relative bg-[#4C8488] rounded-2xl px-0 h-[300px] ml-0">
              <div
                className="ml-0 absolute h-[144px] w-[144px] mt-[-90px] rounded-full 
               flex items-center justify-center p-4 bg-[#8AC140] "
              >
                {/* <div className='h-20 w-20 bg-red-500 rounded-full'> */}
                <Image
                  src="/men.jpg"
                  alt="tan"
                  width={100}
                  height={100}
                  className="w-full h-full rounded-[100%]"
                />
                {/* </div> */}
              </div>
              <div className=" pt-4 absolute pl-[270px] ">
              <Image
                  src="/cotation.png"
                  alt="tan"
                  width={120}
                  height={100}
                  className=""
                />
              </div>
              <div className="px-7">
                <div className="pt-20 text-white">
                  {truncateText(item.comment, 15)}{" "}
                  {item.comment.split(" ").length > 15 && (
                    <button
                      className="text-amber-500"
                      onClick={() => handleOpen(item)}
                    >
                      ... See more
                    </button>
                  )}
                </div>
                <div>
                  <Dialog
                  fullWidth
                    maxWidth="sm"
                    open={open}
                    onClose={handleClose}
                   
                    PaperProps={{
                      style: { borderRadius: 16 },
                    }}
                  >
                    <section className="">
                      <button
                        className="float-right  lg:p-3 p-1  flex items-center justify-center rounded-full m-1 border
             border-[#4C8488] "
                        onClick={handleClose}
                      >
                        <RxCross2 className="" />
                      </button>
                      <div>
                        <div className=" px-10">
                          <div
                            className=" mt-8  h-[144px] w-[144px]  rounded-full 
               flex items-center justify-center p-3  bg-[#8AC140] "
                          >
                            {/* <div className='h-20 w-20 bg-red-500 rounded-full'> */}
                            <Image
                              src="/men.jpg"
                              alt="tan"
                              width={100}
                              height={100}
                              className="w-full h-full rounded-[100%]"
                            />
                            {/* </div> */}
                          </div>
                        </div>
                        <div>
                          <p className="px-10 pt-5">
                            {selectedComment && selectedComment.comment}
                          </p>
                          <div className="px-10  mt-5 mb-8">
                            <p className="font-semibold">
                              {selectedComment && selectedComment.name}
                            </p>
                            <p>{selectedComment && selectedComment.title}</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Dialog>
                </div>

                <div className="text-white mt-5 mb-8">
                  <p className="font-semibold">{item.name}</p>
                  <p className="">{item.title}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customer;
