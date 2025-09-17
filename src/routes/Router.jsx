import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../components/Contact";

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
        element: <App />,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/skills",
        element: <div>Skills Page</div>,
      },
      {
        path: "/experience",
        element: <div>Experience Page</div>,
      },
      {
        path: "/education",
        element: <div>Education Page</div>,
      },
      {
        path: "/projects",
        element: <div>Projects Page</div>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
