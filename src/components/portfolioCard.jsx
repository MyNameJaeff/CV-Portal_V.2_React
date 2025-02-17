/* eslint-disable react/prop-types */
import { useState } from "react";

const PortfolioCard = ({ project, className }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Determine if the project is a GitHub repo
	const isGitHubRepo = Object.prototype.hasOwnProperty.call(
		project,
		"full_name",
	);

	// Open modal and prevent body scroll
	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = "hidden";
	};

	// Close modal and restore body scroll
	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "auto";
	};

	return (
		<div className={`card ${className}`}>
			<div className="cardHeader">
				<h3>{project.name}</h3>
				<button className="cardButton" type="button" onClick={openModal}>
					Read more!
				</button>
			</div>
			<div className="cardBody">
				<p>
					{/* Use text for custom projects, description for GitHub repos */}
					{project.created_at && (
						<>
							<span>
								<strong>Created:</strong>{" "}
								{new Date(project.created_at).toLocaleString("sv-SE", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
								})}
								<br />
								<strong>Updated:</strong>{" "}
								{new Date(project.updated_at).toLocaleString("sv-SE", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit",
									hour: "2-digit",
									minute: "2-digit",
								})}
							</span>
							<br />
						</>
					)}
					{project.text ||
						(project.description && (
							<>
								<strong>Description:</strong>{" "}
								{project.text || project.description}
								<br />
							</>
						)) || <strong>No description for this project!</strong>}
				</p>
				<div className="cardImage">
					{isGitHubRepo ? (
						<img
							alt={`${project.name} - Avatar`}
							src={project.owner.avatar_url}
						/>
					) : (
						<img
							alt={`${project.name} - First`}
							src={`images/${project.images[0]}`}
						/>
					)}
				</div>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="overlay"
					role="dialog"
					aria-labelledby="modalTitle"
					aria-hidden={!isModalOpen}
				>
					<div
						className="popupClose"
						onClick={closeModal}
						onKeyDown={(e) => e.key === "Enter" && closeModal()}
					/>
					<div className="popup">
						<button
							className="close"
							type="button"
							aria-label="Close"
							onClick={closeModal}
						>
							&times;
						</button>
						<div className="modalHeader">
							<a
								href={project.link || project.html_url}
								target="_blank"
								rel="noreferrer"
							>
								{project.name} &#128279;
							</a>
						</div>
						<div className="content">
							<p>
								{project.text ||
									project.description ||
									"No description for this project! (Yet!)"}
							</p>
							<div className="modalImages">
								{isGitHubRepo ? (
									<img
										src={project.owner.avatar_url}
										alt={`${project.name} - Avatar`}
										className="modalImage"
									/>
								) : (
									project.images?.map((image) => (
										<img
											key={image}
											src={`images/${image}`}
											alt={image}
											className="modalImage"
										/>
									))
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioCard;
