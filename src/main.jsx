import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; 

/* Component imports */
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import CV from "./pages/cv.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Home from "./pages/home.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cv" element={<CV />} />
        <Route path="portfolio" element={<Portfolio />} />
        
        <Route
          path="*"
          element={
            <div className="homeDiv">
              <h1>404 - Not Found</h1>
              <p>Sorry, the page you are looking for does not exist.</p>
            </div>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
);
