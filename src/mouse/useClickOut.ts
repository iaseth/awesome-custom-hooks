import React from 'react';



export const useClickOut = (elementRef: any, callback: any) => {
	React.useEffect(() => {
		function handleClickOut (event: any) {
			event.preventDefault();
			if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('click', handleClickOut, true);
		return () => document.removeEventListener('click', handleClickOut, true);
	}, [elementRef, callback]);

	return 0;
};
