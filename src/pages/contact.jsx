const Contact = () => {
	return (
		<div className="contactDiv">
			<h1>Contact Me</h1>
			<p>
				If you would like to get in touch with me, please use any of the links
				below:
			</p>
			<ul className="contactLinks">
				<li>
					<img src="logos/email.png" alt="Email Icon" className="invert" />
					<a
						href="mailto:fredrik04@hotmail.com"
						target="_blank"
						rel="noreferrer"
					>
						Email: fredrik04@hotmail.com
					</a>
				</li>
				<li>
					<img src="logos/linkedin.png" alt="LinkedIn Icon" />
					<a
						href="https://www.linkedin.com/in/fredrik-andersson-2006412aa/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn: Fredrik Andersson
					</a>
				</li>
				<li>
					<img src="logos/phone.png" alt="Phone Icon" className="invert" />
					<a href="tel:+460739959784" target="_blank" rel="noreferrer">
						Phone: +46 073 995 97 84
					</a>
				</li>
				<li>
					<img
						src="logos/github.png"
						alt="GitHub Icon"
						className="invert"
					/>
					<a
						href="https://github.com/MyNameJaeff"
						target="_blank"
						rel="noreferrer"
					>
						GitHub: MyNameJaeff
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contact;
