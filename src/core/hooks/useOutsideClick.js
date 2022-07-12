import { useEffect } from "react";

/**
 * Hook that check clicks outside of the passed ref
 * @param ref is a container ref
 * @param onOutsideClick is a callback
 */
function useOutsideClick(ref, onOutsideClick) {
	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				onOutsideClick();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}

export default useOutsideClick;
