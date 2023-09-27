import * as yup from "yup";

export const inventoryFormValidation = () =>
  yup.object().shape({
    size: yup.string().required("This field is required"),
    quantity: yup.number().required("This field is required"),
    color: yup.object().required("This field is required"),
    product: yup.object().required("This field is required")
  });
export const inventoryEditFormValidation = () =>
  yup.object().shape({
    quantity: yup.number().required("This field is required"),
  });

