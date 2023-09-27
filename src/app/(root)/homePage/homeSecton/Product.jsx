"use client";
import useTodos from "@/app/customHook/getAllProduct.";
import { selectedCountStore } from "@/app/store/productCookiesStore";
import { Box, CircularProgress, Dialog, LinearProgress } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { shallow } from "zustand/shallow";

export const ProductCard = ({
  id,
  name,
  image,
  price,
  category,
  wholeprice,
  item,
  onOpenModal,
  onCloseModal,
  selectedItem,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // console.log(id)
let quantity=1
  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleOpen = () => {
    onOpenModal(item);
  };

  const handleClose = () => {
    onCloseModal();
  };

  let dolon = {
    id,
    name,
    image,
    price,
    category,
    wholeprice,
    quantity
  };
  // console.log(dolon);

  const [items, addItem, setSingleProduct] = selectedCountStore(
    (state) => [state.items, state.addItem, state.setSingleProduct],
    shallow
  );
  // console.log("here is the item",items)

  return (
    <div
      className="shadow-lg relative w-full px-10 rounded-t-lg bg-gray-100  lg:py-8 py-4"
      onMouseEnter={() => handleCardHover(id)}
      onMouseLeave={() => handleCardHover(null)}
    >
      <Image
        src={image}
        layout="responsive"
        objectFit="cover"
        alt="tan"
        width={306}
        height={340}
        priority={true}
        className="w-full"
      />
      <div
        className={`absolute top-1/3 left-5 space-y-[20px]  ${
          hoveredIndex === id ? "block" : "hidden"
        }`}
      >
        <div className="border border-gray-600  hover:border-green-600 px-2 py-1">
          <BsCart3
            onClick={() => addItem(dolon)}
            className="text-2xl text-green-800"
          />
        </div>
        <div className="border border-gray-600  hover:border-green-600 px-2 py-1">
          <AiOutlineEye
            onClick={handleOpen}
            className="text-2xl text-green-800"
          />
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-semibold">id: {id}</p>
        <p className="font-semibold">Name: {name}</p>
        <p className="text-lg font-semibold ">Price: {price}</p>
        <p>Category: {category}</p>
      </div>
    </div>
  );
};

const Product = () => {
  let limit = 10;
  const offset = 0;
  let search = "";

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedItem(product);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setOpen(false);
  };

  const { data, isLoading, isError, error } = useTodos(limit, offset);
  // console.log("here is data",data)

  if (isLoading) {
    return (
      <div className="mt-5">
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-center mt-10 text-4xl">Our Product</h1>
      <div className="lg:grid grid-cols-4 gap-10 space-y-5 lg:space-y-0 mt-5 lg:mt-10 lg:my-10 py-4">
      {/* {data.map(item => (
          <div key={item.id} className="bg-gray-100 shadow-lg pb-4 rounded-xl">
            <Image src={item.image} alt="image" width="300" height="200" className="w-full rounded-xl" />
          
            <p className="font-medium text-center mt-4">id: {item.id}</p>
            <h1 className="mt-4 text-center">{item.name}</h1>
            <p className="mt-4 font-medium text-center">{item.comment}</p>
            <div className="flex items-center justify-center gap-10">
              <Link href={`/details/${item.id}`}>
                <button className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium">Read more</button>
              </Link>
              <button onClick={()=>{handleDelete(item.id)}} className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium">delete</button>
              
            </div>
          </div>
        ))} */}

        {data.map((product, idx) => (
          <ProductCard
          className="lg:my-8 py-4"
            item={product}
            key={idx}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
            wholeprice={product.wholeprice}
            onOpenModal={handleOpenModal}
            onCloseModal={handleCloseModal}
            selectedItem={selectedItem}
          />
        ))}
      </div>

      {selectedItem && (
        <DetailsModal
          open={open}
          onClose={handleCloseModal}
          selectedItem={selectedItem}
        />
      )}
    </div>
  );
};

export const DetailsModal = ({ open, onClose, selectedItem }) => {
  const [quantity, setQuantity] = useState(0);

  const [items, addItem, setSingleProduct] = selectedCountStore(
    (state) => [state.items, state.addItem, state.setSingleProduct],
    shallow
  );

  return (
    <div className=" ">
      <Dialog
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={onClose}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
        <section className="py-5 lg:py-10">
          <button
            className="float-right  lg:p-3 p-1  flex items-center justify-center rounded-full m-1 border border-[#4C8488] "
            onClick={onClose}
          >
            <RxCross2 className="" />
          </button>
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center justify-center">
                <Image
                  src={selectedItem.image}
                  alt="tan"
                  width={306}
                  height={340}
                  className=""
                />
              </div>
              <div className="space-y-2 text-center">
                <p className="font-semibold">Name: {selectedItem.name}</p>
                <p className="text-lg font-bold">Price: {selectedItem.price}</p>
                <p>Category: {selectedItem.description}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex mt-3 justify-center lg:justify-start">
                <p className="font-medium text-lg">Color :</p>
                <div className="text-lg flex gap-4 ml-4 items-center">
                  {/* {uniqueInventory?.map((i, idx) => {
                        return (
                          <div className="flex gap-1" key={Math.random()}>
                            <input
                              type="radio"
                              name="color"
                              id={i.id}
                              checked={
                                i.color__color_name ===
                                prodInventory?.color__color_name
                              }
                              onChange={() => setProdInventory(i)}
                              value={i.color__color_name}
                            />
                            <label htmlFor={i.id}>{i.color__color_name}</label>
                          </div>
                        );
                      })} */}
                </div>
              </div>

              <div className="  lg:flex gap-[52px]  items-center jsutify-center  mt-3  ">
                <div className="flex items-center justify-center lg:justify-start gap-5 font-medium mt-2">
                  <h1 className="text-lg">Size :</h1>
                  <div className="flex items-center flex-wrap text-lg">
                    {/* {inventory.map((i, idx) => (
                          <p key={idx}>
                            {i.color__color_name ===
                              prodInventory?.color__color_name && (
                              <span
                                onClick={() => setProdInventory(i)}
                                className={`text-xl px-3 py-1 mr-2 cursor-pointer border rounded-md ${
                                  i.id == prodInventory.id
                                    ? "border-[#4C8488]"
                                    : ""
                                }`}
                              >
                                {i.size}
                              </span>
                            )}
                          </p>
                        ))} */}
                  </div>
                </div>
              </div>
              <p className="font-medium pt-3  text-lg">
                Available Products : <span> {selectedItem.stock}</span>
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <div>
                  <div className="lg:flex gap-[30px] lg:mt-[30px] mt-3 items-center ">
                    <div className="flex gap-4 items-center mt-2 lg:mt-0">
                      <div className="hidden lg:block">
                        <p className="text-lgfont-medium ">Quantity :</p>
                      </div>
                      <div className="flex border items-center px-5 py-1 justify-between rounded-[30px] w-[196px] ">
                        <button
                          onClick={() =>
                            quantity > 1 && setQuantity(quantity - 1)
                          }
                          className="text-lg"
                        >
                          -
                        </button>

                        <p className="text-lg">{quantity ? quantity : 1}</p>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:mt-0 lg:flex gap-[30px] pt-[30px] items-center">
                <div>
                  <button
                    onClick={() => addItem(selectedItem)}
                    className=" text-white lg:text-lg text-sm hover:bg-white rounded-xl hover:border-[#4C8488] 
                font-medium lg:rounded-[30px] lg:py-3 lg:px-[38px] px-4 py-2 bg-[#4C8488] hover:text-[#4C8488] border "
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="mt-4 lg:mt-0">
                <Link href="/checkOutPage">
                <button
                    // onClick={handleBuy}
                    className="  lg:text-lg text-sm font-medium lg:rounded-[30px] rounded-xl text-[#4C8488] 
                border-[#4C8488] border hover:bg-[#4C8488]  lg:px-[38px] px-4 py-2 hover:text-white"
                  >
                    Buy Now
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Dialog>
    </div>
  );
};

export default Product;
