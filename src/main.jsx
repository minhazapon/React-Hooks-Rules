import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Challenges from './hooks/Challenges';
import Registration from './registration/Registration';
import Login from './registration/Login';
import Contact from './registration/Contact';
import Creator from './data of creator/Creator';
import Effect from './useEffect/useEffect';
import Fetch from './useEffect/InfiniteFetch';
import Api from './fetch API/API';
import AsyncAwait from './asyn/await/AsynAwait';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/challenges",
        element: <Challenges></Challenges>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/creator",
        element: <Creator></Creator>,
      },
      {
        path: "/effect",
        element: <Effect></Effect>,
      },
      {
        path: "/infinite",
        element: <Fetch></Fetch>,
      },
      {
        path: "/pokemon",
        element: <Api></Api>,
      },
      {
        path: "/async",
        element: <AsyncAwait></AsyncAwait>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
