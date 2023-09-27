"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { usePublicEventDataList } from "@/app/hooks/reactQuery/useEventDataQuery";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const Herosection = () => {
  //   const { data, isLoading } = usePublicEventDataList();

  return (
    <>
      <section
        style={{
          backgroundImage: `url('')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-[#4C8488]"
      >
        <div className="container mx-auto px-4 xl:px-6 ">
          <div className=" lg:grid grid-cols-2">
            <div className="lg:pt-[301px] lg:text-left text-center pt-10 ">
              <p className="text-white  text-[16px]">
                {" "}
                Want to know whats hot?
              </p>
              <h1 className="lg:text-[48px] text-[26px] font-bold">
                Spring Look book
              </h1>
              <div className="lg:mt-[50px] mt-5 lg:pb-[184px]">
                <Link href="/shop">
                  <button
                    className=" text-sm px-3  py-2  rounded-2xl
             lg:text-[18px] lg:rounded-[30px] xl:px-6  xl:py-3  border 
               hover:text-white
             font-medium"
                  >
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:pt-[74px] pt-10 relative ">
              <Image
                className="h-full w-full"
                layout="responsive"
                objectFit="cover"
                src="/herosectionImage.png"
                alt="herosectionImage"
                width={761}
                height={644}
                priority={true}
              />
            </div>
          </div>
        </div>
{/* 
        <Modal/> */}
      </section>

      {/* <Swiper
          style={{
            backgroundImage: `url('')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          speed={1500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper bg-zinc-100"
        >
          
            <SwiperSlide >
              <div className=" container px-4 xl:px-6 mx-auto lg:grid lg:grid-cols-2 ">
                <div>
                  <div className="lg:pt-[200px] lg:text-left text-center py-10 lg:py-0  ">
                    <p className="text-[#4C8488]  text-[16px]">
                     
                    </p>
                    <h1 className="lg:text-[48px] text-[26px] font-bold">
                  
                    </h1>
                    <div className="lg:mt-[30px] mt-5 lg:pb-[184px]">
                      <Link href="/shop">
                        <button
                          className=" text-[#4C8488] text-sm px-3  py-2  rounded-2xl
        lg:text-[18px] lg:rounded-[30px] xl:px-6  xl:py-3  border
         border-[#4C8488] hover:bg-[#4C8488] hover:text-white
        font-medium"
                        >
                          Start Shopping
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

               
              </div>
            </SwiperSlide>
        
        </Swiper> */}
    </>
  );
};

export default Herosection;

{
  /* {isLoading ? (
        <p className="text-center text-4xl">Loading...</p>
      ) : (
        <Swiper
          style={{
            backgroundImage: `url('')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="mySwiper bg-zinc-100"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="container mx-auto px-4 xl:px-6  lg:flex lg:gap-[400px]">
                <div className="lg:pt-[301px] lg:text-left text-center pt-10  border ">
                  <p className="text-[#4C8488]  text-[16px]">
                    {item?.event_description}
                  </p>
                  <h1 className="lg:text-[48px] text-[26px] font-bold">
                    {item?.event_name}
                  </h1>
                  <div className="lg:mt-[50px] mt-5 lg:pb-[184px]">
                    <Link href="/shop">
                      <button
                        className=" text-[#4C8488] text-sm px-3  py-2  rounded-2xl
        lg:text-[18px] lg:rounded-[30px] xl:px-6  xl:py-3  border
         border-[#4C8488] hover:bg-[#4C8488] hover:text-white
        font-medium"
                      >
                        Start Shopping
                      </button>
                    </Link>
                  </div>
                </div>
               
                <div style={{} } className="lg:pt-[74px] pt-10 relative bg-white h-[300px] w-[300px] rounded-full ml-32  "> */
}
{
  /* <Image
                    className="h-full w-full"
                    layout="responsive"
                    objectFit="cover"
                    src={item?.event_banner}
                    alt="herosectionImage"
                    width={761}
                    height={644}
                    priority={true}
                  /> */
}
{
  /* <div className=" absolute top-0 h-[800px] w-[800px] rounded-full bg-white ">

                  </div>
                </div> */
}
{
  /* 
<div className="flex items-center justify-center relative">

</div>
<div className=" absolute top-0">

</div> */
}
{
  /* </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )} */
}

// import { useEventDataList } from "@/hooks/reactQuery/useEventDataQuery";
// import Image from "next/image";
// import Link from "next/link";

// const Herosection = () => {
//   const { data, isLoading } = useEventDataList();
//   console.log(data);
//   return (
//     <section
//       style={{
//         backgroundImage: `url('')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="bg-zinc-100 "
//     >
//       <div className="container mx-auto px-4 xl:px-6 ">
//         <div  className=" lg:grid grid-cols-2">
//           <div className="lg:pt-[301px] lg:text-left text-center pt-10 ">
//             <p className="text-[#4C8488]  text-[16px]">
//               {" "}
//               Want to know whats hot?
//             </p>
//             <h1 className="lg:text-[48px] text-[26px] font-bold">
//               Want to know what’s hot?
//             </h1>
//             <div className="lg:mt-[50px] mt-5 lg:pb-[184px]">
//               <Link href="/shop">
//                 <button
//                   className=" text-[#4C8488] text-sm px-3  py-2  rounded-2xl
//         lg:text-[18px] lg:rounded-[30px] xl:px-6  xl:py-3  border
//          border-[#4C8488] hover:bg-[#4C8488] hover:text-white
//         font-medium"
//                 >
//                   Start Shopping
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="lg:pt-[74px] pt-10 relative ">
//             <Image
//               className="h-full w-full"
//               layout="responsive"
//               objectFit="cover"
//               src="/Images/Hero Section Image.png"
//               alt="herosectionImage"
//               width={761}
//               height={644}
//               priority={true}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Herosection;

// import { useEventDataList } from "@/hooks/reactQuery/useEventDataQuery";
// import Image from "next/image";
// import Link from "next/link";

// const Herosection = () => {
//   const { data, isLoading } = useEventDataList();
//   console.log(data);
//   return (
//     <section
//       style={{
//         backgroundImage: `url('')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="bg-zinc-100 "
//     >
//       <div className="container mx-auto px-4 xl:px-6 ">
//         {data.map((item, idx) => (
//           <div key={idx} className=" lg:grid grid-cols-2">
//             <div className="lg:pt-[301px] lg:text-left text-center pt-10 ">
//               <p className="text-[#4C8488]  text-[16px]">
//                 {" "}
//                 {/* Want to know whats hot? */}
//                 {item?.event_description}
//               </p>
//               <h1 className="lg:text-[48px] text-[26px] font-bold">
//                 {/* Want to know what’s hot? */}
//                 {item?.event_name}
//               </h1>
//               <div className="lg:mt-[50px] mt-5 lg:pb-[184px]">
//                 <Link href="/shop">
//                   <button
//                     className=" text-[#4C8488] text-sm px-3  py-2  rounded-2xl
//         lg:text-[18px] lg:rounded-[30px] xl:px-6  xl:py-3  border
//          border-[#4C8488] hover:bg-[#4C8488] hover:text-white
//         font-medium"
//                   >
//                     Start Shopping
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className="lg:pt-[74px] pt-10 relative ">
//               <Image
//                 className="h-full w-full"
//                 layout="responsive"
//                 objectFit="cover"
//                 src="/Images/Hero Section Image.png"
//                 alt="herosectionImage"
//                 width={761}
//                 height={644}
//                 priority={true}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Herosection;

// className="bg-zinc-100 "

// const Modal = () => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending
//             anonymous location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };
