import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { MainLayout, EmptyLayout, AdminLayout } from './components/layout';

export interface IAboutProps {}

export default function About(props: IAboutProps) {
	const router = useRouter();

	console.log(router.query);

	return (
		<div>
			<Link legacyBehavior href="/">
				<a style={{ color: 'red' }}>Home</a>
			</Link>
		</div>
	);
}

About.Layout = MainLayout;
