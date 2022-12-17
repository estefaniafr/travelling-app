import { useState, useContext } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

import { UserContext } from "core/context/UserContext";
import useAxiosGet from "core/api/hooks/useAxiosGet";
import FlipCard from "core/components/Card/FlipCard";
import Box from "core/components/Box/Box";
import Grid from "core/components/Grid/Grid";
import Confirm from "core/components/Confirm/Confirm";
import Modal from "core/components/Modal/Modal";
import AddShowForm from "account/components/AddShowForm/AddShowForm";

import "./Categories.css";

export default function CategoryDetail() {
	let navigate = useNavigate();
	const { isAdmin } = useContext(UserContext);
	let { idCategory } = useParams();
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { data: shows = [] } = useAxiosGet(`/show/list/${idCategory}`);

	const handleOnConfirm = () => {
		setIsOpenConfirm(false);
	};

	return (
		<Box className="category-page__box--container">
			<h1 className="category-page__title--page">Shows por categoria</h1>
			{!shows.length && (
				<Box className="category-page__box--no-categories">
					{"No hay shows disponibles en esta categoría"}
				</Box>
			)}

			<Grid container widthColumn={350}>
				{shows.map(({ _id, ...rest }, i) => (
					<div key={i}>
						<FlipCard
							{...rest}
							onClick={() => navigate(`/show/${_id}/detail`)}
						/>

						{isAdmin && (
							<div className="category-page__actions--container">
								<div>
									<span
										className="category-page__icon--action"
										title="Editar"
										onClick={() => setIsOpenModal(true)}
									>
										<BsPencilFill size={18} />
									</span>
								</div>
								<div>
									<span
										className="category-page__delete--action"
										title="Eliminar"
										onClick={() => setIsOpenConfirm(true)}
									>
										<AiTwotoneDelete size={22} />
									</span>
								</div>
							</div>
						)}

						<Confirm
							isOpen={isOpenConfirm}
							title={"Eliminar show"}
							description={`Esta seguro de eliminar el show ${rest.title}?`}
							onClose={() => setIsOpenConfirm(false)}
							onConfirm={handleOnConfirm}
						/>

						<Modal
							isOpen={isOpenModal}
							title={"Editar Categoría"}
							onClose={() => setIsOpenModal(false)}
							content={<AddShowForm defaultValue={rest} />}
						/>
					</div>
				))}
			</Grid>
			<Outlet />
		</Box>
	);
}
