import React from 'react';



export const useVisibility = (intialState = false) => {
	const [v, setV] = React.useState(intialState);
	const toggleV = () => setV((x: boolean) => !x);
	return [v, toggleV];
};
