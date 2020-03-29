import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
	const [size, setSize] = useState(0);

	useLayoutEffect(() => {
		const updateSize = () => {
			setSize(window.innerWidth);
		};

		window.addEventListener("resizes", updateSize);
		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, [size]);

	console.log(size);

	return size;
};

export default useWindowSize;
