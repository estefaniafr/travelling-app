import "./CategoryCard.css";

const CategoryCard = ({
	image = "https://www.w3schools.com/howto/img_avatar.png",
	title,
	subtitle,
	description,
	category,
	onClick,
}) => {
	return (
		<div className="category-card__container" onClick={() => onClick()}>
			<div className="category-card__img">
				<img
					src={image}
					alt="Avatar"
					style={{ width: "100%", height: "100%" }}
				/>
			</div>
			<div className="category-card__flex--container">
				<div className="category-card__column--detail">
					<h2 className="category-card__category--title">{title}</h2>
					<span>{description}</span>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
