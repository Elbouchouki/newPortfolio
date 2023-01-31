import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { useRouteLoading } from "./utils/useRouteLoading";
import { Navbar } from "./componants/Navbar";

function App() {
  useRouteLoading();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
