import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Leyout/Home/Home';
import AddCoffee from './Leyout/ADD-Coffee/AddCoffee';
import CardUbdat from './Card/CardUbdat';
import Login from './Leyout/LogIn/Login';
import SingUp from './Leyout/SingUp/SingUp';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=> fetch('http://localhost:5000/AddCoffee')
      },
      {
        path:'/addCoffee',
        element:<AddCoffee/>
      },
      {
        path:'/addCoffee/:id',
        element:<CardUbdat/>,
        loader: ({params})=> fetch(`http://localhost:5000/AddCoffee/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}><Root></Root></RouterProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
