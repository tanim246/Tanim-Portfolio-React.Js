import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

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
        element:<Skills />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/education",
        element: <p>e</p>,
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
