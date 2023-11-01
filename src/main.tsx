import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BackendPage from './pages/backend'
import FrontendPage from './pages/fronted';

const router = createBrowserRouter([
  {
    path: "/backend/:id",
    element: <BackendPage />,
  },
  {
    path: "/frontend/:id",
    element: <FrontendPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
