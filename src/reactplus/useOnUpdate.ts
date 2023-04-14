import React from 'react';



export const useOnUpdate = (func: Function) => {
	React.useEffect(() => {
		func();
	});

	return 0;
};
