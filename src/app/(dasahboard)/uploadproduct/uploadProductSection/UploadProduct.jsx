
// "use client"
// import { ProductValidation } from "@/lib/validation/productValidation";
// import { LoadingButton } from "@mui/lab";
// import { useFormik } from "formik";

// // import { useAddProductDataQuery } from  " ";
// import { getImgToB64 } from "@/lib/imageToB64";
// import SendIcon from "@mui/icons-material/Send";
// import { enqueueSnackbar } from "notistack";

// import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from "@mui/material";
// import { useRouter } from "next/router";
// import { RxCross2 } from "react-icons/rx";
// import { useState } from "react";
// import { AddProductTagFiled, CategoryAutoCompleteFiled, DiscountPriceFiled, MaterialDescriptionReactQuill, PriceFiled, ProductDescriptionReactQuill, ProductNameTextFiled, WashInstructionReactQuill } from "../@asstes/ProductInputs";
// import { useAllEventDataQuery } from "@/app/hooks/reactQuery/useEventDataQuery";
// // import { useAddProductDataQuery } from "@/app/hooks/reactQuery/useProductDataQuery";

// /** defalunt component */
// const  UploadProduct= () => {
// //   const { mutateAsync } = useAddProductDataQuery();
//   const [open, setOpen] = useState(false);
//   const { mutateAsync } = useAllEventDataQuery();

  
//   const {
//     handleChange,
//     handleBlur,
//     values,
//     touched,
//     errors,
//     isSubmitting,
//     handleSubmit,
//     setFieldValue,
//     resetForm,
//   } = useFormik({
//     initialValues: {
//         product_name: "",
//         original_price: "",
//         discounted_price: "",
//         description: "",
       
//       },
//       onSubmit: async (data) => {
//         try {
//           // console.log(data)
//           const payload = {
//             product_name: data?.name,
//             original_price: data?.price,
            
          

//          product_category: data?.category,
            
//           };
//           console.log(data);
//           console.log(payload);
//           await mutateAsync(payload);
//           setOpen(!open);
//           resetForm();
//           enqueueSnackbar("Product added", {
//             variant: "success",
//           });
//           // push("/dashboard/all-products");
//         } catch (error) {
//           console.log(error);
//           if (error.Product) {
//             enqueueSnackbar(error.Product[0], {
//               variant: "error",
//             });
//           } else {
//             enqueueSnackbar("Something went wrong!", {
//               variant: "error",
//             });
//           }
//         }
//       },
   
//   });

//   const handleImage = async (e) => {
//     try {
//       const img = await getImgToB64(e.target.files[0]);
//       let newImage;
//       if (values.images.length < 5) {
//         newImage = {
//           img: img,
//           is_featured: values.images.length === 0,
//         };
//         setFieldValue("images", [...values.images, newImage]);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleThumbnailImage = async (e) => {
//     try {
//       const selectedImages = e.target.files;
//       const newImages = [];

//       for (const image of selectedImages) {
//         const imgData = await getImgToB64(image);
//         newImages.push({
//           img: imgData,
//           is_featured: false,
//         });
//       }

//       setFieldValue("images", [...values.images, ...newImages]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeMe = (index) =>
//     setFieldValue(
//       "images",
//       values.images.filter((_, i) => i !== index)
//     );
//   return (
//     <div>
//       <h1 className="text-[32px] font-semibold">Product Upload</h1>
//       <form onSubmit={handleSubmit} noValidate autoComplete="off">
//         <div className="flex lg:gap-5 xl:gap-14  flex-col lg:flex-row">
//           <div className="xl:w-[50%]">
//             <div className="">
//               <div className="flex flex-col lg:flex-row gap-4 mb-[20px]  items-center ">
//                 <div className="w-full">
//                   <ProductNameTextFiled
//                     values={values}
//                     errors={errors}
//                     touched={touched}
//                     handleChange={handleChange}
//                   />
//                 </div>

