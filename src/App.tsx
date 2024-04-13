import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Types from "./pages/types";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App bg-emerald-700">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/virtue-sod/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/types" element={<Types />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
