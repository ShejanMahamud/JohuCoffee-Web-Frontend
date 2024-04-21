import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Add from "./pages/Add";
import Details from './pages/Details';
import Error from './pages/Error';
import Home from './pages/Home';
import Update from './pages/Update';
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add',
        element: <Add></Add>
      },
      {
        path: '/update',
        element: <Update></Update>
      },
      {
        path: '/coffee/:id',
        element: <Details></Details>
      }
    ],
    errorElement: <Error></Error>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);