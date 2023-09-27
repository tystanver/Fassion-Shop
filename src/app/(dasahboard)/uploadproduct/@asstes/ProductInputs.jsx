// import { QUILLS_FORMAT, QUILL_MODULES } from "@/Utils/QuillEditorOptions";
import { useCategoryDataList } from "@/app/hooks/reactQuery/useAddCategoryDataQuery";
import { Autocomplete, TextField } from "@mui/material";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export const ProductNameTextFiled = ({
  values,
  touched,
  errors,
  handleChange,
}) => {
  return (
    <div>
      <TextField
        fullWidth
        required
        size="small"
        value={values.product_name}
        error={touched.product_name && Boolean(errors.product_name)}
        helperText={touched.product_name && errors.product_name}
        className="w-full lg:mt-4"
        name="product_name"
        onChange={handleChange}
        label="Product Name"
      />
    </div>
  );
};

export const PriceFiled = ({ values, touched, errors, handleChange }) => {
  return (
    <div>
      <TextField
        required
        size="small"
        value={values.original_price}
        error={touched.original_price && Boolean(errors.original_price)}
        helperText={touched.original_price && errors.original_price}
        className="w-full lg:mt-4"
        name="original_price"
        onChange={handleChange}
        label="Price"
      />
    </div>
  );
};
export const DiscountPriceFiled = ({
  values,
  touched,
  errors,
  handleChange,
}) => {
  return (
    <div>
      <TextField
        size="small"
        value={values.discounted_price}
        error={touched.discounted_price && Boolean(errors.discounted_price)}
        helperText={touched.discounted_price && errors.discounted_price}
        className="w-full lg:mt-4"
        name="discounted_price"
        onChange={handleChange}
        label="Discount Price"
      />
    </div>
  );
};

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 }]

export const CategoryAutoCompleteFiled = ({
  values,
  setValue,
  touched,
  errors,
}) => {
  // const { data } = useCategoryDataList();

  return (
    <div>
      {/* {data && ( */}
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
      {/* )} */}
    </div>
  );
};





// React Quill

export const ProductDescriptionReactQuill = ({
  values,
  setValue,
  errors,
  touched,
}) => {
  return (
    <div>
      <ReactQuill
        required
        className="h-40 mb-12"
        theme="snow"
        // modules={QUILL_MODULES}
        // formats={QUILLS_FORMAT}
        error={touched.description && Boolean(errors.description)}
        value={values?.description}
        name="description"
        onChange={(e) => {
          setValue(e);
          // setFieldValue("description", e)
        }}
      ></ReactQuill>
    </div>
  );
};

export const MaterialDescriptionReactQuill = ({
  values,
  setValue,
  errors,
  touched,
}) => {
  return (
    <div>
      <ReactQuill
        required
        className="h-40 mb-12"
        theme="snow"
        // modules={QUILL_MODULES}
        // formats={QUILLS_FORMAT}
        error={touched.material && Boolean(errors.material)}
        value={values?.material}
        name="material"
        onChange={(e) => {
          setValue(e);
          // setFieldValue("description", e)
        }}
      ></ReactQuill>
    </div>
  );
};
export const WashInstructionReactQuill = ({
  values,
  setValue,
  errors,
  touched,
}) => {
  return (
    <div>
      <ReactQuill
        required
        className="h-40 mb-12"
        theme="snow"
        // modules={QUILL_MODULES}
        // formats={QUILLS_FORMAT}
        error={touched.wash_instruction && Boolean(errors.wash_instruction)}
        value={values?.wash_instruction}
        name="wash_instruction"
        onChange={(e) => {
          setValue(e);
          // setFieldValue("description", e)
        }}
      ></ReactQuill>
    </div>
  );
};

export const AddProductTagFiled = ({
  values,
  touched,
  errors,
  handleChange,
}) => {
  return (
    <div>
      <TextField
        size="small"
        value={values.product_tags}
        error={touched.product_tags && Boolean(errors.product_tags)}
        helperText={touched.product_tags && errors.product_tags}
        className="w-full mt-4"
        name="product_tags"
        onChange={handleChange}
        label="Product Tag"
      />
    </div>
  );
};
