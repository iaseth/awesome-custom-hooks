import React from 'react';



export const useWindowHeight = () => {
	const [windowHeight, setWindowHeight] = React.useState(0);

	React.useEffect(() => {
		function updateSize () {
			setWindowHeight(window.innerHeight);
		}

		window.addEventListener("resize", updateSize);
		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return [windowHeight];
};
