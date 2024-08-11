import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "normalize.css";
import "./assets/sass/main.scss";

import ErrorPage from "./pages/error-page";
import Layout from "./layout";
import Home from "./pages/home";
import Products from "./pages/products";
import StoresLayout from "./layout/stores";
import Stores, { Store } from "./pages/stores";

import { loader as productsLoader } from "./pages/products/utils";
import { loader as storesLoader } from "./pages/stores/utils";
import { loader as storeLoader } from "./pages/stores/store/utils";

const { BASE_URL } = import.meta.env;

const router = createBrowserRouter([
  {
    path: BASE_URL,
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
            path: `${BASE_URL}products/:category`,
            element: <Products />,
            loader: productsLoader,
          },
          {
            path: `${BASE_URL}stores`,
            element: <StoresLayout />,
            children: [
              {
                index: true,
                element: <Stores />,
                loader: storesLoader,
              },
              {
                path: ":storeId",
                element: <Store />,
                loader: storeLoader,
              },
            ],
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
