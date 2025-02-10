import { useState } from "react";

import PortfolioCard from "../components/portfolioCard";

const Portfolio = () => {
	const [selected, setSelected] = useState("Curated");

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
				))}{" "}
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
			<div className="portfolioCards">
				{selected === "Curated" ? (
					<>
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<div className="fillerDiv" />
						<div className="fillerDiv" />
						<div className="fillerDiv" />
					</>
				) : (
					<>
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
					</>
				)}
			</div>
		</div>
	);
};

export default Portfolio;
