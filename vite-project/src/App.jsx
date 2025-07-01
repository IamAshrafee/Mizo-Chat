import React from "react";
import Registration from "./Components/Pages/Registration";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Components/Pages/Login";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
