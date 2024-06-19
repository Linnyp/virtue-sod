import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact";
import Types from "./pages/types";
import Navbar from "./components/navbar";
import { Footer } from "./components/component/footer";
function App() {
  return (
    <div className="App bg-prime">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/types" element={<Types />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
