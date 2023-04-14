import React from 'react';



export const useOnMount = (func: Function) => {
	React.useEffect(() => {
		func();
	}, []);

	return 0;
};
