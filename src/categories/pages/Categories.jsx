import { useContext, useState, useMemo, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

import { UserContext } from "core/context/UserContext";
import useAxiosGet from "core/api/hooks/useAxiosGet";
import useAxiosPut from "core/api/hooks/useAxiosPut";
import useAxiosDel from "core/api/hooks/useAxiosDel";
import Box from "core/components/Box/Box";
import Grid from "core/components/Grid/Grid";
import CategoryCard from "categories/components/CategoryCard";
import Confirm from "core/components/Confirm/Confirm";
import Modal from "core/components/Modal/Modal";
import AddCategoryForm from "account/components/AddCategoryForm/AddCategoryForm";

import "./Categories.css";

export default function Categories() {
	let navigate = useNavigate();
	const { isAdmin } = useContext(UserContext);
	const [showIndexConfirm, setShowIndexConfirm] = useState();
	const [showIndexModal, setShowIndexModal] = useState();

	const { data: categoriesList = [], refetch } = useAxiosGet("/category/list");

	const { data: categoryUpdated, mutate: updateCategory } =
		useAxiosPut("/category/edit");

	const { mutate: removeCategory, loaded: isDeleted } =
		useAxiosDel("/category/remove");

	const categories = useMemo(() => {
		if (categoryUpdated) {
			return [
				...categoriesList.filter((cat) => cat._id !== categoryUpdated._id),
				categoryUpdated,
			];
		}
		return categoriesList;
	}, [categoriesList, categoryUpdated]);

	const handleOnUpdate = (id, formValues) => {
		updateCategory({ id, ...formValues });
		closeModal();
	};

	const handleOnRemove = (id) => {
		removeCategory(id);
		closeConfirm();
	};

	const closeConfirm = () => setShowIndexConfirm(undefined);
	const closeModal = () => setShowIndexModal(undefined);

	useEffect(() => {
		if (isDeleted) {
			refetch();
		}
	}, [isDeleted]);

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
					<div key={i}>
						<CategoryCard {...rest} onClick={() => navigate(`/shows/${_id}`)} />

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
							title={"Eliminar categoría"}
							description={`Esta seguro de eliminar la categoría ${rest.title}?`}
							onClose={closeConfirm}
							onConfirm={() => handleOnRemove(_id)}
						/>

						<Modal
							isOpen={showIndexModal === i}
							title={"Editar Categoría"}
							onClose={closeModal}
							content={
								<AddCategoryForm
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
