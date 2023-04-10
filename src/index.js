import React from 'react';

export function useToggle (intialState=false) {
	const [x, setX] = React.useState(intialState);
	const toggleX = () => setX(x => !x);
	return [x, toggleX];
}
