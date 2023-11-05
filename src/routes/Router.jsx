import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/FullHome/Home/Home";
import AllFood from "../pages/allFood/AllFood";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";

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
          element:<AllFood></AllFood>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    
  ]);

export default router;