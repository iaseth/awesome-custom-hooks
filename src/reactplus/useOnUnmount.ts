import React from 'react';



export const useOnUnmount = (func: (() => void)) => {
	React.useEffect((): (() => void) => {
		return func;
	}, []);

	return 0;
};
