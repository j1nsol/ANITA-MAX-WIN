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
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? children : <Navigate to="/" />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/games",
    element: (
      <PrivateRoute>
        <GamingPortal />
      </PrivateRoute>
    ),
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/login",
    element: <SignInForm />,
  },
  {
    path: "/mines",
    element: (
      <PrivateRoute>
        <Mines />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/info",
    element: (
      <PrivateRoute>
        <PersonalInformation />
      </PrivateRoute>
    ),
  },
  {
    path: "/volunteerform",
    element: (
      <PrivateRoute>
        <VolunteerForm />
      </PrivateRoute>
    ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
