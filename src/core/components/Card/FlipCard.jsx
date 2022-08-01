import "./FlipCard.css";

const FlipCard = ({ image, title, subtitle, description, category }) => {
	return (
		<div
			className="flip-card__container"
			onClick={() => console.log("Ir a la descripcion de los artistas")}
		>
			<div className="flip-card__inner">
				<div className="flip-card__front--side">
					<img
						src={image}
						alt="Avatar"
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div className="flip-card__back--side">
					<h1>{title}</h1>
					{subtitle && <h2>{subtitle}</h2>}
					<p>{description}</p>
					<span>{category}</span>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
