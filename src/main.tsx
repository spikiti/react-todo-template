import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App.tsx";

import "./styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
