import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
// styles
import "./index.css";
// components
import App from "./App.tsx";
// interceptors
import { AxiosInterceptor } from "./interceptors/axiosInterceptors.ts";
// utils
import { SnackbarUtilitiesConfigurator } from "./utils/snackbarSettings.ts";

AxiosInterceptor();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <App />
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
