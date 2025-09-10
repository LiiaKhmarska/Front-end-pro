import { ErrorPage } from "../components/pages/ErrorPage";
import { HomePage } from "@components/HomePage";
// import { About } from "@components/About,";
// import { Contacts } from "@components/Contacts";
import { createBrowserRouter } from "react-router-dom";
import { GoodsList } from "../components/pages/GoodsList";

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, Component: HomePage },
      { path: "/:categoryTitle", Component: GoodsList },
      { path: "/*", Component: ErrorPage },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
