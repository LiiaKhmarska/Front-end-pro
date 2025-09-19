import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from"../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { GoodsList } from "../pages/GoodsList";
import{AddEditForm} from '@components'

const routerConfig = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, Component: HomePage },
      { path: "/:categoryTitle", Component: GoodsList },
      { path: "/:categoryTitle/:action", Component: AddEditForm },
      { path: "/*", Component: ErrorPage },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
