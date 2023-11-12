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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}><Root></Root></RouterProvider>
  </React.StrictMode>,
)
