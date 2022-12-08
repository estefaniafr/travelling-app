import { Outlet } from "react-router-dom";

import useAxiosGet from "core/api/hooks/useAxiosGet";
import Box from "core/components/Box/Box";
import Grid from "core/components/Grid/Grid";
import CategoryCard from "categories/components/CategoryCard";

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

// const categories = [
// 	"Instrumental",
// 	"Infantil",
// 	"Ballets",
// 	"Latinos",
// 	"Magia",
// 	"Flamenco",
// 	"Tributos",
// ];

export default function Artists() {
	const { data: categories = [] } = useAxiosGet("/category/list");

	return (
		<Box className="category-page__box--container">
			<h1 className="category-page__title--page">Categorías</h1>
			{!categories.length && (
				<Box className="category-page__box--no-categories">
					{"No hay categorias disponibles"}
				</Box>
			)}
			<Grid container widthColumn={350}>
				{categories.map(({ _id, ...rest }, i) => (
					<CategoryCard key={i} category={{ id: _id, ...rest }} />
				))}
			</Grid>
			<Outlet />
		</Box>
	);
}
