"use client"
import { useState } from 'react';
import { Alert, Dialog, Snackbar, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useProductDataList, useDeleteProduct, useUpdateProductData } from '@/app/hooks/reactQuery/useProductDataQuery';
import { RxCross2 } from 'react-icons/rx';
import { useFormik } from "formik";
import * as Yup from 'yup';


const RecentlyUploaded = () => {
  const [updatedProductid,setupdatedProductId]=useState(null)
  const [open,setOpen]=useState(false)

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, 'Name must be at most 20 characters')
      .required('Name is required'),
    description: Yup.string().required('Description is required'),
      // .max(200, 'Description must be at most 200 characters')
      
  });
  const { mutateAsync } = useUpdateProductData(updatedProductid);
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

  const [isDeleting, setIsDeleting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  let limit = 10;
  let offset = 0;
  let search = "";

  const { data, isLoading, error } = useProductDataList(limit, offset, search);
  const deleteProductMutation = useDeleteProduct();

  const handleDelete = (id) => {
    setIsDeleting(true);

    axios.delete(`https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${id}`)
      .then(() => {
        deleteProductMutation(id);
        setIsDeleting(false);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        setIsDeleting(false);
      });
  };

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
    setupdatedProductId(product.id)
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
    setOpenDialog(false);
  };

  return (
    <div className='grid grid-cols-5 gap-4'>
      {data?.map((item, idx) => (
        <div key={idx} className="bg-gray-100 shadow-lg pb-4 rounded-xl">
          <Image src={item.image} alt="image" width={300} height={200} className="w-full rounded-xl" />
          <p className="font-medium text-center mt-4">id: {item.id}</p>
          <h1 className="mt-4 text-center">Name: {item.name}</h1>
          <p className="mt-4 font-medium text-center"> {item.comment}</p>
          <p className="mt-4 font-medium text-center">Price: {item.price}</p>
          <p className="mt-4 font-medium text-center">Description: {item.description}</p>
          <div className="flex items-center justify-center gap-10">
            <Link href="#">
              <button
                onClick={() => handleOpenDialog(item)}
                className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium"
              >
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(item.id)}
              className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium"
            >
              {isDeleting ? "Deleting" : "Delete"}
            </button>
          </div>
        </div>
      ))}

      {selectedProduct && (
        <Dialog
          fullWidth
          maxWidth="lg"
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{
            style: { borderRadius: 16 },
          }}
        >
          <section className="py-5 lg:py-10">
            <button
              className="float-right  lg:p-3 p-1  flex items-center justify-center rounded-full m-1 border border-[#4C8488] "
              onClick={handleCloseDialog}
            >
              <RxCross2 className="" />
            </button>
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-center justify-center">
                  <Image
                    src={selectedProduct.image}
                    alt="tan"
                    width={306}
                    height={340}
                    className=""
                  />
                </div>
                <div className="space-y-2 text-center">
                  <p className="font-semibold">Name: {selectedProduct.name}</p>
                  <p className="text-lg font-bold">Price: {selectedProduct.price}</p>
                  <p>Category: {selectedProduct.description}</p>
                </div>
              </div>
              <div className="mt-4">
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
            </div>
          </section>
        </Dialog>
      )}
    </div>
  );
};

export default RecentlyUploaded;











// Import necessary dependencies
// "use client"
// import { useState } from 'react'; // Import useState hook from React
// import { Alert, Dialog, Snackbar, TextField } from '@mui/material'; // Import UI components from MUI
// import Image from 'next/image'; // Import Image component from Next.js
// import Link from 'next/link'; // Import Link component from Next.js
// import axios from 'axios'; // Import axios for making HTTP requests
// import { useProductDataList, useDeleteProduct, useUpdateProductData } from '@/app/hooks/reactQuery/useProductDataQuery'; // Import custom React Query hooks
// import { RxCross2 } from 'react-icons/rx'; // Import an icon from react-icons
// import { useFormik } from "formik"; // Import useFormik hook for form handling
// import * as Yup from 'yup'; // Import Yup for form validation

// // Define the RecentlyUploaded component
// const RecentlyUploaded = () => {
//   // State for storing the updated product ID and Snackbar open state
//   const [updatedProductid, setUpdatedProductId] = useState(null);
//   const [open, setOpen] = useState(false);

//   // Define a Yup validation schema for form validation
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .max(20, 'Name must be at most 20 characters')
//       .required('Name is required'),
//     description: Yup.string().required('Description is required'),
//   });
//   const { data, isLoading, error } = useProductDataList(limit, offset, search);
//   // Get the `mutateAsync` function from the custom React Query hook
//   const { mutateAsync } = useUpdateProductData(updatedProductid);

//   // Function to handle Snackbar close
//   const handleClose = () => {
//     setOpen(false); // Close the Snackbar
//   };

//   // ... (other code remains the same)

//   // Function to handle opening the update dialog
//   const handleOpenDialog = (product) => {
//     setSelectedProduct(product);
//     setOpenDialog(true);
//     setUpdatedProductId(product.id);

//     // Set initial form values when opening the dialog
//     formik.setValues({
//       name: product.name,
//       price: product.price,
//       description: product.description,
//     });
//   };

//   return (
//     <div className='grid grid-cols-5 gap-4'>
//       {data?.map((item, idx) => (
//         <div key={idx} className="bg-gray-100 shadow-lg pb-4 rounded-xl">
//           <Image src={item.image} alt="image" width={300} height={200} className="w-full rounded-xl" />
//           <p className="font-medium text-center mt-4">id: {item.id}</p>
//           <h1 className="mt-4 text-center">Name: {item.name}</h1>
//           <p className="mt-4 font-medium text-center"> {item.comment}</p>
//           <p className="mt-4 font-medium text-center">Price: {item.price}</p>
//           <p className="mt-4 font-medium text-center">Description: {item.description}</p>
//           <div className="flex items-center justify-center gap-10">
//             <Link href="#">
//               <button
//                 onClick={() => handleOpenDialog(item)}
//                 className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium"
//               >
//                 Update
//               </button>
//             </Link>
//             <button
//               onClick={() => handleDelete(item.id)}
//               className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium"
//             >
//               {isDeleting ? "Deleting" : "Delete"}
//             </button>
//           </div>
//         </div>
//       ))}

//       {selectedProduct && (
//         <Dialog
//           fullWidth
//           maxWidth="lg"
//           open={openDialog}
//           onClose={handleCloseDialog}
//           PaperProps={{
//             style: { borderRadius: 16 },
//           }}
//         >
//           {/* ... (code for displaying product details in the dialog) */}
//           <div className="mt-4">
//             <form onSubmit={formik.handleSubmit}>
//               {/* ... (form fields for name, description, and price) */}
//               <button
//                 type="submit"
//                 className="px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium"
//               >
//                 Submit
//               </button>
//               {/* Snackbar for success message */}
//               <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//                   Product updated successfully.
//                 </Alert>
//               </Snackbar>
//             </form>
//           </div>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default RecentlyUploaded; // Export the component

