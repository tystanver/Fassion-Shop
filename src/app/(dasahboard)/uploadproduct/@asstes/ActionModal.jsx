import { useDeleteProductData } from "@/hooks/reactQuery/useProductDataQuery";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import InventoryModal from "../../inventoryManagement/InventoryModal";
import ProductDataEditModal from "../product/ProductDataEditModal";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import VisibilityIcon from '@mui/icons-material/Visibility';

const ITEM_HEIGHT = 48;

export default function ActionModal({ instance }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "26ch",
            borderRadius: "20px",
          },
        }}
      >
        <div className="p-6 ">
          <div>
            <Link href={`/product/${instance?.slug}`}><span className="mr-3"><VisibilityIcon/></span>View Product</Link>
          </div>
          <div className="flex items-center cursor-pointer">
            <AddIcon className="mr-2" /> <InventoryModal instance={instance} />
          </div>
          <div className="flex items-center cursor-pointer">
            <DriveFileRenameOutlineIcon />
            <ProductDataEditModal handleClosed={handleClose} instance={instance} />
          </div>
          <div className="flex items-center">
            <DeleteForeverIcon />
            <DeleteProduct  instance={instance} />
          </div>
        </div>
      </Menu>
    </div>
  );
}

// const DeleteProduct = ({ instance }) => {
//   const { mutateAsync: dataDelete, isLoading } = useDeleteProductData(
//     instance.id
//   );
//   // console.log(instance);

//   const handleDelete = async () => {
//     try {
//       await dataDelete();
//       // toast.success("Deleted Successfully");
//       // After successful deletion, update the data by refetching the list
//       refetch();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="ml-4 ">
//       <div className="flex justify-between">
//         <button
//           disabled={isLoading}
//           onClick={() => handleDelete(instance.id)}
//           className=""
//         >
//           {isLoading ? "Deleting..." : "Delete"}
//         </button>
//       </div>
//     </div>
//   );
// };

export const DeleteProduct = ({ instance }) => {
  const [open, setOpen] = useState(false); // State to control the dialog

  // Define your delete function from the hook
  const { mutateAsync: dataDelete, isLoading } = useDeleteProductData(
    instance.id
  );

  const handleDelete = async () => {
    try {
      await dataDelete();
      enqueueSnackbar("Product Deleted", {
        variant: "success",
      });
      handleClose(); // Close the dialog after successful deletion
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true); // Open the dialog when the button is clicked
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="">
          <Button
            className="flex  border-none hover:border-none text-black capitalize"
            variant="outlined"
            onClick={handleClickOpen}
          >
            Delete Product
          </Button>
          <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>Delete Product</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this product?</p>
            </DialogContent>
            <div className="flex justify-between p-4">
              <Button onClick={handleClose} variant="outlined" color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-[#ef4444] text-white hover:bg-[#ef4444]"
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Confirm"}
              </Button>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
