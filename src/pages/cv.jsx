import { useEffect, useState } from "react";

const CVComponent = () => {
	const [education, setEducation] = useState([]);
	const [workExperience, setWorkExperience] = useState([]);

	useEffect(() => {
		fetch("/CV-Portal_V.2_React/assets/cv.json")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEducation(data.education);
				setWorkExperience(data.workExperience);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="cv-main">
			<button
				type="button"
				className="cv-print-button"
				onClick={() => window.print()}
			>
				Print CV
			</button>

			<section className="cv-section personalInfo">
				<h1 className="cv-title">Fredrik Andersson</h1>
				<h2 className="cv-subtitle">Full-Stack .NET Web Developer</h2>
				<ul className="cv-list">
					<li className="cv-list-item">Email: fredrik04@hotmail.com</li>
					<li className="cv-list-item">Phone: +46 073 995 97 84</li>
					<li className="cv-list-item">Location: Stockholm, Sweden</li>
				</ul>
			</section>

			<section className="cv-section skillsSection">
				<h3 className="cv-heading">Skills</h3>
				<ul className="cv-list">
					<li className="cv-list-item">
						<strong>Languages:</strong> HTML, CSS, JavaScript, C#
					</li>
					<li className="cv-list-item">
						<strong>Technologies:</strong> React, Node.js, .NET, SQL, GitHub
					</li>
				</ul>
			</section>

			<section className="cv-section educationSection">
				<h3 className="cv-heading">Education</h3>
				<ul className="cv-list">
					{education.map((item, index) => (
						<li key={index} className="cv-list-item">
							<strong>{item.school}</strong> - {item.degree}, {item.year}
						</li>
					))}
				</ul>
			</section>

			<section className="cv-section workExperienceSection">
				<h3 className="cv-heading">Work Experience</h3>
				<ul className="cv-list">
					{workExperience.map((item, index) => (
						<li key={index} className="cv-list-item">
							<strong>{item.company}</strong> - {item.role} ({item.year})
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default CVComponent;
