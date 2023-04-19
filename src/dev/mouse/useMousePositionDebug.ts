import React from 'react';



export const useMousePositionDebug = () => {
	const [x, setX] = React.useState(0);
	const [y, setY] = React.useState(0);

	React.useEffect(() => {
		function updatePosition (e: any) {
			setX(e.clientX);
			setY(e.clientY);
			console.log(`Updated mouse position: (${x}, ${y})`); // DEBUG
		}

		window.addEventListener("mousemove", updatePosition);

		return () => window.removeEventListener("mousemove", updatePosition);
	}, []);

	return [x, y];
};
