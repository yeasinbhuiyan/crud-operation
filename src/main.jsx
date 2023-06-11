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
        path: '/signUp',
        element: <Register></Register>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProviders>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProviders>


  </React.StrictMode>,
)
