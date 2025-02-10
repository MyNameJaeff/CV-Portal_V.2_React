import { useState } from "react";
import "../css/about.css";

const cardTypes = ["about", "skills", "credentials"];

const content = {
	about: {
		active: (
			<>
				<h3>About Me</h3>
				<div className="cardLine" />
				<p>
					I am a 20-year-old student with ambitions to become a versatile
					full-stack developer. My passion for technology fuels my continuous
					desire to expand my knowledge and skills in programming.
					<br />
					<br />
					My interests are largely centered around computers, which is why I
					have developed a strong enthusiasm for coding. In my free time, I
					enjoy gaming, 3D printing, and creating websites for personal
					projects.
					<br />
					<br />I have studied both JavaScript and C# .NET, as I believe that
					learning multiple programming languages offers a deeper understanding
					of software development. My goal is to become proficient in a wide
					range of technologies, enhancing my problem-solving abilities and
					adaptability as a developer.
				</p>
			</>
		),
		blurred: (
			<>
				<h3>Skills</h3>
				<p>
					I specialize in web technologies such as HTML, CSS, React, and
					Node.js. Additionally, I have experience with C# .NET and some Python,
					allowing me to take on diverse development challenges.
					<br />
					<br />
					Currently, I am enhancing my expertise by deepening my knowledge of C#
					and .NET to become a more versatile web developer.
					<br />
					<br />I am proficient with version control systems like Git and use
					GitHub for collaboration. I have experience with SQL (MySQL)
					databases, which has helped me understand various approaches to
					structuring and querying data.
				</p>
			</>
		),
	},
	skills: {
		active: (
			<>
				<h3>Skills</h3>
				<div className="cardLine" />
				<p>
					I specialize in web technologies such as HTML, CSS, React, and
					Node.js. Additionally, I have experience with C# .NET and some Python,
					allowing me to take on diverse development challenges.
					<br />
					<br />
					Currently, I am enhancing my expertise by deepening my knowledge of C#
					and .NET to become a more versatile web developer.
					<br />
					<br />I am proficient with version control systems like Git and use
					GitHub for collaboration. I have experience with SQL (MySQL)
					databases, which has helped me understand various approaches to
					structuring and querying data.
				</p>
			</>
		),
		blurred: (
			<>
				<h3>Credentials</h3>
				<p>
					I hold two diplomas in information technology: one from high school
					and another from a post-high-school engineering program that focused
					on software development. This latter diploma provided me with a solid
					foundation in programming and web development, as well as practical
					experience with databases and version control systems, having been
					responsible for several projects.
					<br />
					<br />
					Additionally, I hold two web development certifications from
					Certiport, one in HTML & CSS and the other in JavaScript. These
					certifications have given me the confidence to take on more advanced
					projects and further expand my skill set.
				</p>
			</>
		),
	},
	credentials: {
		active: (
			<>
				<h3>Credentials</h3>
				<div className="cardLine" />
				<p>
					I hold two diplomas in information technology: one from high school
					and another from a post-high-school engineering program that focused
					on software development. This latter diploma provided me with a solid
					foundation in programming and web development, as well as practical
					experience with databases and version control systems, having been
					responsible for several projects.
					<br />
					<br />
					Additionally, I hold two web development certifications from
					Certiport, one in HTML & CSS and the other in JavaScript. These
					certifications have given me the confidence to take on more advanced
					projects and further expand my skill set.
				</p>
			</>
		),
		blurred: (
			<>
				<h3>About Me</h3>
				<p>
					I am a 20-year-old student with ambitions to become a versatile
					full-stack developer. My passion for technology fuels my continuous
					desire to expand my knowledge and skills in programming.
					<br />
					<br />
					My interests are largely centered around computers, which is why I
					have developed a strong enthusiasm for coding. In my free time, I
					enjoy gaming, 3D printing, and creating websites for personal
					projects.
					<br />
					<br />I have studied both JavaScript and C# .NET, as I believe that
					learning multiple programming languages offers a deeper understanding
					of software development. My goal is to become proficient in a wide
					range of technologies, enhancing my problem-solving abilities and
					adaptability as a developer.
				</p>
			</>
		),
	},
};

const About = () => {
	const [activeCardIndex, setActiveCardIndex] = useState(0);

	const showCard = (index) => {
		setActiveCardIndex(index);
	};

	return (
		<div className="aboutDiv">
			<div className="cards">
				{/* Active Card */}
				<div className="activeCard">
					{content[cardTypes[activeCardIndex]].active}
				</div>

				{/* Blurred Cards, Ordered Correctly */}
				{cardTypes.map((cardType, index) => {
					if (index !== activeCardIndex) {
						return (
							<div
								key={cardType}
								className="blurredCard"
								onClick={() => showCard(index)}
								onKeyUp={(e) => {
									if (e.key === "Enter" || e.key === " ") showCard(index);
								}}
								style={{
									zIndex:
										index === (activeCardIndex + 1) % cardTypes.length ? 1 : 0,
								}} // Ensures next card is on top
							>
								{content[cardType].blurred}
							</div>
						);
					}
					return null;
				})}
			</div>

			<div className="cardButtons">
				{cardTypes.map((cardType, index) => (
					<div key={cardType}>
						<button
							type="button"
							className={activeCardIndex === index ? "activeButton" : ""}
							onClick={() => showCard(index)}
						>
							{index + 1}
						</button>
						<p className={activeCardIndex === index ? "activeButtonText" : ""}>
							{cardType.charAt(0).toUpperCase() + cardType.slice(1)}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
