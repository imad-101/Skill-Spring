import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./RouterComponents/Contact.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./RouterComponents/Account.jsx";
import Recourses from "./RouterComponents/Recourses.jsx";
import InterviewTips from "./RouterComponents/InterviewTips.jsx";
import RoutLearn from "./RouterComponents/RoutLearn.jsx";
import RoutServices from "./Services/RoutServices.jsx";
import Dashboard from "./RouterComponents/Dashboard.jsx";
import PostGig from "./RouterComponents/PostGig.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "recources",
    element: <Recourses />,
  },
  {
    path: "tips",
    element: <InterviewTips />,
  },
  {
    path: "learn",
    element: <RoutLearn />,
  },
  {
    path: "services",
    element: <RoutServices />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "postgig",
    element: <PostGig />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
