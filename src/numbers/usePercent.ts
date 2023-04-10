import React from 'react';



const MAX_PERCENT: number = 100;

export const usePercent = (intialState: number = 0) => {
	const [percent, setPercent] = React.useState(intialState);

	const setPercentSafe = (pc: number) => {
		if (pc >= 0 && pc <= MAX_PERCENT) {
			setPercent(pc);
		}
	};

	return [percent, setPercentSafe];
};
