import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
