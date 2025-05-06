import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './Pages/LandingPage.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import { SignUpForm } from './components/Authentication/SignUpForm.jsx';
import { SignInForm } from './components/Authentication/SignInForm.jsx';
import PersonalInfoForm from './Pages/personalinfo.jsx';
import Home from './Pages/Home.jsx';
import { GamingPortal } from './components/GamePortal/GamePortal.jsx';
import{VolunteerForm} from './Pages/eventjoin.jsx';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { UserVerificationForm } from './Pages/UserVerify.jsx';
import {EventForm} from './Pages/creatingevents.jsx';
import Mines from './Pages/Games/Mines/Mines';
import HiloCardGame from './Pages/Games/Hilo/Hilo.jsx';
import Events from './Pages/Events/EventsPage.jsx';
import SlotMachine from './Pages/Games/Fruity/fruity.jsx';

import ComingSoon from './Pages/comingsoon.jsx';
import { AdminDashboard } from './Pages/Admin/AdminDashboard.jsx';
//import Profile from './Pages/Profile.jsx';
import EventDashboard from './Pages/eventdashboard.jsx';
import Profile from './Pages/Profile/profile-with-managed-events.jsx';
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
    path: "/aboutus",
    element: <AboutUs />,
  },{
    path: "/dashboard",
    element: <AdminDashboard />,
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
    path: "/verify",
    element: <UserVerificationForm />,
  },
  {
    path: "/login",
    element: <SignInForm />,
  },
  {
    path: "/games/hilo",
    element: (
      <PrivateRoute>
        <HiloCardGame />
      </PrivateRoute>
    )
  },
  {
    path: "/games/slot",
    element: (
      <PrivateRoute>
        <SlotMachine />
      </PrivateRoute>
    )
  },
  {
    path: "/games/mines",
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
    path: "/Personal_Information",
    element: (
      <PrivateRoute>
        <PersonalInfoForm/>
      </PrivateRoute>
    ),
  },
  {
    path: "/events/create",
    element: (
      <PrivateRoute>
        <EventForm />
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
  {
    path: "/events",
    element: (
      <PrivateRoute>
        <Events />
      </PrivateRoute>
    ),
  },
  {
    path: "/events/:useruid/:eventuid",
    element: (
      <PrivateRoute>
        <VolunteerForm />
      </PrivateRoute>
    ),
  },
  {
    path: "/events/:useruid/:eventuid/EventDashboard",
    element: (
      <PrivateRoute>
        <EventDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile/>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: (
    <PrivateRoute>
    <ComingSoon />
    </PrivateRoute>
    ) ,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
