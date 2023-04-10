
import hooksJson from '../../../hooks.min.json';
const {hooks} = hooksJson;


export async function getStaticProps (context) {
	const {params} = context;
	const hook = hooks.find(hook => hook.name.toLowerCase() === params.hook.toLowerCase());

	return {
		props: {hook}
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

export default function HookPage ({hook}) {

	return (
		<article>
			<header className="bg-zinc-800 text-white px-4 py-20 text-center">
				<h2 className="text-4xl font-bold">{hook.name}</h2>
			</header>
			<h2>{hook.filename}</h2>
		</article>
	);
}