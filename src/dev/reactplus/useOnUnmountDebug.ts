import React from 'react';



export const useOnUnmountDebug = (callback: (() => void)) => {
	React.useEffect((): (() => void) => {
		return callback;
	}, []);

	return 0;
};
