const PortfolioCard = () => {
	return (
		<div>
			<div className="cardHeader">
				<h3>Portfolio Card</h3>
				<button className="cardButton" type="button">
					Read more!
				</button>
			</div>
			<div className="cardBody">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
					numquam, porro provident ullam mollitia debitis eligendi quos
					voluptatibus odit excepturi exercitationem nulla a, et reprehenderit
					fugiat nihil iste eaque quae. Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Corporis commodi magni autem, accusamus repellendus
					maiores ipsa? Ea exercitationem vero obcaecati ipsam voluptatum
					quisquam, quia alias, nihil dicta tenetur numquam repudiandae?
				</p>
				<div className="cardImage">
					<img
						src="https://logometrica.se/wp-content/uploads/2024/06/placeholder-2.png"
						alt="Placeholder"
					/>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
