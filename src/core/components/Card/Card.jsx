import "./Card.css";

import cardImage from "../../../resources/images/Annya.png";



const Card = () => {

	return (

		<div className="card">

			<img src={cardImage} alt="show1" />

			<div className="container">

				<h4>Title</h4>

				<p>Subtitle</p>

			</div>

		</div>

	);

};



export default Card;

