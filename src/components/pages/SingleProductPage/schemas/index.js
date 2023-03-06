import * as Yup from "yup";

const validationSchemas = Yup.object({
  userName: Yup.string()
    .min(2, "must be more than 2 charecter")
    .max(20, "must be less than 20 charecter")
    .required("name is required"),
  userEmail: Yup.string()
    .email("example@gmail.com")
    .required("email is required"),
  rating: Yup.string().required("rating is required"),
  reviewTitle: Yup.string()
    .min(2, "must be more than 2 charecter")
    .max(25, "must be less than 25 charecter")
    .required("title is required"),
  reviewComment: Yup.string()
    .max(1500, "must me less than 1500")
    .required("comment is required"),
});

export default validationSchemas;
