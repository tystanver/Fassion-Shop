import * as yup from "yup";

export const landingCategoryValidation = () =>
  yup.object().shape({
    short_description: yup.string(),
    bg_img: yup.string().required("This field is required"),
    category: yup.object().required("This field is required")
  });
