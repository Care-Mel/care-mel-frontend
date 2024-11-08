import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
// import Service from "./pages/Service";
import ServicePage from "./pages/Service";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";
// import About from "./pages/About";
// import Service from "./pages/Service";
// import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/service"
            element={
              <PageTransition>
                <ServicePage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
