import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {
  AppStateProvider,
  globalReducers,
  initialState,
} from "./store/index.tsx";
import { Toaster } from "react-hot-toast";
import AppLoader from "./modules/common/layout/AppLoader.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <AppStateProvider reducer={globalReducers} initialState={initialState}>
          <AppLoader />
          <App />
        </AppStateProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
