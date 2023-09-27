import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { Button, Dialog, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";

const ProductCustomStockCell = ({ instance }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="">
        <Button
          className="flex justify-end border-none hover:border-none text-black capitalize"
          variant="outlined"
          onClick={handleClickOpen}
        >
          <SpeakerNotesIcon />
        </Button>
        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>Product Inventory</DialogTitle>
          <DialogContent>
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className='font-semibold text-[16px]'>Size</TableCell>
                      <TableCell className='font-semibold text-[16px]'>Color Name</TableCell>
                      <TableCell className='font-semibold text-[16px]'>Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {instance?.inventory.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.size}</TableCell>
                        <TableCell className='capitalize'>{item.color__color_name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductCustomStockCell;
