import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // korrigerad import

/* Component imports */
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import CV from "./pages/cv.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Home from "./pages/home.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route element={<App />}> {/* App is the main layout, as only changing part is content */}
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="cv" element={<CV />} />
				<Route path="portfolio" element={<Portfolio />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);
