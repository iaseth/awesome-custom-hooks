import React from 'react';



export const useOnUpdate = (callback: any) => {
	React.useEffect(() => {
		callback();
	});

	return 0;
};
