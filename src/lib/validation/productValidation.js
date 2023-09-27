import * as yup from "yup";


export const ProductValidation = () =>
  yup.object().shape({
    product_name: yup.string().required("This field is required"),
    product_category: yup
      .object()
      .shape({
        category_name: yup.string().required(),
      })
      .required("This field is required"),

    original_price: yup.string().required("This field is required"),
    // discounted_price: yup.string().required("This field is required"),
    description: yup.string().required("This field is required"),
    material: yup.string().required("This field is required"),
    wash_instruction: yup.string().required("This field is required"),
    // product_tags: yup.string().required("This field is required"),
    images: yup.array()
    .min(1, "This field is required").max(5).required("This field is required"),
  });



