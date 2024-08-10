import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "./assets/sass/main.scss";

import ErrorPage from "./pages/error-page";
import Layout from "./layout";
import Home from "./pages/home";
import Products from "./pages/products";

import { loader as productsLoader } from "./pages/products/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/products/:category",
            element: <Products />,
            loader: productsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
