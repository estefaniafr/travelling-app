import Box from "core/components/Box/Box";
import Grid from "core/components/Grid/Grid";
import CategoryCard from "categories/components/CategoryCard";
import { Outlet } from "react-router-dom";

import "./Categories.css";

// const showsInstrumental = Array(10)
// 	.fill({
// 		catergory: "Intrumental",
// 		description: "Esto es la descripcion de un show",
// 		picture: "https://www.w3schools.com/howto/img_avatar.png",
// 	})
// 	.map((el, index) => ({
// 		...el,
// 		id: `${index}`,
// 		title: `Show ${index}`,
// 		subtitle: `Es es un subtitulo ${index}`,
// 	}));

const categories = [
	"Instrumental",
	"Infantil",
	"Ballets",
	"Latinos",
	"Magia",
	"Flamenco",
	"Tributos",
];

export default function Artists() {
	return (
		<Box className="category-page__box--container">
			<h1 className="category-page__title--page">Categorías</h1>
			<Grid container widthColumn={350}>
				{categories.map((category, i) => (
					<CategoryCard key={i} category={{ id: i, title: category }} />
				))}
			</Grid>
			<Outlet />
		</Box>
	);
}
