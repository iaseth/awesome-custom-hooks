import React from 'react';



export const useMousePosition = () => {
	const [x, setX] = React.useState(0);
	const [y, setY] = React.useState(0);

	React.useEffect(() => {
		function updatePosition (e: any) {
			setX(e.clientX);
			setY(e.clientY);
		}

		window.addEventListener("mousemove", updatePosition);

		return () => window.removeEventListener("mousemove", updatePosition);
	}, []);

	return [x, y];
};
