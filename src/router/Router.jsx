import { createBrowserRouter } from "react-router-dom";
import Main from "../shared/Main";
import Home from "../home/Home";
import Login from "../registretion/Login";
import Register from "../registretion/Register";
import AddToy from "../AddToy/AddToy";
import MyToys from "../myToy/MyToys";
import AllToys from "../AllToys/AllToys";
import UpdateToy from "../myToy/UpdateToy";
import Blog from "../blog/Blog";
import UploadDetails from "../AllToys/UploadDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../error/error";
import CategoryDetails from "../home/CategoryDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path:'addToy',
          element: <AddToy></AddToy>
        },
        {
          path: 'myToys',
          element: <MyToys></MyToys>
        },
        {
          path: 'allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: 'updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`http://localhost:5000/uploads/${params.id}`)
        },
        {
          path: 'uploadDetails/:id',
          element: <PrivateRoute><UploadDetails></UploadDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/uploads/${params.id}`)
        },
        {
          path: 'categoryDetails/:id',
          element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/categoryToys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;