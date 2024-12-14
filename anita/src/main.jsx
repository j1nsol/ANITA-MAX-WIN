import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './Pages/LandingPage.jsx'
import { SignUpForm } from './components/Authentication/SignUpForm.jsx';
import { SignInForm } from './components/Authentication/SignInForm.jsx';
import PersonalInformation from './Pages/personalinfo.jsx';
import Home from './Pages/Home.jsx';
import { GamingPortal } from './components/GamePortal/GamePortal.jsx';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import GamePage from './Pages/GamePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/games",
    element: <GamingPortal/>,
  },
  {
    path: "/signup",
    element: <SignUpForm/>,
  },
  {
    path: "/login",
    element: <SignInForm/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/info",
    element: <PersonalInformation/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
