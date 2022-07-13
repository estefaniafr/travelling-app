import Box from "core/components/Box/Box";
import Grid from "core/components/Grid/Grid";
import Card from "core/components/Card/Card";
import "./Artists.css";

const showsInstrumental = Array(10)
	.fill({
		catergory: "Intrumental",
		description: "Esto es la descripcion de un show",
		picture: "https://www.w3schools.com/howto/img_avatar.png",
	})
	.map((el, index) => ({
		...el,
		id: `${index}`,
		title: `Show ${index}`,
		subtitle: `Es es un subtitulo ${index}`,
	}));

export default function Artists() {
	return (
		<Box className="category-page__box--container">
			<h1>Contenido página Artistas</h1>
			<Grid container widthColumn={300}>
				{showsInstrumental.map(
					({ id, title, subtitle, description, catergory, picture }) => (
						<Card
							key={id}
							image={picture}
							title={title}
							subtitle={subtitle}
							description={description}
							category={catergory}
						/>
					)
				)}
			</Grid>
		</Box>
	);
}
