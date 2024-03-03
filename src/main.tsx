import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@material-tailwind/react";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import BackendPage from "./pages/backend";
import FrontendPage from "./pages/fronted";
import MyProjects from "./pages/myprojects/myprojects";
import LoginPage from "./pages/login/login";
import GetStarted from "./pages/documents/getstarted";
import JavascriptDoc from "./pages/documents/javascript";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/backend/:id",
    element: <BackendPage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/frontend/:id",
    element: <FrontendPage />,
  },
  {
    path: "/my/projects",
    element: <MyProjects />
  },
  {
    path: "/get-started",
    element: <GetStarted />
  },
  {
    path: "/*",
    element: <Navigate to="/my/projects" replace />
  },
  {
    path: "/doc-js",
    element: <JavascriptDoc />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
