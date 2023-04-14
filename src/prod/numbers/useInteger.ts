import React from 'react';



export const useInteger = (intialState = 0) => {
	const [integer, setInteger] = React.useState(intialState);

	const setIntegerSafe = (x: number) => {
		setInteger(x);
	};

	return [integer, setIntegerSafe];
};
