import React from 'react';



export const useOnMountDebug = (callback: any) => {
	React.useEffect(() => {
		callback();
	}, []);

	return 0;
};
