import axios from "axios";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import "./index.css";
import Add from "./pages/Add";
import Details from './pages/Details';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Update from './pages/Update';
import AuthProvider from "./providers/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        loader: ()=> axios.get('https://johu-coffee-backend.vercel.app/coffees'),
        element: <Home></Home>
      },
      {
        path: '/add',
        element: <Add></Add>
      },
      {
        path: '/update/:id',
        loader: ({params})=> axios.get(`https://johu-coffee-backend.vercel.app/coffees/${params.id}`),
        element: <Update></Update>
      },
      {
        path: '/coffee/:id',
        loader: ({params}) => axios.get(`https://johu-coffee-backend.vercel.app/coffees/${params.id}`),
        element: <Details></Details>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
    errorElement: <Error></Error>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);