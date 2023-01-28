import { Container, LinearProgress } from "@mui/material";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import { useRouteLoading } from "./utils/useRouteLoading";

function App() {
  useRouteLoading();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
