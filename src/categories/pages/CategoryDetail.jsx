import { useState, useContext, useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

import { UserContext } from "core/context/UserContext";
import useAxiosGet from "core/api/hooks/useAxiosGet";
import useAxiosPut from "core/api/hooks/useAxiosPut";
import useAxiosDel from "core/api/hooks/useAxiosDel";
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
	const [showIndexConfirm, setShowIndexConfirm] = useState();
	const [showIndexModal, setShowIndexModal] = useState();

	const { data: shows = [], refetch } = useAxiosGet(`/show/list/${idCategory}`);

	const { data: categoryUpdated, mutate: updateCategory } =
		useAxiosPut("/show/edit");

	const { mutate: removeCategory, loaded: isDeleted } =
		useAxiosDel("/show/remove");

	const closeConfirm = () => setShowIndexConfirm(undefined);
	const closeModal = () => setShowIndexModal(undefined);

	const handleOnUpdate = (id, formValues) => {
		updateCategory({ id, ...formValues });
		closeModal();
	};

	const handleOnRemove = (id) => {
		removeCategory(id);
		closeConfirm();
	};

	useEffect(() => {
		if (isDeleted || categoryUpdated) {
			refetch();
		}
	}, [isDeleted, categoryUpdated]);

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
										onClick={() => setShowIndexModal(i)}
									>
										<BsPencilFill size={18} />
									</span>
								</div>
								<div>
									<span
										className="category-page__delete--action"
										title="Eliminar"
										onClick={() => setShowIndexConfirm(i)}
									>
										<AiTwotoneDelete size={22} />
									</span>
								</div>
							</div>
						)}

						<Confirm
							isOpen={showIndexConfirm === i}
							title={"Eliminar show"}
							description={`Esta seguro de eliminar el show ${rest.title}?`}
							onClose={closeConfirm}
							onConfirm={() => handleOnRemove(_id)}
						/>

						<Modal
							isOpen={showIndexModal === i}
							title={"Editar Categoría"}
							onClose={closeModal}
							content={
								<AddShowForm
									defaultValue={rest}
									onSubmit={(values) => handleOnUpdate(_id, values)}
								/>
							}
						/>
					</div>
				))}
			</Grid>
			<Outlet />
		</Box>
	);
}
