import axios from "axios";
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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Update from './pages/Update';
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        loader: ()=> axios.get('http://localhost:5000/coffees'),
        element: <Home></Home>
      },
      {
        path: '/add',
        element: <Add></Add>
      },
      {
        path: '/update/:id',
        loader: ({params})=> axios.get(`http://localhost:5000/coffees/${params.id}`),
        element: <Update></Update>
      },
      {
        path: '/coffee/:id',
        loader: ({params}) => axios.get(`http://localhost:5000/coffees/${params.id}`),
        element: <Details></Details>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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