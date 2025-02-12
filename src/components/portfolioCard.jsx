/* eslint-disable react/prop-types */
import { useState } from "react";

const PortfolioCard = ({ project }) => {
	const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
	const isGitHubRepo = Object.prototype.hasOwnProperty.call(
		project,
		"full_name",
	); // Check if it's a GitHub repo

	// Function to open the modal
	const openModal = () => {
		setIsModalOpen(true);
		document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
		document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
	};

	return (
		<div className="card">
			<div className="cardHeader">
				<h3>{project.name}</h3>
				<button
					className="cardButton"
					type="button"
					onClick={openModal} // Open the modal when clicked
				>
					{isGitHubRepo ? "View Repo" : "Read more!"}
				</button>
			</div>
			<div className="cardBody">
				<p>{project.text || "No description available"}</p>
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
			{isGitHubRepo && (
				<a href={project.html_url} target="_blank" rel="noreferrer">
					Visit the Repository
				</a>
			)}

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
							onClick={closeModal} // Close the modal
						>
							&times;
						</button>
						<div className="modalHeader">
							<a href={project.link} target="_blank" rel="noreferrer">
								{project.name} &#128279;
							</a>
						</div>
						<div className="content">
							<p>{project.text}</p>
							<div className="modalImages">
								{project.images?.map((image) => (
									<img
										key={image}
										src={`images/${image}`}
										alt={image}
										className="modalImage"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PortfolioCard;
