/* import "../css/cv.css"; */

const CVComponent = () => {
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
				<div className="cv-text">
					<h4>Gata-parkenheten</h4>
					<p>
						<strong>Samhällsbyggnadsförvaltningen</strong> - Nynäshamn, Sweden
					</p>
					<p>2021/07/26 - 2021/08/13</p>
					<ul className="cv-list">
						<li className="cv-list-item">
							Maintained and managed the municipality&apos;s public spaces,
							including cleaning, tidying, and raking.
						</li>
						<li className="cv-list-item">
							Ensured cleanliness and order in public areas through regular
							maintenance and upkeep.
						</li>
						<li className="cv-list-item">
							Developed strong time management skills by adhering to schedules
							and completing tasks efficiently.
						</li>
						<li className="cv-list-item">
							Learned to work independently and take responsibility for assigned
							duties, as well as work as a team to complete a task with
							efficiency.
						</li>
					</ul>
				</div>
			</section>

			<section className="cv-section educationSection">
				<h3 className="cv-heading">Education</h3>
				<div className="cv-text">
					<h4>Full-Stack .NET Web Developer</h4>
					<p>
						<strong>Chas Academy</strong> - Sweden
					</p>
					<p>Started 2024 - To be Graduated: 2026</p>
					<ul className="cv-list">
						<li className="cv-list-item">
							Currently studying full-stack .NET web development at Chas
							Academy.
						</li>
						<li className="cv-list-item">
							Learning to build web applications using C#, ASP.NET, React, and
							Node.js.
						</li>
						<li className="cv-list-item">
							Developing skills in database management, version control, and
							project management.
						</li>
					</ul>
				</div>
				<br />
				<div className="cv-text">
					<h4>High school engineer in Software Engineering</h4>
					<p>
						<strong>NTI Södertörn</strong> - Sweden
					</p>
					<p>Started 2023 - Graduated: 2024</p>
					<ul className="cv-list">
						<li className="cv-list-item">
							A technical fourth year specializing in practical software
							development post high school, giving me the title of high school
							engineer.
						</li>
						<li className="cv-list-item">
							Completed the first semester with a focus on advanced programming
							and application development.
						</li>
					</ul>
				</div>
				<br />
				<div className="cv-text">
					<h4>High school</h4>
					<p>
						<strong>NTI Södertörn</strong> - Sweden
					</p>
					<p>Started 2020 - Graduated: 2023</p>
					<ul className="cv-list">
						<li className="cv-list-item">
							Studied Information and media technology with a general focus on
							programming. I learned the basics of programming and web
							development as well as some C#, Python, databases and PHP.
						</li>
						<li className="cv-list-item">
							I also learned a bit about computer networks, computer systems,
							and how to build a computer. Included in the education was also
							some Math, English, Physics, Science,and Swedish. As extra courses
							I also took entrepreneurship and digital creation.
						</li>
					</ul>
				</div>
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
