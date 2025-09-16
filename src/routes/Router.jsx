// import { createBrowserRouter, Navigate } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "../layout/MainLayout";
import Navber from "../components/Navber";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <App />
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/skill",
        element: <div>skil</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
    ],
  },
]);
