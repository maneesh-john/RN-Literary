import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Email is invalid").required("Email is mandatory"),
  password: yup.string().min(8, "Password must be atleast 8 characters").required("Password is mandatory")
});