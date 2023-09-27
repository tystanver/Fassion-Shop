"use client"
import { selectedCountStore } from "@/app/store/productCookiesStore";
import { OrderValidation } from "@/lib/validation/orderValidation";


import {
  CircularProgress,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import { deleteCookie } from "cookies-next";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

// // main component
// const BillSection = () => {
//   const { status } = useSession();

//   return (
//     <>{status == "authenticated" ? <AuthBilling /> : <BillSubComponent />}</>
//   );
// };
// export default BillSection;

// const AuthBilling = () => {
//   const { data: profileData, isLoading } = useProfileDataList();

//   if (isLoading) {
//     return (
//       <div className="w-full flex justify-center items-center h-52">
//         <CircularProgress />
//       </div>
//     );
//   }
//   return (
//     <>
//       <BillSubComponent profileData={profileData} />
//     </>
//   );
// };

// sub component
const BillSection = ({ profileData }) => {
  const [items, setItemFromCookie, singleProduct] = selectedCountStore(
    (state) => [state.items, state.setItemFromCookie, state.singleProduct]
  );
//   const { status } = useSession();
//   const { mutateAsync } = useOrderDataQuery();

  // console.log(items);

  // useEffect(() => {
  //   setItemFromCookie();
  // }, [setItemFromCookie]);

  const subtotal = items.reduce(
    (total, item) =>
      total +
      (item?.disCountprice ? item.disCountprice : item.price * item.quantity),
    0
  );
  const grandTotal = subtotal;

  const singleProductGrandtotal = singleProduct?.disCountprice
    ? singleProduct?.disCountprice * singleProduct?.quantity
    : singleProduct?.price * singleProduct?.quantity;

  const singleProdInventory = [
    {
      id: singleProduct?.inventory?.id,
      quantity: singleProduct?.quantity,
    },
  ];

//   const orderItemData = orderItem(items);
//   const { push } = useRouter();
  const [createAccount, setCreatAccount] = useState(false);
  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      first_name: profileData?.first_name ?? "",
      last_name: profileData?.last_name ?? "",
      phone_number: profileData?.profile?.phone_number ?? "",
      email: profileData?.email ?? "",
      address: profileData?.profile?.address ?? "",
      notes: "",
      create_account: createAccount,
    },
    validationSchema: OrderValidation,
    onSubmit: async (data) => {
      try {
        // if (singleProduct == null && grandTotal == 0) {
        //   return enqueueSnackbar("Please select product to checkout!", {
        //     variant: "error",
        //   });
        // }
        // const payload = {
        //   first_name: data?.first_name,
        //   last_name: data?.last_name,
        //   phone_number: data?.phone_number,
        //   email: data?.email,
        //   address: data?.address,
        //   notes: data?.notes,
        //   total_bill:
        //     singleProduct != null ? singleProductGrandtotal : grandTotal,
        //   paid_amount: 0,
        //   payment_status: "unpaid",
        //   payment_method: "cod",
        //   trx_id: null,
        //   create_account: createAccount,
        //   inventory:
        //     singleProduct != null ? singleProdInventory : orderItemData,
        // };
        // const payload = {
        //   inventory: [
        //     {
        //       id: 4,
        //       quantity: 2,
        //     },
        //   ],
        //   total_bill: 16000,
        //   paid_amount: 0,
        //   payment_status: "unpaid",
        //   payment_method: "cod",
        //   trx_id: null,
        //   first_name: "Tofail",
        //   last_name: "Ahmed",
        //   address: "sony",
        //   email: "t3@t.com",
        //   phone_number: "015589",
        //   notes: "Mirpur 2",
        //   create_account: false,
        // };
        // console.log(payload, 55);

        // await mutateAsync(payload);
        // setItemFromCookie(null);
        // deleteCookie("addToCartProducts");
        // if (createAccount) {
        //   alert(
        //     "Additionaly an account has created. Check your email for credentials"
        //   );
        // }
        // enqueueSnackbar("Ordered Successfully", {
        //   variant: "success",
        // });
        // if (status === "authenticated") {
        //   push("/dashboard/my-orders");
        // } else {
        //   push("/shop");
        console.log(data)
        // }
        resetForm();
      } catch (error) {
        console.log(error);
        enqueueSnackbar(error.Error, {
          variant: "error",
        });
      }
    },
  });

  return (
    <section className="container mx-auto lg:my-20 my-10 px-2 xl:px-0 ">
      <div>
        <form
          className={`mt-[30px] ${
            isSubmitting ? "was-validated" : ""
          } lg:grid grid-cols-5 gap-[30px]`}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <div className=" col-span-3">
            <h1 className="text-2xl">Your Billing Address</h1>
            <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
              <TextField
                required
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                name="first_name"
                label="First Name"
                error={touched.first_name && Boolean(errors.first_name)}
                helperText={touched.first_name && errors.first_name}
              />
              <TextField
                required
                fullWidth
                label="Last Name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="last_name"
                error={touched.last_name && errors.last_name}
                helperText={touched.last_name && errors.last_name}
              />
            </div>
            <div className="grid grid-cols-2 gap-[30px] lg:mt-[30px] mt-4">
              <TextField
                required
                fullWidth
                label="Phone Number"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone_number && errors.phone_number}
                helperText={touched.phone_number && errors.phone_number}
              />
              <TextField
                required
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                label="Email Address"
                name="email"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
            </div>
            <div className="mt-[30px] w-full">
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                error={touched.address && errors.address}
                helperText={touched.address && errors.address}
                multiline
                rows={3}
              />
            </div>
            <div className="mt-[30px]">
              <TextField
                fullWidth
                multiline
                rows={3}
                label=" Order Note"
                name="notes"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.notes}
                error={touched.notes && errors.notes}
                helperText={touched.notes && errors.notes}
              />
            </div>
            {status == "unauthenticated" && (
              <div className="flex gap-1 mt-1 items-center">
                <input
                  type="checkbox"
                  onChange={() => setCreatAccount(!createAccount)}
                  checked={createAccount}
                  name=""
                  id="account"
                />
                <label htmlFor="account">Create an account</label>
              </div>
            )}
          </div>

          <div className="mt-5 lg:mt-0 col-span-2 ">
            <div>
              <h1 className="text-2xl text-center lg:text-left">
                Your Order Summary
              </h1>
              <div className="rounded-[15px] bg-slate-500 bg-opacity-10 lg:p-8 p-3 mt-[30px]">
                <div className="flex justify-between pb-6 items-center border-b-2 border-3">
                  <p className="">Item name</p>
                  <p>Price</p>
                </div>
                <div className=" border-b-2 pb-6 mt-6">
                  <div className="space-y-6 ">
                    {singleProduct != null ? (
                      <div className="flex justify-between">
                        <div className="flex">
                          <p>
                            {singleProduct.name}{" "}
                            <span className="text-sm text-gray-600">
                              (color:{" "}
                              {singleProduct?.inventory?.color__color_name}
                              ,size: {singleProduct?.inventory?.size})
                            </span>
                          </p>
                          <p className="ml-2">
                            {singleProduct?.disCountprice
                              ? singleProduct.disCountprice
                              : singleProduct.price}{" "}
                            x {singleProduct.quantity}
                          </p>
                        </div>

                        <p>${singleProductGrandtotal}</p>
                      </div>
                    ) : (
                      items?.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <div className="flex gap-5">
                            <p className="w-2/3">
                              {item.name}{" "}
                              <span className="text-sm text-gray-600">
                                (color: {item?.inventory?.color__color_name}
                                ,size: {item?.inventory?.size})
                              </span>
                            </p>
                            
                          </div>

                          <p>
                            $
                            {item?.disCountprice
                              ? item.disCountprice
                              : item.price * item.quantity}
                          </p>
                        </div>
                      ))
                    )}
                    {/* {} */}
                  </div>
                </div>
                <div className="flex justify-between items-center pb-6 mt-6">
                  <p className="font-medium text-lg">Grand Total</p>
                  <p className="font-medium">
                    ${" "}
                    {singleProduct != null
                      ? singleProductGrandtotal
                      : grandTotal}
                  </p>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-center lg:text-left ">
                    Bank Transfer
                  </h1>
                  <p className="mb-3">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wil
                  </p>
                  <div className="flex gap-3 items-center">
                    <FormControlLabel
                      value="Cash on delivery"
                      control={<Radio />}
                      label="Cash on delivery"
                    />
                  </div>
                  <div className="flex items-center">
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="Online Payment"
                    />
                  </div>
                  <div className=" mt-2">
                    <h1 className="text-xl font-bold text-center lg:text-left">
                      Have You Any Code ?
                    </h1>
                    <div className="xl:flex justify-between items-center  lg:mt-[20px]">
                      <div className="  flex items-center lg:justify-start justify-center">
                        <input
                          className="text-[#4C8488] pl-7 py-2 border rounded-[30px] border-[#4C8488] w-[310px] "
                          type="text"
                          name=""
                          id=""
                          placeholder="Write Your Coupon Code"
                        />
                      </div>

                      <div className="flex items-center justify-center lg:justify-left mt-4 xl:mt-0 overflow-hidden  ">
                        <button
                          className="bg-[#4C8488] lg:rounded-[30px] rounded-xl px-9  py-3 
                        font-medium text-white hover:border hover:border-[#4C8488] hover:bg-white
                         hover:text-[#4C8488]"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="xl:flex lg:grid flex lg:grid-cols-2 lg:gap-3 gap-4 items-center
                   justify-center xl:justify-start mt-6"
                  >
                    <Image
                      src="/bkash.png"
                      alt="bkash1"
                      width={78}
                      height={66}
                      priority={true}
                    />
                    <Image
                      src="/nogod.png"
                      alt="tan"
                      width={78}
                      height={66}
                      priority={true}
                    />
                    <Image
                      src="/visa.png"
                      alt="tan"
                      width={78}
                      height={66}
                      priority={true}
                    />
                    
                  </div>
                  <div className="mt-6">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="text-center text-white disabled:bg-slate-200 text-lg font-medium rounded-[30px] hover:text-[#4C8488]
                      bg-[#4C8488] py-3 w-full hover:border hover:border-[#4C8488] hover:bg-white"
                    >
                      {isSubmitting ? "Processing..." : " Confirm"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default BillSection
