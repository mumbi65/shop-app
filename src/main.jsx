import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ProductDetails from './components/productcontent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'productcontent',
    element:<ProductDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
