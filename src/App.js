import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
