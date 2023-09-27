import * as yup from "yup";

export const BulkOrderValidation = () =>
  yup.object().shape({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
    phone_number: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    shipping_address: yup.string().required("This field is required"),
    business_name: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    state: yup.string().required("This field is required"),
    country: yup.string().required("This field is required"),
    zip_code: yup.string().required("This field is required"),
    deadline: yup.string().required("This field is required"),
    budget: yup.string().required("This field is required"),
    instruction: yup.string().required("This field is required"),
    style: yup.string().required("This field is required"),
    size_gender_quantity: yup.string().required("This field is required"),
    // print_embellishment: yup.string().required("This field is required"),
    region: yup.string().required("This field is required"),
  });