import { useEffect, useState } from "react";

const CVComponent = () => {
	const [education, setEducation] = useState([]);
	const [workExperience, setWorkExperience] = useState([]);

	// Hämta data från JSON
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
						<strong>Languages:</strong> HTML, CSS, JavaScript, C#, PHP, Python
					</li>
					<li className="cv-list-item">
						<strong>Frameworks:</strong> React, Bootstrap, Tailwind, .NET
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
			{/* <section className="cv-section skillsSection">
				<h3 className="cv-heading">Skills</h3>
				<ul className="cv-list">
					<li className="cv-list-item">Kundservice och teamwork</li>
					<li className="cv-list-item">Ansvarstagande och initiativrik</li>
					<li className="cv-list-item">Tidsplanering och effektivt arbete</li>
					<li className="cv-list-item">Flexibel och positiv inställning</li>
				</ul>
			</section>
			<section className="cv-section skillsSection">
				<h3 className="cv-heading">Language Skills</h3>
				<ul className="cv-list">
					<li className="cv-list-item">Svenska: Flytande (tal och skrift)</li>
					<li className="cv-list-item">Engelska: Flytande (tal och skrift)</li>
				</ul>
			</section> */}

			<section className="cv-section summarySection">
				<h3 className="cv-heading">Summary</h3>
				<p className="cv-text">
					I’m currently studying full-stack .NET web development at Chas
					Academy. I have 5 years of experience, 4 of those years at NTI
					Södertörn, where I studied web development and programming. I don’t
					have any formal work experience in web development, but I have a
					strong desire to learn and grow in this field. I’m a quick learner and
					have a passion for coding and web development.
				</p>
				<br />
				<p className="cv-text">
					I’ve worked on various projects, including two team-based projects,
					where I honed my skills in collaboration and problem-solving. I’m
					proficient in HTML, CSS, JavaScript, and C#, and I’m comfortable using
					React and TypeScript. I’m also familiar with version control systems
					like Git and GitHub.
				</p>
				<br />
				<p className="cv-text">
					I’m looking for something that will allow me to both learn and grow as
					a developer as well as apply the skills I’ve acquired so far. I’m open
					to working in a team or independently, on location or remotely.
				</p>
			</section>
			{/* <section className="cv-section summarySection">
				<h3 className="cv-heading">Summary</h3>
				<p className="cv-text">
					Jag är en engagerad och serviceminded person med erfarenhet av både
					kundservice och teknik. Jag studerar för närvarande till full-stack
					.NET webbutvecklare på Chas Academy, men jag har också arbetat
					praktiskt i teamorienterade miljöer. Jag trivs i roller där jag får ta
					ansvar och bidra till en positiv kundupplevelse.{" "}
				</p>
				<br />
				<p className="cv-text">
					Nu söker jag en deltidsanställning som butikssäljare, där jag kan
					använda mina färdigheter i samarbete, service och effektivt arbete för
					att skapa den bästa butiksupplevelsen för kunderna.
				</p>
			</section> */}

			<section className="cv-section workExperienceSection">
				<h3 className="cv-heading">Work Experience</h3>
				{workExperience.map((job, index) => (
					<div className="cv-text" key={index}>
						<h4>{job.company}</h4>
						<h4>{job.role}</h4>
						<p>
							<strong>{job.year}</strong>
						</p>
						<p>{job.period}</p>
						<ul className="cv-list">
							{job.tasks.map((task, idx) => (
								<li className="cv-list-item" key={idx}>
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
					<div className="cv-text" key={index}>
						<h4>
							<strong>{edu.school}</strong>
						</h4>
						<h4>{edu.degree}</h4>
						<p>
							<strong>{edu.year}</strong>
						</p>
						<p>{edu.period}</p>
						<ul className="cv-list">
							{edu.details.map((detail, idx) => (
								<li className="cv-list-item" key={idx}>
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
					<a href="https://personal-portfolio-three-henna.vercel.app/" target="_blank" rel="noopener noreferrer">
						<h4>Personal Portfolio</h4>
					</a>
					<p>
						Developed a portfolio website using React to showcase projects and
						provide contact information. Designed in Figma.
					</p>
				</div>
				<br />
				<div className="cv-text">
					<a href="https://github.com/MyNameJaeff/Schoolsoft-redesign" target="_blank" rel="noopener noreferrer">
						<h4>Schoolsoft Redesign</h4>
					</a>
					<p>
						Led a team of four in redesigning Schoolsoft for better usability
						and accessibility. Built with HTML, CSS, JavaScript, and Bootstrap.
					</p>
				</div>
				<br />
				<div className="cv-text">
					<a href="https://boozer-git-main-fredrik-as-projects.vercel.app/inventory" target="_blank" rel="noopener noreferrer">
						<h4>Boozer</h4>
					</a>
					<p>
						Developed a React-based inventory app for tracking your current
						liquor stock, as to ease the process of making cocktails utlizing
						ChatGPT. Built with React, TypeScript, and Bootstrap.
					</p>
				</div>
				<br />
				<div className="cv-text">
					<a href="https://chasacademy.se/job/grupp-11-karriarpartner" target="_blank" rel="noopener noreferrer">
						<h4>Karriärpartner</h4>
					</a>
					<p>
						&quot;Karriärpartner är en digital plattform där användare enkelt kan ta nästa steg i sin karriär – genom kurser,
						vägledning och nedladdningsbara mallar. Plattformen kombinerar personlig utveckling med en affärsmodell
						för passiv inkomst. Det unika är att både användare och kursägare växer tillsammans&quot;
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
