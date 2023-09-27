import * as yup from "yup";

const phoneReg = /^\+88|0\d{10}/;
const passReg = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])/;

export const profileFormValidation = () =>
  yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone_number: yup
      .string()
      .matches(phoneReg, "Phone number is not valid")
      .max(11)
      .min(11)
      .required("Phone number is required"),
    address: yup.string().required("Address is required"),
    email: yup.string().email(),
  });

export const userFormValidation = () =>
  yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    phone_number: yup
      .string()
      .matches(phoneReg, "Phone number is not valid")
      .max(11)
      .min(11)
      .required("Phone number is required"),
    address: yup.string().required("Address is required"),
    email: yup.string().email(),
  });
export const passChangeFormValidation = () =>
  yup.object().shape({
    new_password1: yup
      .string()
      .matches(
        passReg,
        "Password must be at least 8 characters long, contain at least one uppercase letter, and at least one special character (!@#$%^&*()_+{}[]:;<>,.?~)"
      )
      .required("This field is required"),
    new_password2: yup.string().required("This field is required"),
    old_password: yup.string().required("This field is required"),
  });
