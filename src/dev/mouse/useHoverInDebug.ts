import React from 'react';



export const useHoverInDebug = (elementRef: any, callback: any) => {
	React.useEffect(() => {
		function handleHoverIn (event: any) {
			event.preventDefault();
			if (elementRef && elementRef.current && elementRef.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('mouseover', handleHoverIn, true);
		return () => document.removeEventListener('mouseover', handleHoverIn, true);
	}, [elementRef, callback]);

	return 0;
};
