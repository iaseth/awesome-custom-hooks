import React from 'react';



export const useSetTimeout = (
	func: Function,
	dependencies: any[] = [],
	timeout: number=1000
) => {
	React.useEffect(() => {
		const timeoutId = setTimeout(func, timeout);
		return () => clearTimeout(timeoutId);
	}, dependencies);
	return 0;
};
