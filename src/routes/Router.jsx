import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/FullHome/Home/Home";
import AllFood from "../pages/allFood/AllFood";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import FoodDetails from "../pages/allFood/FoodDetails";
import ErrorPage from "../pages/error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/profilePage/Dashboard";
import AddItem from "../pages/profilePage/AddItem";
import AllAddedItems from "../pages/profilePage/AllAddedItems";
import AllOrderedItem from "../pages/profilePage/AllOrderedItem";
import Order from "../pages/Order/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allfood',
          element:<AllFood></AllFood>,
          // loader: (currentPage, itemPerPage) => fetch(`http://localhost:5000/allfood?page=${currentPage}&size=${itemPerPage}`)
        },
        {
          path: '/blog',
          element: <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        },
        {
          path: '/allfood/:id',
          element: <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allfood/${params.id}`)
        },
        {
          path: '/order',
          element: <Order></Order>
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
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: '/dashboard/additem',
          element: <AddItem></AddItem>
        },
        {
          path: '/dashboard/allAddedItems',
          element: <AllAddedItems></AllAddedItems>
        },
        {
          path: '/dashboard/allOrderedItems',
          element:<AllOrderedItem></AllOrderedItem>
        }
      ]
    }
    
  ]);

export default router;