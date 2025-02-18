import { useState, useEffect } from "react";
import PortfolioCard from "../components/portfolioCard";

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
	const [curatedProjects, setCuratedProjects] = useState([]);
	const [githubProjects, setGithubProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(""); 

	// Set projects based on selected category
	useEffect(() => {
		if (selected === "Curated") {
			setProjects(curatedProjects);
		} else {
			setProjects(githubProjects);
		}
	}, [curatedProjects, githubProjects, selected]);

	// Fetch data from JSON file and GitHub API when component mounts
	useEffect(() => {
		setLoading(true);
		fetch("/CV-Portal_V.2_React/assets/portfolio.json")
			.then((res) => res.json())
			.then((data) => {
				setCuratedProjects(data.projects);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setError("Error fetching data");
			})
			.finally(() => setLoading(false));

		fetch("https://api.github.com/users/MyNameJaeff/repos")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setGithubProjects(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setError("Error fetching data");
			});
	}, []);

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
						<p>{error}</p>
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