//                 <div className=" w-full lg:mt-4">
//                   <CategoryAutoCompleteFiled
//                     values={values}
//                     errors={errors}
//                     touched={touched}
//                     setValue={(e) => setFieldValue("product_category", e)}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-4 items-center ">
//               <div className="w-full">
//                 <PriceFiled
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   handleChange={handleChange}
//                 />
//               </div>
//               <div className="w-full">
//                 <DiscountPriceFiled
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   handleChange={handleChange}
//                 />
//               </div>
//             </div>
//             {/* <div className=" w-full lg:mt-4">
//               <FormControl className="w-full" variant="outlined">
//                 <InputLabel>Gender</InputLabel>
//                 <Select label="Gender" value={values.product_category} onChange={handleChange}>
//                   <MenuItem value="men">Men</MenuItem>
//                   <MenuItem value="women">Women</MenuItem>
//                 </Select>
//               </FormControl>
//             </div> */}

//             <div className="mt-8">
//               <div>
//                 <p className="mb-4">Product Description</p>
//                 <ProductDescriptionReactQuill
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   setValue={(e) => setFieldValue("description", e)}
//                 />
//                 {touched.description && Boolean(errors.description) ? (
//                   <p className="text-[#D32F2F]">{errors.description}</p>
//                 ) : (
//                   " "
//                 )}
//               </div>
//               <div>
//                 <p className="mb-4 pt-8 lg:pt-4">Material Description</p>
//                 <MaterialDescriptionReactQuill
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   setValue={(e) => setFieldValue("material", e)}
//                 />
//                 {touched.material && Boolean(errors.material) ? (
//                   <p className="text-[#D32F2F]">{errors.material}</p>
//                 ) : (
//                   " "
//                 )}
//               </div>
//               <div>
//                 <p className="pt-8 lg:pt-4 mb-4">Wash Instruction</p>
//                 <WashInstructionReactQuill
//                   values={values}
//                   errors={errors}
//                   touched={touched}
//                   setValue={(e) => setFieldValue("wash_instruction", e)}
//                 />
//                 {touched.wash_instruction &&
//                 Boolean(errors.wash_instruction) ? (
//                   <p className="text-[#D32F2F]">{errors.wash_instruction}</p>
//                 ) : (
//                   " "
//                 )}
//               </div>
//             </div>
//             <div className="w-full mt-16">
//               <AddProductTagFiled
//                 values={values}
//                 errors={errors}
//                 touched={touched}
//                 handleChange={handleChange}
//               />
//             </div>
//             <div className="flex flex-col mt-4">
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="is_signature"
//                     checked={values.is_signature}
//                     onChange={handleChange}
//                   />
//                 }
//                 label="Signature"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="is_designer"
//                     checked={values.is_designer}
//                     onChange={handleChange}
//                   />
//                 }
//                 label="Designer"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     name="is_discounted"
//                     checked={values.is_discounted}
//                     onChange={handleChange}
//                   />
//                 }
//                 label="Discounted"
//               />
//             </div>

//             <div className="hidden lg:block">
//               <div className="flex  mt-[30px]">
//                 <LoadingButton
//                   endIcon={<SendIcon />}
//                   // loading={true}
//                   loadingPosition="end"
//                   disabled={isSubmitting}
//                   type="submit"
//                   className="btn bg-[#4c8397] text-white hover:text-white px-4 lg:px-7 py-[8px] lg:py-[10px] capitalize   hover:bg-[#4c8397] rounded-[20px]"
//                 >
//                  Submit {/* {isSubmitting ? "Saving..." : "Submit"} */}
//                 </LoadingButton>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="  mt-6 flex flex-col  lg:pl-0">
//               <div className="rounded-3xl ">
//                 <div className=" border-2  bg-[#E4E4E4]  rounded-[10px]">
//                   <label className=" ">
//                     <span className=" items-center ">
//                       <h1 className="font-medium px-[120px] py-[120px] lg:px-[70px]  xl:px-[200px] lg:py-[100px] xl:py-[275px] text-[20px] flex items-center">
//                         Add Photo
//                       </h1>
//                     </span>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => handleImage(e)}
//                       name="images"
//                       className="hidden"
//                     ></input>
//                   </label>
//                   {touched.images && Boolean(errors.images) && (
//                     <p className="text-red-600 text-sm" role="alert">
//                       {touched.images && errors.images}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               {/* <div className="flex flex-wrap gap-3">
//                 {values.images.map((image, index) => (
//                   <div
//                     key={index}
//                     className={` my-2 relative bg-center bg-no-repeat bg-cover rounded-lg h-[90px] w-[90px] `}
//                     style={{
//                       backgroundImage: `url(${image.img})`,
//                     }}
//                   >
//                     <span
//                       onClick={() => removeMe(index)}
//                       className="absolute top-1 cursor-pointer right-1 rounded-full text-white  bg-red-600"
//                     >
//                       <RxCross2 />
//                     </span>
//                   </div>
//                 ))}
//               </div> */}
//             </div>

