import React from 'react';



export const useClickIn = (elementRef: any, callback: any) => {
	React.useEffect(() => {
		function handleClickIn (event: any) {
			event.preventDefault();
			if (elementRef && elementRef.current && elementRef.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('click', handleClickIn, true);
		return () => document.removeEventListener('click', handleClickIn, true);
	}, [elementRef, callback]);

	return 0;
};
