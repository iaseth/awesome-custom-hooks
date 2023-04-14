import React from 'react';



export const useNumber = (
	intialState = 0,
	max = 100
) => {
	const [number, setNumber] = React.useState(intialState);

	const setNumberSafe = (n: number) => {
		if (n >= 0 && n < max) {
			setNumber(n);
		}
	};

	return [number, setNumberSafe];
};
