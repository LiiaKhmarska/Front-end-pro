import * as Yup from "yup";

const title = Yup.string()
  .min(5, "Minimum 5 symbols")
  .max(15, "Maximum 15 symbols")
  .required("Field is required");

const task = Yup.string()
  .min(5, "Minimum 5 symbols")
  .max(150, "Maximum 150 symbols")
  .required("Field is required");
export const schemas = {
  custom: Yup.object().shape({
    title,
    task,
  }),
};

export const initialValues = {
  title: "",
  task: "",
};
