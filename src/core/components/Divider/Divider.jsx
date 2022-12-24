import "./Divider";

const Divider = ({ className }) => {
	return <hr className={className ?? "divider__component"} />;
};

export default Divider;
