import React from 'react';

export function useToggle (intialState=false) {
	const [x, setX] = React.useState(intialState);
	const toggleX = () => setX((x: boolean) => !x);
	return [x, toggleX];
}

const Awesome = {
	useToggle
};
export default Awesome;
