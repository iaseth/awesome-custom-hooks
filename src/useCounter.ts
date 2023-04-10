import React from 'react';



export const useCounter = (intialState: number=0) => {
	const [count, setCount] = React.useState(intialState);

	const incrementCount = () => setCount((x: number) => x+1);
	const decrementCount = () => setCount((x: number) => x-1);
	const resetCount = () => setCount(intialState);

	return [count, incrementCount, decrementCount, resetCount];
};
