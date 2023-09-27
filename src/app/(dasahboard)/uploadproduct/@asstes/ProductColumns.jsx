import ActionModal from "./ActionModal";
import ProductCustomStockCell from "./ProductCustomStockCell";
import ProductTableCell from "./ProductTableCell";

export const ALL_PRODUCT_COLUMNS = [
  { field: "id", headerName: "ID", width: 100, sortable: false },

  {
    field: "product_image", // Rename this field to "action" to fix the error
    headerName: "Product Image",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: ({ row }) => {
      return (
        <>
          <ProductTableCell instance={row} />
        </>
      );
    },
  },
  {
    field: "product_name",
    headerName: "Product Name",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
  },

  {
    field: "product_category",
    headerName: "Category",
    sortable: false,
    width: 150,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: ({ row }) => {
      return (
        <>
          <div className="capitalize">
            <p>{row?.product_category?.product_type}</p>
            <p>{row?.product_category?.category_name}</p>
          </div>
        </>
      );
    },
  },
  {
    field: "original_price",
    headerName: "Original Price",
    type: "number",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "discounted_price",
    headerName: "Discount Price",
    type: "number",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: ({ row }) => {
      return (
        <>
          <div className="capitalize">
            <p>{row?.discounted_price ? row.discounted_price : "N/A"}</p>
          </div>
        </>
      );
    },
  },
  {
    field: "is_signature",
    headerName: "Is Signature",
    type: "number",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: ({ row }) => {
      return (
        <>
          <div className="ml-7">
            {row.is_signature ? (
              <span style={{ color: "green" }}>&#10004;</span>
            ) : (
              <span style={{ color: "red" }}>&#10008;</span>
            )}
          </div>
        </>
      );
    },
  },
  {
    field: "is_designer",
    headerName: "Is Designer",
    type: "number",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: ({ row }) => {
      return (
        <>
          <div className="ml-7">
            {row.is_designer ? (
              <span style={{ color: "green" }}>&#10004;</span>
            ) : (
              <span style={{ color: "red" }}>&#10008;</span>
            )}
          </div>
        </>
      );
    },
  },
  {
    field: "is_discounted",
    headerName: "Is Discounted",
    type: "number",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "left",
    align: "left",
    renderCell: ({ row }) => {
      return (
        <>
          <div className="ml-7">
            {row.is_discounted ? (
              <span style={{ color: "green" }}>&#10004;</span>
            ) : (
              <span style={{ color: "red" }}>&#10008;</span>
            )}
          </div>
        </>
      );
    },
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 150,
    editable: false,
    sortable: false,
    headerAlign: "center",
    align: "center",
    renderCell: ({ row }) => {
      return (
        <>
          <ProductCustomStockCell instance={row} />
        </>
      );
    },
  },

  {
    field: "action", // Rename this field to "action" to fix the error
    headerName: "Action",
    width: 100,
    editable: false,
    sortable: false,
    renderCell: ({ row }) => {
      return (
        <>
          <ActionModal instance={row} />
        </>
      );
    },
  },
];
