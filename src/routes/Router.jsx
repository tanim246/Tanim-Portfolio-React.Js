import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

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
        element: <Experience />,
      },
      {
        path: "/education",
        element: <p></p>,
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
