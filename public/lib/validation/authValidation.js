import * as yup from "yup";

export const adminLoginFormValidation = () =>
  yup.object().shape({
    phone_number: yup.number().required("Phone number is required"),
    password: yup.string().required("Password is required"),
  });


  export const signupFormValidation = () =>
  yup.object().shape({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    phone_number: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    password: yup.string().required("Password is required"),
  });