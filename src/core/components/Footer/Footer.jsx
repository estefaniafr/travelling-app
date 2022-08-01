import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiYoutubeFill } from "react-icons/ri";

import Box from "core/components/Box/Box";

import "./Footer.css";

const Footer = () => {
	let navigate = useNavigate();
	const contactList = useMemo(
		() => [
			{
				icon: <IoLocationSharp size={22} />,
				subtitle: "Ubicacion: ",
				content: "Calle Casares 6, 29004, Malaga",
			},
			{
				icon: <BsFillTelephoneFill size={20} />,
				subtitle: "Telefono: ",
				content: "650058458",
			},
			{
				icon: <MdEmail size={20} />,
				subtitle: "Email: ",
				content: "test@test.com",
			},
		],
		[]
	);

	const showsList = useMemo(
		() => [
			{
				image: "https://www.w3schools.com/howto/img_avatar.png",
				name: "Rey Leon",
				description: new Date().toLocaleDateString(),
			},
			{
				image: "https://www.w3schools.com/howto/img_avatar.png",
				name: "Fantasia",
				description: new Date().toLocaleDateString(),
			},
			{
				image: "https://www.w3schools.com/howto/img_avatar.png",
				name: "Magic Show",
				description: new Date().toLocaleDateString(),
			},
		],
		[]
	);

	const travellingList = useMemo(
		() => ["Sobre Nosotros", "Política de Privacidad", "Política de Cookies"],
		[]
	);

	return (
		<div className="footer__container">
			<Box className="footer__grid--areas">
				{/* Contact section */}
				<Box className="footer__grid--contact">
					<Box className="footer__title--section">
						<span>Contacto</span>
					</Box>

					{contactList.map(({ icon, subtitle, content }) => (
						<Box key={subtitle} className="footer__box--section">
							<Box className="footer__icon--contact">{icon}</Box>
							<Box className="footer__section--content">
								<span>{subtitle}</span>
								<span>{content}</span>
							</Box>
						</Box>
					))}
				</Box>

				{/* News section */}
				<Box className="footer__grid--news">
					<Box className="footer__title--section">
						<span>Novedades</span>
					</Box>

					<Box className="footer__box--news-scroll">
						{showsList.map(({ image, name, description }, i) => (
							<Box key={i} className="footer__box--news">
								<Box className="footer__image--news">
									<img src={image} alt="Avatar" width={50} height={50} />
								</Box>
								<Box className="footer__section--content">
									<strong
										onClick={() => navigate(`/show/${i}`)}
										className="footer__strong--name"
									>
										{name}
									</strong>
									<span>{description}</span>
								</Box>
							</Box>
						))}
					</Box>
				</Box>

				{/* Travelling section */}
				<Box className="footer__grid--travelling">
					<Box className="footer__title--section">
						<span>Travelling</span>
					</Box>

					<ul className="footer__ul--list">
						{travellingList.map((el, index) => (
							<li key={index} onClick={() => alert(el)}>
								{el}
							</li>
							// <Link to={`/${el}`}/>
						))}
					</ul>
				</Box>

				{/* Follow us section */}
				<Box className="footer__grid--follow-us">
					<Box className="footer__title--section">
						<span>Síguenos</span>
					</Box>

					<Box className="footer__box--icons-group">
						<Box
							className="footer__icon--circle"
							onClick={() => alert("Ir a instagram")}
						>
							<AiFillInstagram size={22} />
						</Box>
						<Box
							className="footer__icon--circle"
							onClick={() => alert("Ir a facebook")}
						>
							<BsFacebook size={20} />
						</Box>
						<Box
							className="footer__icon--circle"
							onClick={() => alert("Ir a youtube")}
						>
							<RiYoutubeFill size={22} />
						</Box>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default Footer;
