import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@material-tailwind/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import BackendPage from "./pages/backend";
import FrontendPage from "./pages/fronted";
import MyProjects from "./pages/myprojects/myprojects";

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
    path: "/frontend/:id",
    element: <FrontendPage />,
  },
  {
    path: "/my/projects",
    element: <MyProjects />
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
