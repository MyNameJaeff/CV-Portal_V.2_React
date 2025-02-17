import { useEffect, useState } from "react";

const CVComponent = () => {
	const [education, setEducation] = useState([]);
	const [workExperience, setWorkExperience] = useState([]);

	// Hämta data från JSON
	useEffect(() => {
		fetch("/assets/cv.json")
			.then((res) => res.json())
			.then((data) => {
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
						<strong>Languages:</strong> HTML, CSS, JavaScript, C#, PHP, Python
					</li>
					<li className="cv-list-item">
						<strong>Frameworks:</strong> React, Node.js, ASP.NET
					</li>
					<li className="cv-list-item">
						<strong>Version Control:</strong> Git, GitHub
					</li>
					<li className="cv-list-item">
						<strong>Databases:</strong> MySQL
					</li>
					<li className="cv-list-item">
						<strong>Tools:</strong> GitHub Desktop, VS, VS Code, SMSS
					</li>
				</ul>
			</section>

			<section className="cv-section summarySection">
				<h3 className="cv-heading">Summary</h3>
				<p className="cv-text">
					I’m currently studying full-stack .NET web development at Chas
					Academy. With 5 years of experience, including 4 years at NTI
					Södertörn, I’ve built a strong foundation in web development. This
					includes 3 years in high school and 1 year specializing as a high
					school engineer.
				</p>
				<br />
				<p className="cv-text">
					Now in my first year at Chas Academy, I’ve expanded my skills in
					full-stack development. I’m proficient in HTML, CSS, JavaScript,
					React, C#, PHP, and Python. My background allows me to handle both
					front-end and back-end challenges effectively.
				</p>
				<br />
				<p className="cv-text">
					I’m passionate about building clean, efficient, and user-friendly
					solutions. I’m actively seeking a full-time web developer role where I
					can grow my skills further and contribute to a dynamic team.
				</p>
			</section>

			<section className="cv-section workExperienceSection">
				<h3 className="cv-heading">Work Experience</h3>
				{workExperience.map((job, index) => (
					<div className="cv-text" key={`${index}-${Math.random()}`}>
						<h4>{job.title}</h4>
						<p>
							<strong>{job.company}</strong> - {job.location}
						</p>
						<p>{job.period}</p>
						<ul className="cv-list">
							{job.tasks.map((task, idx) => (
								<li className="cv-list-item" key={`${idx}-${Math.random()}`}>
									{task}
								</li>
							))}
						</ul>
					</div>
				))}
			</section>

			<section className="cv-section educationSection">
				<h3 className="cv-heading">Education</h3>
				{education.map((edu, index) => (
					<div className="cv-text" key={`${index}-${Math.random()}`}>
						<h4>{edu.title}</h4>
						<p>
							<strong>{edu.institution}</strong> - {edu.location}
						</p>
						<p>{edu.period}</p>
						<ul className="cv-list">
							{edu.details.map((detail, idx) => (
								<li className="cv-list-item" key={`${idx}-${Math.random()}`}>
									{detail}
								</li>
							))}
						</ul>
					</div>
				))}
			</section>

			<section className="cv-section projectsSection">
				<h3 className="cv-heading">Projects</h3>
				<div className="cv-text">
					<h4>Personal Portfolio</h4>
					<p>
						Developed a portfolio website using React to showcase projects and
						provide contact information. Designed in Figma.
					</p>
				</div>
				<br />
				<div className="cv-text">
					<h4>Schoolsoft Redesign</h4>
					<p>
						Led a team of four in redesigning Schoolsoft for better usability
						and accessibility. Built with HTML, CSS, JavaScript, and Bootstrap.
					</p>
				</div>
				<br />
				<div className="cv-text">
					<h4>Boozer</h4>
					<p>
						Developed a React-based inventory app for tracking alcohol stock.
						Used local storage to save data and generate shopping lists.
					</p>
				</div>
			</section>

			<button
				type="button"
				className="cv-print-button"
				onClick={() => window.print()}
			>
				Print CV
			</button>
		</div>
	);
};

export default CVComponent;
