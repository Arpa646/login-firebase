import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './authentication/SignUp.jsx';
import SignIn from './authentication/SignIn.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<SignUp></SignUp>
  
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
   <RouterProvider router={router} />

  </AuthProvider>
  
)




