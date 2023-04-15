import Link from 'next/link';

import hooksJson from '../../../hooks.min.json';
const {hooks}: HooksJsonType = hooksJson;


export interface HooksJsonType {
	hooks: HookType[]
}

export interface FileInfoType {
	emptyLinesCount: number,
	exportsCount: number,
	importsCount: number,
	linesCount: number,
	returnsCount: number,
	path: string
}

export interface HookType {
	entry: string,
	filename: string,
	name: string,
	returnStatement: string,

	devDtsPath: string,
	devJsPath: string,
	devSrcPath: string,

	prodDtsPath: string,
	prodJsPath: string,
	prodSrcPath: string,

	dtsFileInfo: FileInfoType,
	jsFileInfo: FileInfoType,
	srcFileInfo: FileInfoType,
}


export async function getStaticProps (context: any) {
	return {
		props: {hooks}
	};
}


export function HookLink ({hook}: {hook: any}) {
	return (
		<Link className="bg-white border border-zinc-300 rounded shadow" href={hook.name}>
			<header className="px-4 py-6 text-center">
				<h2 className="font-bold">{hook.name}</h2>
			</header>
		</Link>
	);
}


export default function Home () {
	return (
		<main className="bg-slate-200 min-h-screen py-24">
			<header></header>
			<main>
				<section className="max-w-5xl mx-auto px-4 py-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
					{hooks.map((hook: any, k: number) => <HookLink key={k} {...{hook}} />)}
				</section>
			</main>
		</main>
	);
}
