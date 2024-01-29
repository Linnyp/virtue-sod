import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/services";
import Estimates from "./pages/estimates";
import Types from "./pages/types";
import Maintenance from "./pages/maintenance";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/virtue-sod/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/estimates" element={<Estimates />} />
          <Route path="/types" element={<Types />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
