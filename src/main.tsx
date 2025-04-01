import { StrictMode } from "react";
import "./assets/css/main.css";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/home/home.page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage pageTitle=" Login Page" />
  </StrictMode>
);