//             {/* preview Image */}

//             {/* <div className="rounded-3xl mt-10 w-[110px]">
//               <div className="   bg-[#E4E4E4]  rounded-[10px]">
//                 <label className=" ">
//                   <span className=" items-center ">
//                     <h1 className="font-medium p-10  text-[20px] ">
//                       <AddIcon />
//                     </h1>
//                   </span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleThumbnailImage(e)}
//                     name="images"
//                     className="hidden"
//                   ></input>
//                 </label>
//                 {touched.images && Boolean(errors.images) && (
//                   <p className="text-red-600 text-sm" role="alert">
//                     {touched.images && errors.images}
//                   </p>
//                 )}
//               </div>
//             </div> */}
//           </div>
//           <div className="block lg:hidden">
//             <div className="flex  mt-[30px] ">
//               <LoadingButton
//                 endIcon={<SendIcon />}
//                 // loading={true}
//                 loadingPosition="end"
//                 disabled={isSubmitting}
//                 type="submit"
//                 className="btn bg-[#4c8397] text-white hover:text-white px-4 lg:px-7 py-[8px] lg:py-[10px] capitalize   hover:bg-[#4c8397] rounded-[20px]"
//               >
//                 {/* {isSubmitting ? "Saving..." : "Submit"} */}
//               </LoadingButton>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UploadProduct;
"use client"

import React, { useState } from 'react'; // Import useState
import axios from 'axios';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Name must be at most 20 characters')
    .required('Name is required'),
  description: Yup.string().required('Description is required'),
    // .max(200, 'Description must be at most 200 characters')
    
});
import { useAddProductDataQuery } from '@/app/hooks/reactQuery/useProductDataQuery';
import { shallow } from "zustand/shallow";
import { selectedCountStore } from '@/app/store/productCookiesStore';

const Dashboard = () => {
  const [open, setOpen] = useState(false); // Add the state for the Snackbar
  const { mutateAsync } = useAddProductDataQuery();
 

  const [uploadedProduct,uploaded] = selectedCountStore(
    (state) => [state.uploadedProduct, state.uploaded],
    shallow
  );
  console.log("uploaded",uploadedProduct)

  // const handleSubmission = (values, resetForm) => {
  //   const apiUrl = 'https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website';
  //   const postData = {
  //     name: values.name,
  //     description: values.description,
  //     price:values.price,
  //   };
  //   axios.post(apiUrl, postData)
  //     .then(response => {
  //       console.log("Data successfully posted:", response.data);
  //       setOpen(true); // Open the Snackbar on success
  //       resetForm();
  //     })
  //     .catch(error => {
  //       console.error("Error posting data:", error);
  //     });
  // };

  const handleClose = () => {
    setOpen(false); // Close the Snackbar
  };

  const {
    handleChange,
    values,
    handleSubmit,
    resetForm,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      price:
"",      description: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        // console.log(data)
        const payload = {
          name: data.name,
      price:data.price,
     description: data.description,
         
        };
        // console.log(data);
        // console.log(payload);
        await mutateAsync(payload);
        setOpen(true); // Open the Snackbar on success
        resetForm();
        uploaded(payload)
      
      } catch (error) {
        console.log(error);
        if (error.Product) {
          enqueueSnackbar(error.Product[0], {
            variant: "error",
          });
        } else {
          enqueueSnackbar("Something got wrong!", {
            variant: "error",
          });
        }
      }
    },
  });

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          variant="outlined"
          value={values.name}
          onChange={handleChange}
          margin="normal"
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          variant="outlined"
          value={values.description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          onBlur={handleBlur}
          error={touched.description && Boolean(errors.description)}
          helperText={touched.description && errors.description}
        />
        <TextField
          name="price"
          label="price"
          fullWidth
          variant="outlined"
          value={values.price}
          onChange={handleChange}
          margin="normal"
          multiline
         type='number'
          onBlur={handleBlur}
          error={touched.price && Boolean(errors.price)}
          helperText={touched.price && errors.price}
        />
             <button
              type="submit"
              className="px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium"
            >
              Submit
            </button>
        {/* <Button type='submit' variant="contained" color="primary">Post</Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Data successfully posted.
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}

export default Dashboard;