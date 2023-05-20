import { createBrowserRouter } from "react-router-dom";
import Main from "../shared/Main";
import Home from "../home/Home";
import Login from "../registretion/Login";
import Register from "../registretion/Register";
import AddToy from "../AddToy/AddToy";
import MyToys from "../myToy/MyToys";
import AllToys from "../AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
        }
      ]
    },
  ]);

  export default router;