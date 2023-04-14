import React from 'react';



export const useSetTimeout = (
	callback: any,
	dependencies: any[] = [],
	timeout = 1000
) => {
	React.useEffect(() => {
		const timeoutId = setTimeout(callback, timeout);
		return () => clearTimeout(timeoutId);
	}, dependencies);
	return 0;
};
