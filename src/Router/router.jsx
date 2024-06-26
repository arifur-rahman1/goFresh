import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import CheckOut from "../Pages/CheckOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import PrivateRoute from "./PrivateRoute";
import UserReview from "../Pages/UserReview";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:"/checkout/:id",
          element:<CheckOut></CheckOut>,
          loader:({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path:'/cart',
          element:<PrivateRoute><Cart></Cart></PrivateRoute>,

        },
        {
          path:'/userReview',
          element:<PrivateRoute><UserReview></UserReview></PrivateRoute>,

        },
      ],
    },
    
  ]);


export default router;