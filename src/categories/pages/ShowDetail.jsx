import { useParams } from "react-router-dom";

import useAxiosGet from "core/api/hooks/useAxiosGet";
import Box from "core/components/Box/Box";
import Divider from "core/components/Divider/Divider";

import "./ShowDetail.css";

export default function ShowDetail() {
	let { idShow } = useParams();

	// const mockShow = {
	// 	id: "123",
	// 	image: "https://www.w3schools.com/howto/img_avatar.png",
	// 	title: "Mock show",
	// 	category: "Infantil",
	// 	description: "Esto es un show de prueba",
	// 	urlLink: "https://www.youtube.com/watch?v=4gNKboyjF0c",
	// };

	const { data: show, error, loaded } = useAxiosGet(`/show/${idShow}`);

	if (!show) return <></>;

	return (
		<Box className="show-detail__container">
			<Box className="show-detail__picture--container">
				<img
					src={"https://www.w3schools.com/howto/img_avatar.png"}
					alt="show"
				/>
			</Box>
			<Box className="show-detail__description--container">
				<h1>{`${show.title}`}</h1>
				<span>{show.category}</span>
				<Divider />

				<h3>Descripción</h3>
				<p>{`${show.description}`}</p>

				<h3>Duración</h3>
				<p>{`${show.duration}`}</p>

				<Divider />
				<span>
					Registrado: {new Date(show.registerShow).toLocaleDateString()}
				</span>
			</Box>
			<Box className="show-detail__video--container">
				<Divider />
				<h1>Video</h1>
				<a
					href={`${
						show.urlLink ?? "https://www.youtube.com/watch?v=IkxP567p8oc"
					}`}
					target="_blank"
					rel="noreferrer"
				>
					video
				</a>
			</Box>
		</Box>
	);
}
