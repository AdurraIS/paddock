import { Catalog } from "./Pages/Catalog/Catalog";
import { Pilots } from "./Pages/Pilots/Pilots";
import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";

// router

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog />,
  },
  {
    path: "/Piloto",
    element: <Pilots />,
  },
]);
// fim router

export default function App() {


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
