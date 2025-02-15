import { useState, useEffect } from "react";
import PortfolioCard from "../components/portfolioCard";

/* import "../css/portfolio.css"; */

const getCheckerboardClass = (index) => {
	const row = Math.floor(index / 4);
	const column = index % 4;
	const isLight =
		(row % 2 === 0 && column % 2 === 0) || (row % 2 !== 0 && column % 2 !== 0);
	return isLight ? "checkerboard-light" : "checkerboard-dark";
};

const Portfolio = () => {
	const [selected, setSelected] = useState("Curated");
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(""); // Error state

	/* An loooong request to test loading animation */
	/* const GetDataFromGithub = async () => { 
		setLoading(true);
		try {
			// Simulate the loading without fetching any data
			await new Promise((resolve) => setTimeout(resolve, 200000)); // Simulate a 2-second delay
			setProjects([]); // Clear any previous data (if needed)
		} catch (error) {
			console.error("Error: ", error);
		} finally {
			setLoading(false);
		}
	}; */

	const GetDataFromGithub = async () => {
		setLoading(true);
		setError(""); // Reset error before each fetch attempt
		try {
			const response = await fetch(
				"https://api.github.com/users/MyNameJaeff/repos",
			);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			if (!Array.isArray(data)) {
				throw new Error("Invalid or missing array in JSON.");
			}
			setProjects(data);
		} catch (error) {
			setError(`Error fetching JSON: ${error.message}`); // Set error message
		} finally {
			setLoading(false);
		}
	};

	const GetDataFromJSON = async () => {
		setLoading(true);
		setError(""); // Reset error before each fetch attempt
		try {
			const response = await fetch("/assets/portfolio.json");
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			if (!Array.isArray(data.projects)) {
				throw new Error('Invalid or missing "projects" array in JSON.');
			}
			setProjects(data.projects);
		} catch (error) {
			setError(`Error fetching JSON: ${error.message}`); // Set error message
		} finally {
			setLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (selected === "Curated") {
			GetDataFromJSON();
		} else {
			GetDataFromGithub();
		}
	}, [selected]);

	return (
		<div className="portfolioDiv">
			<h1>Portfolio</h1>
			<div className="portfolioSelection">
				{["Curated", "All"].map((option) => (
					<button
						key={option}
						type="button"
						className={selected === option ? "selected" : ""}
						onClick={() => setSelected(option)}
					>
						{option}
					</button>
				))}
			</div>
			<div className="portfolioCards">
				{loading ? (
					<div className="loading-overlay">
						<div className="spinner" />
					</div>
				) : error ? (
					<div className="error-message">
						<p>
							{error} {/* Display error message */}
						</p>
					</div>
				) : (
					<>
						{projects.map((project, index) => (
							<PortfolioCard
								key={project.number}
								project={project}
								className={getCheckerboardClass(index)}
							/>
						))}
						{projects.length % 4 !== 0 &&
							Array.from({ length: 4 - (projects.length % 4) }).map(
								(_, index) => {
									const overallIndex = projects.length + index;
									return (
										<div
											key={`empty-${index}-${Math.random()}`}
											className={`emptyDiv ${getCheckerboardClass(overallIndex)}`}
										/>
									);
								},
							)}
					</>
				)}
			</div>

			<style>{`
        .portfolioSelection button {
          padding: 8px 16px;
          margin: 5px;
          border: 1px solid #ccc;
          background-color: #f8f8f8;
          cursor: pointer;
          transition: 0.3s;
        }
        .portfolioSelection button.selected {
          background-color: #007bff;
          color: white;
          border-color: #007bff;
        }
        .error-message {
          color: red;
          font-size: 16px;
          padding: 10px;
          background-color:rgba(255, 0, 55, 0.1);
          border: 1px solid #f5c6cb;
        }
      `}</style>
		</div>
	);
};

export default Portfolio;
