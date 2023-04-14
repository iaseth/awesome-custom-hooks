import React from 'react';



export const useSetInterval = (
	callback: any,
	dependencies: any[] = [],
	duration = 1000
) => {
	React.useEffect(() => {
		const intervalId = setInterval(callback, duration);
		return () => clearInterval(intervalId);
	}, dependencies);
	return 0;
};
