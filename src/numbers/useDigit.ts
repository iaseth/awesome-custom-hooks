import React from 'react';



export const useDigit = (intialState: number=0) => {
	const [digit, setDigit] = React.useState(intialState);

	const setDigitSafe = (d: number) => {
		if (d >= 0 && d < 10) {
			setDigit(d);
		}
	};

	return [digit, setDigitSafe];
};
