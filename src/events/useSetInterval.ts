import React from 'react';



export const useSetInterval = (
	func: Function,
	dependencies: any[] = [],
	duration: number=1000
) => {
	React.useEffect(() => {
		const intervalId = setInterval(func, duration);
		return () => clearInterval(intervalId);
	}, dependencies);
	return 0;
};
