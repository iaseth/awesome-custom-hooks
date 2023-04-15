import React from 'react';



export const useStateLoggerDebug = (
	intialState: any,
	label = "State"
) => {
	const [x, setX] = React.useState(intialState);
	const setXSafe = (v: any) => {
		console.log(`Updated '${label}': ${x} => ${v}`);
		setX(v);
	};
	// DEBUG: this line will not be part of the prod hook

	return [x, setXSafe];
};
