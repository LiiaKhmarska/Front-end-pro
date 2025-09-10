import * as yup from "yup";

export const loginSchema = yup.object().shape({
  login: yup.string().required("Логін є обов'язковим полем"),
  password: yup.string().required("Пароль є обов'язковим полем"),
});
