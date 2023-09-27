import * as yup from "yup";

export const AllCategoryValidation = () =>
  yup.object().shape({
    product_type: yup.string().required("This field is required"),
    category_name: yup.string().required("This field is required"),
    category_img: yup.string().required("This field is required"),
    size_chart_img: yup.string().required("This field is required"),
 
  });