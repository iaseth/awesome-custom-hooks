import React from 'react';



export const useToggle = (intialState=false) => {
	const [x, setX] = React.useState(intialState);
	const toggleX = () => setX((x: boolean) => !x);
	return [x, toggleX];
};
