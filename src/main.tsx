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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppStateProvider reducer={globalReducers} initialState={initialState}>
        <App />
      </AppStateProvider>
    </BrowserRouter>
  </StrictMode>
);
