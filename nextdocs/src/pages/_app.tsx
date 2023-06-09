import Script from 'next/script';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import {Layout} from '../components';



export default function App ({ Component, pageProps }: AppProps) {
	return (
		<Layout {...{pageProps}}>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-L3RDS96NTZ" strategy="afterInteractive" />
			<Script strategy="afterInteractive" id="googleAnalytics">{`
				window.dataLayer = window.dataLayer || [];
				function gtag() {dataLayer.push(arguments);};
				if (document.location.hostname.search("awesome-custom-hooks") !== -1) {
					gtag('js', new Date()); gtag('config', 'G-L3RDS96NTZ');
				}
			`}</Script>
			<Component {...{pageProps}} />
		</Layout>
	);
}
