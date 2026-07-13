import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./style.css";
import { Pages } from "./pages/pages.config.ts";
import NavBar from "./components/NavBar.tsx";
import { Assets } from "./assets/assets.config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      className="min-h-screen overflow-auto bg-gm-cream bg-cover bg-center"
      style={{ backgroundImage: `url('${Assets.bg_overlay.path}')` }}
    >
      <div className="item relative z-10 m-4 flex flex-col space-y-4">
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
