const Home = () => {
	return (
		<div className="homeDiv">
			<h1>Welcome to my CV-Portal</h1>
			<h2>Fredrik Andersson - Fullstack .NET Student at Chas Academy</h2>
			<div className="skillsDiv">
				<ul>
					<li>
						<img src="logos/HTML5_logo.png" alt="HTML5 Logo" />
					</li>
					<li>
						<img src="logos/CSS3_logo.png" alt="CSS3 Logo" />
					</li>
					<li>
						<img src="logos/Javascript_logo.png" alt="JavaScript Logo" />
					</li>
					<li>
						<img src="logos/React_logo.png" alt="React Logo" />
					</li>
					<li>
						<img src="logos/node-js_logo.png" alt="Node.js Logo" />
					</li>
					<li>
						<img src="logos/Logo_C_sharp.png" alt="C# Logo" />
					</li>
					<li>
						<img src="logos/SQL_logo.png" alt="SQL Logo" />
					</li>
					<li>
						<img src="logos/Github_logo.png" alt="Github Logo" />
					</li>
				</ul>
			</div>
			<div className="logoImage">
				<img src="logos/ChasLogo.png" alt="Chas Academy Logo" />
			</div>
		</div>
	);
};

export default Home;
