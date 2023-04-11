


export default function Header ({pageProps} : {pageProps: any}) {
	const {hook} = pageProps;
	const title = hook ? hook.name : "Awesome";

	return (
		<header className="bg-zinc-800 text-white text-center px-4 py-20">
			<h1 className="text-3xl md:text-4xl lg:text-5xl">{title}</h1>
		</header>
	);
}
