import "./Card.css";

const Card = ({ image, title, subtitle, description, category }) => {
	return (
		<div className="flip-card" onClick={() => console.log("Ir a artistas")}>
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<img
						src={image}
						alt="Avatar"
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div className="flip-card-back">
					<h1>{title}</h1>
					{subtitle && <h2>{subtitle}</h2>}
					<p>{description}</p>
					<span>{category}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
