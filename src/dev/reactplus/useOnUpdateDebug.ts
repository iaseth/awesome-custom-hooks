import React from 'react';



export const useOnUpdateDebug = (callback: any) => {
	React.useEffect(() => {
		callback();
	});

	return 0;
};
