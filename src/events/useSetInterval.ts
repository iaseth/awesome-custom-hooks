import React from 'react';



export const useSetInterval = (func: Function, duration: number) => {
	React.useEffect(() => {
		const intervalId = setInterval(func, duration);
		return () => clearInterval(intervalId);
	}, []);
	return 0;
};
