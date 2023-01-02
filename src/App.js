import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Wrapper from "./pages/Wrapper";
import TotalPrice from "./pages/TotalPrice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/wrappers" element={<Wrapper />} />
        <Route path="/totalprice" element={<TotalPrice />} />
      </Routes>
    </div>
  );
}

export default App;
