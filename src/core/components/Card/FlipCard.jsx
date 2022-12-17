import "./FlipCard.css";

const FlipCard = ({
	title,
	subtitle,
	description,
	category,
	onClick,
	image = "https://www.w3schools.com/howto/img_avatar.png",
}) => {
	return (
		<>
			<div className="flip-card__container">
				<div className={"flip-card__inner"}>
					<div className="flip-card__front--side">
						<img
							src={image}
							alt="Avatar"
							style={{ width: "100%", height: "100%" }}
						/>
					</div>
					<div className="flip-card__back--side" onClick={onClick}>
						<h1>{title}</h1>
						{subtitle && <h2>{subtitle}</h2>}
						<p>{description}</p>
						<span className="flip-card__footer">{category}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default FlipCard;
