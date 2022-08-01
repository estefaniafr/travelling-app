import { useParams } from "react-router-dom";
import Box from "core/components/Box/Box";

export default function ShowDetail() {
	let { idShow } = useParams();
	const mockShow = {
		id: "123",
		image: "https://www.w3schools.com/howto/img_avatar.png",
		title: "Mock show",
		category: "Infantil",
		description: "Esto es un show de prueba",
		urlLink: "https://www.youtube.com/watch?v=4gNKboyjF0c",
	};

	return (
		<Box>
			<h1>{`${mockShow.title} ${idShow}`}</h1>
		</Box>
	);
}
