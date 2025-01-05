import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import DataProvider from "./provider/DataProvider";
import { routes } from "./routes/Router";
const helmetContext = {};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <DataProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </DataProvider>
    </HelmetProvider>
  </StrictMode>
);
