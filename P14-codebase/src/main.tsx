import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages";
import EmployeeList from "./pages/employee-list";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <Routes>
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </StrictMode>
);
