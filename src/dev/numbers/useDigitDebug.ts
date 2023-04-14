import React from 'react';



export const useDigitDebug = (intialState = 0) => {
	const [digit, setDigit] = React.useState(intialState);

	const setDigitSafe = (d: number) => {
		if (d >= 0 && d < 10) {
			setDigit(d);
		}
	};

	return [digit, setDigitSafe];
};
