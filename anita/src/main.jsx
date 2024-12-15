import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './Pages/LandingPage.jsx'
import { SignUpForm } from './components/Authentication/SignUpForm.jsx';
import { SignInForm } from './components/Authentication/SignInForm.jsx';
import PersonalInformation from './Pages/personalinfo.jsx';
import Home from './Pages/Home.jsx';
import { GamingPortal } from './components/GamePortal/GamePortal.jsx';
import{VolunteerForm} from './Pages/eventjoin.jsx';
import React from 'react';
import Mines from './Pages/Games/Mines/Mines';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';

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
    path: "/mines",
    element: <Mines/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/info",
    element: <PersonalInformation/>,
  },
  
  {
    path: "/volunteerform",
    element: <VolunteerForm/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
