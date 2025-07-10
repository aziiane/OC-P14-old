import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages";
import EmployeeList from "./pages/employee-list";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
