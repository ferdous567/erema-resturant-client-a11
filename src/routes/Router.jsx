import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/FullHome/Home/Home";
import AllFood from "../pages/allFood/AllFood";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import FoodDetails from "../pages/allFood/FoodDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allfood',
          element:<AllFood></AllFood>,
          loader: () => fetch('http://localhost:5000/allfood')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/allfood/:id',
          element: <FoodDetails></FoodDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/allfood/${params.id}`)
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }
    
  ]);

export default router;