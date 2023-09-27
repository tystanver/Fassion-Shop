import * as yup from "yup";

export const OrderValidation = () =>
  yup.object().shape({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    phone_number: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    address: yup.string().required("This field is required"),
    // notes: yup.string().required("This field is required"),
  });
