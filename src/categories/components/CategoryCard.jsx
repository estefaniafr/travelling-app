import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({
	category: {
		id,
		title,
		image = "https://www.w3schools.com/howto/img_avatar.png",
	},
}) => {
	let navigate = useNavigate();
	return (
		<div
			className="category-card__container"
			onClick={() => navigate(`/shows/${id}`)}
		>
			<div className="category-card__img">
				<img
					src={image}
					alt="Avatar"
					style={{ width: "100%", height: "100%" }}
				/>
			</div>
			<div className="category-card__detail">
				<h2>{title}</h2>
			</div>
		</div>
	);
};

export default CategoryCard;
