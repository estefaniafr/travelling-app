import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";

import { UserContext } from "core/context/UserContext";
import useAxiosGet from "core/api/hooks/useAxiosGet";
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
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { data: categories = [] } = useAxiosGet("/category/list");
	const { mutate: removeCategory, loaded } = useAxiosDel("/category/remove");

	const handleOnConfirm = () => {
		setIsOpenConfirm(false);
	};

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
							title={"Eliminar categoría"}
							description={`Esta seguro de eliminar la categoría ${rest.title}?`}
							onClose={() => setIsOpenConfirm(false)}
							onConfirm={handleOnConfirm}
						/>

						<Modal
							isOpen={isOpenModal}
							title={"Editar Categoría"}
							onClose={() => setIsOpenModal(false)}
							content={<AddCategoryForm defaultValue={rest} />}
						/>
					</div>
				))}
			</Grid>
			<Outlet />
		</Box>
	);
}
