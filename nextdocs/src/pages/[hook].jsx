import Link from 'next/link';

import hooksJson from '../../../hooks.min.json';
const {hooks} = hooksJson;


export async function getStaticProps (context) {
	const {params} = context;
	const hook = hooks.find(hook => hook.name.toLowerCase() === params.hook.toLowerCase());

	return {
		props: {hooks, hook}
	};
}

export async function getStaticPaths () {
	const paths = hooks.map(hook => {
		return {
			params: {
				hook: hook.name
			}
		};
	});

	return {
		paths,
		fallback: false
	};
}

export default function HookPage ({pageProps}) {
	const {hook} = pageProps;

	return (
		<article>
			<h4></h4>
		</article>
	);
}
