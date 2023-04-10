import React from 'react';



export const useSetTimeout = (func: Function, timeout: number) => {
	React.useEffect(() => {
		const timeoutId = setTimeout(func, timeout);
		return () => clearTimeout(timeoutId);
	}, []);
	return 0;
};
