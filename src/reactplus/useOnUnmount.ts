import React from 'react';



export const useOnUnmount = (callback: (() => void)) => {
	React.useEffect((): (() => void) => {
		return callback;
	}, []);

	return 0;
};
