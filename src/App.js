import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

/** importing pages */
/** import all components */
import Home from './pages/home';
import Student from './pages/studentlogin'
import Adminlogin from './pages/adminlogin';

/** root routes */
const router = createBrowserRouter([
  {
      path : '/',
      element : <Home></Home>
  },
  {
    path : '/studentlogin',
    element : <Student></Student>
  },
  {
    path : '/adminlogin',
    element : <Adminlogin></Adminlogin>
  }
])

export default function App() {
  
return (
      <main>
         <RouterProvider router={router}></RouterProvider>
      </main>
)
}
