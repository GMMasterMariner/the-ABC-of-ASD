import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./style.css";
import { Pages } from "./pages/routes.config.ts";
import NavBar from "./components/NavBar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className="min-h-screen bg-gm-cream bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/img_background.svg')" }}
    >
      <div className="relative z-10 p-4">
        <BrowserRouter>
          <NavBar />
          <Routes>
            {Pages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<page.component />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </StrictMode>,
);
