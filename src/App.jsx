import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
// import About from "./pages/About";
// import Service from "./pages/Service";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;