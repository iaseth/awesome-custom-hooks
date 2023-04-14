import React from 'react';



export interface Size {
	width: number,
	height: number
};

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = React.useState<Size>({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		function updateSize () {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", updateSize);
		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return [windowSize];
};
