import React from 'react';



export const useFetchJSONDebug = (url: string) => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(res => setData(res));
	}, [url]);

	return [data];
};
