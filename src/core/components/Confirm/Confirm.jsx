import { memo } from "react";

import "./Confirm.css";

const Confirm = ({ isOpen, onClose, title, description, onConfirm }) => {
	const handleOnClose = () => {
		onClose();
	};

	if (!isOpen) return null;

	return (
		<>
			<div className="confirm-overlay" />
			<div
				className="confirm-wrapper"
				aria-modal
				aria-hidden
				tabIndex={-1}
				role="dialog"
			>
				<div className="confirm">
					<div className="confirm-header">
						<div className="confirm-header-title">
							<h1>{title}</h1>
						</div>
						<div
							className="confirm-close-button"
							data-dismiss="confirm"
							aria-label="Close"
							onClick={() => handleOnClose()}
						>
							<span aria-hidden="true">&times;</span>
						</div>
					</div>
					<p>{description}</p>
					<div className="clearfix">
						<button
							className="cancelbtn"
							type="button"
							onClick={() => handleOnClose()}
						>
							Cancelar
						</button>
						<button
							className="confirmbtn"
							type="button"
							onClick={() => onConfirm()}
						>
							{title}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(Confirm);
