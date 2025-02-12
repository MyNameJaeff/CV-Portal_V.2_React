let isEasterEgg2active = false;
let isEasterEgg1Active = false;

const easterEgg1 = () => {
	alert("Grattis, du är nu officiellt 1337! 🎉");
};

document.addEventListener("keydown", (event) => {
	const key = event.key.toLowerCase();
	handleSequence(key);
});

const sequences = {
	1337: easterEgg1,
};
let userInput = "";

const handleSequence = (key) => {
	userInput += key;
	for (const [sequence, action] of Object.entries(sequences)) {
		if (userInput.endsWith(sequence) && !isEasterEgg1Active) {
			isEasterEgg1Active = true;
			action();
			userInput = "";
			setTimeout(() => {
				isEasterEgg1Active = false;
			}, 1000); // Adjust the timeout as needed
			return;
		}
	}

	if (userInput.length > 10) {
		userInput = userInput.slice(-10);
	}
};

const easterEgg2 = () => {
	isEasterEgg2active = !isEasterEgg2active;
	if (!isEasterEgg2active) {
		document.body.style.backgroundImage = "url('')";
	} else {
		document.body.style.backgroundImage =
			"url('https://static.vecteezy.com/system/resources/previews/041/879/642/non_2x/ai-generated-colorful-easter-eggs-nestled-in-alpine-meadow-with-majestic-mountain-landscape-springtime-celebration-and-holiday-traditions-amidst-breathtaking-natural-scenery-photo.jpg')";
	}
};

const Footer = () => {
	return (
		<footer>
			<div
				className="easterEgg"
				id="easterEgg"
				onClick={easterEgg2}
				onKeyDown={(e) => {
					if (e.key === "Enter") easterEgg2();
				}}
			/>
			<p>&copy; 2024 CV-Portal</p>
			<div /> {/* Empty div for style */}
		</footer>
	);
};

export default Footer;
