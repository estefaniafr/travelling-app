import { useRef, memo } from "react";
import useOutsideClick from "core/hooks/useOutsideClick";

import "./Modal.css";

const Modal = ({
	isOpen,
	onClose,
	title,
	content,
	submit,
	withActions = false,
}) => {
	const ref = useRef(null);

	const handleOnClose = () => {
		onClose();
	};

	useOutsideClick(ref, handleOnClose);

	if (!isOpen) return null;

	return (
		<>
			<div className="modal-overlay" />
			<div
				className="modal-wrapper"
				aria-modal
				aria-hidden
				tabIndex={-1}
				role="dialog"
			>
				<div ref={ref} className="modal">
					<div className="modal-header">
						<div className="modal-header-title">
							<h1>{title}</h1>
						</div>
						<div
							className="modal-close-button"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => handleOnClose()}
						>
							<span aria-hidden="true">&times;</span>
						</div>
					</div>
					<div className="modal-content-container">{content}</div>
					{withActions && (
						<div className="clearfix">
							<button
								className="cancelbtn"
								type="button"
								onClick={() => handleOnClose()}
							>
								Cancelar
							</button>
							<button className="confirmbtn" type="button" onClick={submit}>
								{title}
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default memo(Modal);
