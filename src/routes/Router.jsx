import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";
import Education from "../components/Education";

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
        element: <About />,
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
        element: <Education />,
      },
      {
        path: "/projects",
        element: <div className="text-center mt-50 relative animate-bounce text-5xl">Up Coming....</div>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
