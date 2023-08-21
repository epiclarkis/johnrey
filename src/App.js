import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Nav />
    </Router>
  );
}

export default App;