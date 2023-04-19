import React from 'react';
import Link from 'next/link';
import fs from 'fs';

import * as examples from '../examples';
const Examples: Record<string, any> = examples;

import {HooksJsonType, HookType} from './index';
import hooksJson from '../../../hooks.min.json';
const {hooks}: HooksJsonType = hooksJson;


interface FileType {
	path: string,
	content?: string,
}


function getFile (path: string) {
	const file: FileType = {path};
	const localPath = `../${path}`;
	file.content = fs.readFileSync(localPath, {encoding:'utf8', flag:'r'});

	return file;
}

export async function getStaticProps (context: any) {
	const {params} = context;
	const hook: HookType = hooks.find(hook => hook.name.toLowerCase() === params.hook.toLowerCase())!;

	const files: any = {};
	files.prodDtsPath = getFile(hook.prodDtsPath);
	files.prodJsPath = getFile(hook.prodJsPath);
	files.prodSrcPath = getFile(hook.prodSrcPath);

	return {
		props: {hooks, hook, files}
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

function ShowFile ({file}: {file: any}) {
	return (
		<article className="max-w-3xl mx-auto">
			<header className="bg-zinc-800 text-white px-4 py-3">
				<h4>{file.path}</h4>
			</header>
			<main className="bg-zinc-200 px-4 py-3 overflow-hidden">
				<pre className="text-wrap">{file.content}</pre>
			</main>
		</article>
	);
}

export default function HookPage ({pageProps}: {pageProps: any}) {
	const {hook, files} = pageProps;
	const exampleComponentName = hook.exampleComponentName;
	const ExampleComponent = Examples[exampleComponentName];

	return (
		<article>
			<header>
				<section className="max-w-3xl mx-auto">
					<ExampleComponent />
				</section>
			</header>
			<main>
				<section className="py-12 space-y-8">
					<ShowFile file={files["prodSrcPath"]} />
					<ShowFile file={files["prodJsPath"]} />
					<ShowFile file={files["prodSrcPath"]} />
				</section>
			</main>
		</article>
	);
}
