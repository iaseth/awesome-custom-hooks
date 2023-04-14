import React from 'react';



export const useWindowWidthDebug = () => {
	const [windowWidth, setWindowWidth] = React.useState(0);

	React.useEffect(() => {
		function updateSize () {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", updateSize);
		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return [windowWidth];
};
