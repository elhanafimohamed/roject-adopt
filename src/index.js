import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pagis/Home';
import Css from './pagis/Css';
import Javascript from './pagis/Javascript';
import Html from './pagis/Html';
import Header from './component/header/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1>desole....page not defund </h1>
  },
  {
    path: "/Css",
    element: <Css/>,
  }, 
  {
    path: "/html",
    element: <Html/>,
  },

  {
    path: "/javascript",
    element: <Javascript/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router} />
  </React.StrictMode>
);



