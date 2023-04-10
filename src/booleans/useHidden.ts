import React from 'react';



export const useHidden = (intialState: boolean=false) => {
	const [hidden, setHidden] = React.useState(intialState);
	const toggleHidden = () => setHidden((x: boolean) => !x);
	return [hidden, toggleHidden];
};
