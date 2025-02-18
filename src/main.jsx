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
	<HashRouter basename="/CV-Portal_V.2_React">
		<Routes>
			<Route element={<App />}>
				{/* App is the main layout, as only changing part is content */}
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="cv" element={<CV />} />
				<Route path="portfolio" element={<Portfolio />} />

				{/* Catch-all route for 404 page */}
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
