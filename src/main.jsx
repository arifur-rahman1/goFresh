import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Router/router.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
