import * as yup from "yup";

export const loginSchema = yup.object().shape({
  login: yup.string().required("Логін є обов'язковим полем"),
  password: yup.string().required("Пароль є обов'язковим полем"),
});

export const addSchema = yup.object().shape({
  type: yup.string().required("Обов'язкове поле"),
  title: yup.string().required("Обов'язкове поле"),
  price: yup.string().required("Обов'язкове поле"),
  quantity: yup.string().required("Обов'язкове поле"),
  description: yup
    .string()
    .required("Обов'язкове поле")
    .min(10, "Менше 10 символів"),
});
