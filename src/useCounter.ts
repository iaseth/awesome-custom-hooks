import React from 'react';



export const useCounter = (intialState: number=0) => {
	const [count, setCount] = React.useState(intialState);
	const incrementCount = () => setCount((x: number) => x+1);
	return [count, incrementCount];
};
