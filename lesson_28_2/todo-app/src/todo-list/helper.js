import * as yup from "yup";

const regx = /^[a-zA-Z0-9а-яА-Я\s_?!'"-]+$/gm;

export const todoSchema = yup.object().shape({
  todo: yup
    .string()
    .required("Task field is required.")
    .min(5, "The field must contain at least 5 characters.")
    .max(50, "The field must contain no more than 50 characters.")
    .matches(regx, "The field contains invalid characters."),
});
