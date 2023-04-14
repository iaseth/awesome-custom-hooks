import React from 'react';



const MAX_DEGREE = 359;

export const useDegree = (intialState = 0) => {
	const [degree, setDegree] = React.useState(intialState);

	const setDegreeSafe = (pc: number) => {
		if (pc >= 0 && pc <= MAX_DEGREE) {
			setDegree(pc);
		}
	};

	return [degree, setDegreeSafe];
};
