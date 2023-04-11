import Head from 'next/head';

import Header from './Header/Header';
import Footer from './Footer/Footer';



interface LayoutProps {
	pageProps: any,
	children: any
};

export default function Layout ({pageProps, children} : LayoutProps) {

	return (
		<>
			<Head>
				<title>{`Awesome Custom Hooks | ${pageProps.title}`}</title>
				<meta name="description" content={pageProps.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header {...{pageProps}} />

			<main className="min-h-screen">{children}</main>
			<Footer {...{pageProps}} />
		</>
	);
}
