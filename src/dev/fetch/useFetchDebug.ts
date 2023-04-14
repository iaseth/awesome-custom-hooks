import React from 'react';



export const useFetchDebug = (url: string) => {
	const [data, setData] = React.useState<string | null>(null);

	React.useEffect(() => {
		fetch(url)
			.then(res => res.text())
			.then(res => setData(res));
	}, [url]);

	return [data];
};
