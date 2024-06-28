import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Script from "next/script";

export default async function Page() {
	const client = createClient();
	const page = await client.getSingle("homepage");

	return (
		<>
			<Script
				defer
				src='https://umami.keiprojects.com/script.js'
				data-website-id='9d1d44c4-7ecb-4983-b24e-521583208dd4'
			/>
			<SliceZone slices={page.data.slices} components={components} />
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const page = await client.getSingle("homepage");

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
	};
}
