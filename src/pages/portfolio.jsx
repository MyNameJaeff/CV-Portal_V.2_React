import { useState, useEffect } from "react";
import PortfolioCard from "../components/portfolioCard";

/* import "../css/portfolio.css"; */

const Portfolio = () => {
	const [selected, setSelected] = useState("Curated");
	const [projects, setProjects] = useState([]);

	const GetDataFromGithub = async () => {
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
			console.log(data);
			setProjects(data);
		} catch (error) {
			console.error("Error fetching JSON: ", error);
		}
	};

	const GetDataFromJSON = async () => {
		try {
			const response = await fetch("/assets/portfolio.json");
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			if (!Array.isArray(data.projects)) {
				throw new Error('Invalid or missing "projects" array in JSON.');
			}
			console.log(data.projects);
			setProjects(data.projects);
		} catch (error) {
			console.error("Error fetching JSON: ", error);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <No. I want this to run once the selected state changes. I don't want it to run every time the projects state changes.>
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
				{projects.map((project) => (
					<PortfolioCard key={project.number} project={project} />
				))}

				{/* Add empty divs to make the number of cards a multiple of 4 */}
				{projects.length % 4 !== 0 &&
					Array.from({ length: 4 - (projects.length % 4) }).map((_, index) => (
						<div key={`empty-${index}-${Math.random()}`} className="emptyDiv" />
					))}
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
      `}</style>
		</div>
	);
};

export default Portfolio;
