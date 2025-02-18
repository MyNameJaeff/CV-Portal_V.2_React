const Home = () => {
	return (
		<div className="homeDiv">
			<h1>Welcome to my CV-Portal</h1>
			<h2>Fredrik Andersson - Fullstack .NET Student at Chas Academy</h2>
			<div className="skillsDiv">
				<ul>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/HTML5_logo.png`} alt="HTML5 Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/CSS3_logo.png`} alt="CSS3 Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/Javascript_logo.png`} alt="JavaScript Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/React_logo.png`} alt="React Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/node-js_logo.png`} alt="Node.js Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/Logo_C_sharp.png`} alt="C# Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/SQL_logo.png`} alt="SQL Logo" />
					</li>
					<li>
						<img src={`/CV-Portal_V.2_React/logos/Github_logo.png`} alt="Github Logo" />
					</li>
				</ul>
			</div>
			<div className="logoImage">
				<img src={`/CV-Portal_V.2_React/logos/ChasLogo.png`} alt="Chas Academy Logo" />
			</div>
		</div>
	);
};

export default Home;
