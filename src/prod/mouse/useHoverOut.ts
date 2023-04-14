import React from 'react';



export const useHoverOut = (elementRef: any, callback: any) => {
	React.useEffect(() => {
		function handleHoverOut (event: any) {
			event.preventDefault();
			if (elementRef && elementRef.current && elementRef.current.contains(event.target)) {
				callback();
			}
		}

		document.addEventListener('mouseout', handleHoverOut, true);
		return () => document.removeEventListener('mouseout', handleHoverOut, true);
	}, [elementRef, callback]);

	return 0;
};
