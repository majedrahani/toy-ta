import { createBrowserRouter } from "react-router-dom";
import Main from "../shared/Main";
import Home from "../home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;