import { Outlet } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main className="mainContent">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
