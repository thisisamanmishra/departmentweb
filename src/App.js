import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

/** importing pages */
/** import all components */
import Home from './pages/home';
import Student from './pages/studentlogin'

/** root routes */
const router = createBrowserRouter([
  {
      path : '/',
      element : <Home></Home>
  },
  {
    path : '/studentlogin',
    element : <Student></Student>
  }
])

export default function App() {
  
return (
      <main>
         <RouterProvider router={router}></RouterProvider>
      </main>
)
}
