import React from 'react';



export const useBooleanDebug = (intialState = false) => {
	const [x, setX] = React.useState(intialState);

	const setXSafe = (x: boolean) => {
		if (x === true) {
			setX(true);
		} else if (x === false) {
			setX(false);
		}
	};

	const toggleX = () => setX((x: boolean) => !x);
	return [x, setXSafe, toggleX];
};
