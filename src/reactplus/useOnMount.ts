import React from 'react';



export const useOnMount = (callback: any) => {
	React.useEffect(() => {
		callback();
	}, []);

	return 0;
};
