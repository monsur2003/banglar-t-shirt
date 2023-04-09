import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Orders from "./components/Orders/Orders";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Home from "./components/Home/Home";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("tshirts.json"),
         },
         {
            path: "/order",
            element: <Orders></Orders>,
         },
         {
            path: "/contacts",
            element: <Contacts></Contacts>,
         },
         {
            path: "/about",
            element: <About></About>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
