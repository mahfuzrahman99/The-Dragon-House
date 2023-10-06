import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layOut/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthProvider";
import NewsDetails from "./components/NewsDetails";
import PrivetRout from "./PrivetRout";
import ErrorPage from "./pages/errorPage/ErrorPage";
import CategoryCard from "./pages/shared/leftSideNav/CetegoryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <PrivetRout><Home /></PrivetRout>,
        loader: () => fetch('/news.json')
      },
      {
        path:"/news/:id",
        element:<PrivetRout><NewsDetails/></PrivetRout>,
        loader: () => fetch('/news.json')
      },
      {
        path:"/category/:id",
        element: <CategoryCard/>,
        loader: () => fetch('/news.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
