import "@ant-design/v5-patch-for-react-19";
import { StrictMode } from "react";
import "./assets/css/main.css";
import { createRoot } from "react-dom/client";
import RouterConfig from "./router/router.config.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
);
