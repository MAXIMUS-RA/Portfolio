import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import Test from "./components/Test.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Test/>}></Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
