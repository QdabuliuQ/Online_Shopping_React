import { Navigate } from 'react-router-dom'
import { lazy } from "react";

const NavPages = lazy(() => import("pages/NavPages/NavPages"))
const Home = lazy(() => import("pages/Home/Home"))
const Category = lazy(() => import("pages/Category/Category"))
const ShoppingCart = lazy(() => import("pages/ShoppingCart/ShoppingCart"))
const Profile = lazy(() => import("pages/Profile/Profile"))
const Search = lazy(() => import("pages/Search/Search"))
const Detail = lazy(() => import("pages/Detail/Detail"))
const GoodsList = lazy(() => import("pages/GoodsList/GoodsList"))
const AddressList = lazy(() => import("pages/AddressList/AddressList"))
const EditAddress = lazy(() => import("pages/EditAddress/EditAddress"))
const Order = lazy(() => import("pages/Order/Order"))
const Result = lazy(() => import("pages/Result/Result"))
const OrderList = lazy(() => import("pages/OrderList/OrderList"))

export default [
  {
    path: '/index',
    element: <NavPages/>,
    children: [
      {
        path: 'home',
        element: <Home/>,
      },
      {
        path: 'category',
        element: <Category/>,
      },
      {
        path: 'shoppingCart',
        element: <ShoppingCart/>,
      },
      {
        path: 'profile',
        element: <Profile/>,
      },
      {
        path: '/index',
        element: <Navigate to='home'/>
      },
    ]
  },
  {
    path: '/search',
    element: <Search/>,
  },
  {
    path: '/detail',
    element: <Detail/>,
  },
  {
    path: '/goodsList',
    element: <GoodsList/>,
  },
  {
    path: '/addressList',
    element: <AddressList/>,
  },
  {
    path: '/editAddress',
    element: <EditAddress/>,
  },
  {
    path: '/order',
    element: <Order/>,
  },
  {
    path: '/result',
    element: <Result/>,
  },
  {
    path: '/orderList',
    element: <OrderList/>,
  },
  {
    path: '/',
    element: <Navigate to='/index'/>
  },
]