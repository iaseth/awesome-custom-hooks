import React from 'react';



export const useFetchXMLDebug = (url: string) => {
	const [doc, setDoc] = React.useState<Document | null>(null);

	React.useEffect(() => {
		fetch(url)
			.then(res => res.text())
			.then(text => new window.DOMParser().parseFromString(text, "text/xml"))
			.then(doc => setDoc(doc));
	}, [url]);

	return [doc];
};
