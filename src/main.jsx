import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import AuthProviders from './AuthProvider/AuthProviders.jsx';
import Login from './Page/LoginAndSignUp.jsx/Login.jsx';
import Register from './Page/LoginAndSignUp.jsx/Register.jsx';
import PrivateRoute from './Router/PrivateRoute.jsx';
import Dashboard from './Layout/Dashboard';
import AddProducts from './Page/Dashboard/AddProducts';
import GetProducts from './Page/Dashboard/GetProducts';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
  , {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'add-products',
        element: <AddProducts></AddProducts>
      },
      {
        path: 'product-list',
        element: <GetProducts></GetProducts>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthProviders>



  </React.StrictMode>,
)
